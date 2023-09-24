import emailModel from "../model/email.js";

/////Saving the Sent Email into Database
export const saveSentEmail = async(req,res) => {
  try {
      const email = new emailModel(req.body);
      email && await email?.save();
      res.status(200).json(`Email Saved to Database`);
  } catch (error) {
        res.status(500).json(error.message);
  }
}

////Getting the Emails from the Database to show at the Frontend
export const getEmails = async( req,res) => {
let emails;
  try {
    if(req.params.type === 'bin'){
      emails = await emailModel.find( { bin:true } );
    }
    else if (req.params.type === "all mail"){
      emails = await emailModel.find({});
    }
    else if( req.params.type === "starred"){
      emails = await emailModel.find( {starred:true, bin:false} );
    }
    else{
      emails = await emailModel.find( { type: req.params.type } );
    }
    res.status(200).json(emails);

  } catch (error) {
      res.status(500).json(error);
      console.log(`Error in getEmails Controller ${error}`);
  }

}

///Moving the Emails to Bin By Overwriting or updating the Bin value to true(bin:true)
export const moveToBin = async(req,res) => {
  try {
      await emailModel.updateMany( { _id : { $in : req.body }} , { $set : { bin: true, starred: false ,type:''} } );
      return res.status(200).json(`Email deleted Successfully`);
  } catch (error) {
      res.status(500).json(`Error in moveToBin Controller ${error.message}`);
  }
}

////Starring the Selected Emails by Updating existing starred:false to starred:true
export const toggleStarredEmail = async(req,res) => {
  try {
      await emailModel.updateOne( { _id : req.body.id }, { $set : {starred: req.body.value} } );
      res.status(200).json(`Email Starred Successfully`);
  } catch (error) {
      res.status(500).json(`Error in toggleStarredEmails ${error.message}`)
  }
}

////Deleting the Mails permanently which exist in Bin section or in which (bin:true)
export const deleteMails = async(req,res) => {
try {
    await emailModel.deleteMany( { _id : { $in : req.body }} );
    res.status(200).json(`Email deleted Successfully`);
} catch (error) {
    res.status(500).json(`Error in deleteMails Controller ${error.message}`);
}
} 