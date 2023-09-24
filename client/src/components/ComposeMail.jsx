import { Dialog , InputBase, Typography, styled, TextField, Box , Button} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import useApi from '../hooks/useApi.jsx';
import { API_URLS } from '../service/api.url.js';
////////////////////////////////////////////////////////////////////////////

const ComposeDialog = {
    maxWidth:700,
    width:'80vmin',
    minWidth:100,
    height:'70vh',
    position:'absolute',
    bottom:0,
    right:'3rem',

}
const MailBoxHeader = styled(Typography)`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#F2F6FC;
    height:2rem;
    padding:0.5rem 1rem;
    font-size:0.9rem;
`

const MailBoxFooter = styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem ;
    margin-top:auto;
`
const SendButton = styled(Button)({
    background:'#0B57D0',
    color:'white',
    width:'6rem',
    padding:'0.5rem 0.5rem',
    borderRadius:'25px',
    textTransform:'none',

    '&:hover':{
        background:'#3f76cc',
    }
})


///////////////////////////////////////MAIN FUNCTIONS STARTS/////////////////////////////////////////////////////

const ComposeMail = ( { composeBtn ,setComposeBtn }) => {    

    //Variables
    const[ inputData, setInputData ] = useState();
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmail);

    const config = {
        Host : "smtp.elasticemail.com",
        Username : 'mukulsingh2276@gmail.com',
        Password : '7562E5B6C7F297DB6CA08939B0FA4101CF96',
        Port : 2525,
    }
    ///Closing Compose Dialog Box and Saving into Drafts
    const handleCloseCompose = (e) => {
        e.preventDefault();
        const payload = {
            to: inputData?.to,
            from: 'mukulsingh2276@gmail.com',
            subject: inputData?.subject,
            body: inputData?.body,
            date: new Date(),
            image: '',
            name: 'mukulsingh',
            starred: false,
            type: 'draft',
        }
        saveDraftService.call(payload);
        
        if(!saveDraftService.error){
            setComposeBtn(false);
            setInputData({});
        }
        setComposeBtn(false);

    }
    ////Saving Input Data( from,to,body,subject) into states 
    const onValueChange = (e) => {
        setInputData( {...inputData,  [e.target.name] : e.target.value} );
    }

    ///Handling Send Mail Button
    const handleSendBtn = async(e) => {
        e.preventDefault(); 
        if(window.Email){
            window.Email.send({
                ...config,
                To : inputData.to,
                From : "mukulsingh2276@gmail.com",
                Subject : inputData.subject,
                Body : inputData.body,

            }).then(
              message => alert(message)
            )
            .catch( (err) => {
                console.log(err);
            })
        }
        const payload = {
            to: inputData.to,
            from: 'mukulsingh2276@gmail.com',
            subject: inputData.subject,
            body: inputData.body,
            date: new Date(),
            image: '',
            name: 'mukulsingh',
            starred: false,
            type: 'sent',
        }
        sentEmailService.call(payload);

        if(!sentEmailService.error){
            setComposeBtn(false);
            setInputData({});
        }
        setComposeBtn(false);

    }

    const handleDeleteBtn = () => {
        setComposeBtn(false);
    }

///////////////////////////////////////////////////JSX PART STARTS/////////////////////////////////////////////////////////////////////////////////////    
  return (
    <>
        <Dialog 
        open={composeBtn}
        hideBackdrop={true}
        PaperProps={{ sx: ComposeDialog}}
        >
            <MailBoxHeader>
                New Message
                <IconButton onClick = { (e) => handleCloseCompose(e)} >
                    <CloseIcon fontSize='small'/> 
                </IconButton>
            </MailBoxHeader>
            <InputBase placeholder='Recipients' name="to" sx={{ padding:'8px 15px', fontSize:'14px', borderBottom:'1px solid #ECEFF1'}} onChange={ (e) => onValueChange(e)}/>
            <InputBase placeholder='Subject' name="subject" sx={{ padding:'8px 15px',fontSize:'14px', borderBottom:'1px solid #ECEFF1'}} onChange={ (e) => onValueChange(e)}/>
            <TextField
                multiline
                maxRows={20}
                minRows={12}
                name="body"
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none'}}}
                onChange={ (e) => onValueChange(e)}
            />
            <MailBoxFooter> 
                <SendButton onClick={ (e) => handleSendBtn(e)}>Send</SendButton>
                <IconButton onClick={ () => handleDeleteBtn() }>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
             </MailBoxFooter>
        </Dialog>

    </>
  )
}

export default ComposeMail