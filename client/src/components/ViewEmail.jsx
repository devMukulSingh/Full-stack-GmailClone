import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useOutletContext, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_URLS } from '../service/api.url';
import useApi from "../hooks/useApi";
/////////////////////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'1rem 2rem',
  width:'calc(100%-250px)',

})
const Subject = styled(Typography)({
    fontSize:'1.5rem',
    marginLeft:'3.5rem',
    fontWeight:'300',

})
const Indicator = styled(Typography)({
    color:'#666666',
    background:'#ddd',
    fontSize:12,
    padding:'1px 4px',
    borderRadius:'4px',
    marginLeft:'1rem',
    height:20,
})
const SenderImage = styled('img')({
  borderRadius:'50%',
  width:40
})
const SenderEmail = styled(Typography)({
  fontSize:14,
  marginLeft:'1rem',
  fontWeight:'500',
})
const BodyBox = styled(Box)({
  marginTop:'1rem',
  wordBreak:'break-all',
  marginLeft:'3.5rem',
})
const BodyText = styled(Typography)({
  fontWeight:'300',
})
const handleGoBack = () => {
  window.history.back();
}

////////////////////////////////MAIN FUNCTION STARTS////////////////////

const ViewEmail = () => {

  const { toggleSidebar } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;
  const moveToBinService = useApi(API_URLS.moveEmailToBin);

  //Moving Mails to Bin Function using API
  const handleDeleteBtn = () => {
    moveToBinService.call([email._id]);
    window.history.back();
  }
 ///////////////////////////////////////JSX PART/////////////////////////////////////////////////////////////////
  return (
    <MainBox style = { toggleSidebar ? { marginLeft:'250px' } : {} }>

      <Box>
        <ArrowBackIcon onClick = { () => { handleGoBack()} } fontSize="small" color='action' sx={{cursor:'pointer'}} />
        <DeleteIcon fontSize="small" color='action' onClick = { ()=>handleDeleteBtn() } sx={{ marginLeft:'0.5rem',cursor:'pointer'}}/>
      </Box>

      <Box sx={{display:'flex', alignItems:'center',marginTop:'1.5rem'}}>
        <Subject>{email.subject}</Subject>
        <Indicator>Inbox</Indicator>
      </Box>

      <Box sx={{ display:'flex',justifyContent:'space-between'}}>
        <Box sx={{display:'flex', marginTop:'1rem'}}>
          <SenderImage src="//ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png" alt="" />
          <SenderEmail>{email.from}</SenderEmail>
        </Box>

        <Typography> { (new window.Date(email.date).getDate() )}&nbsp;
            { ( new window.Date(email.date).toLocaleString('default', {month:'long'}))}</Typography>
      </Box>

      <BodyBox>
        <BodyText variant=''> {email.body} </BodyText>
      </BodyBox>

    </MainBox>
  )
}

export default ViewEmail