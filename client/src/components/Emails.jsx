import React, { useEffect, useState } from 'react'
import { Box, Checkbox, styled } from '@mui/material'
import useApi from '../hooks/useApi'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../service/api.url'
import Email from './Email';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined'
import NoMails from './Commons/NoMails'
import { EMPTY_TABS } from '../constants/constants'

//////////////////////////////////////////////
const MailsHeader = styled(Box)`
  display:flex;
  align-items:center;
`
/////////////////MAIN FUNCTION starts////////////////

const Emails = () => {
  
  ///////////VARIABLES STARTS/////////////////////////
  const[refreshScreen, setRefreshScreen ] = useState(true);
  const[ selectedEmails, setSelectedEmails ] = useState([]);

  const { toggleSidebar } = useOutletContext();
  const { type } = useParams();
  
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveToBinService = useApi(API_URLS.moveEmailToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmail);
  ///////////VARIABLES ENDS//////////////////////////

  useEffect( () => {
     getEmailsService.call({},type)
  },[type,refreshScreen])

  //////////////////////////////FUNCTIONS STARTS//////////////////////////////////
  //Selecting All Mails Using Checkbox
  const selectAllEmails = (e) => {
    if(e.target.checked){
        const Emails = getEmailsService?.response?.map( emails => emails._id );
        setSelectedEmails(Emails);
    }
    else{
      setSelectedEmails([]);
    }
  }
  //Moving Selcted Mails to Bin or permanently Deleting,if already in Bin
  const deleteSelectedEmails = (e) => {
    if(type==="bin"){
        deleteEmailService.call(selectedEmails);
    }   
    else{
      moveToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState);
  }
//////////////////////////////////////JSX PART STARTS//////////////////////////////////////////
  return (
    <Box style ={ toggleSidebar ? { marginLeft:'250px',padding:'1rem 1rem' } : {} } >
      <MailsHeader>
        <Checkbox size='small' onChange = { (e) => selectAllEmails(e) }/> 
        <DeleteOutlineOutlined onClick = { (e) => deleteSelectedEmails(e) }  style={{cursor:'pointer'}}/>
      </MailsHeader>
      <Box>
        {
          getEmailsService?.response?.length === 0 ?
           <NoMails message = {EMPTY_TABS[type]} />: 
          getEmailsService?.response?.map((email,index) => {
            return(
              <>
                <Email email = {email} key = {index} selectedEmails = {selectedEmails}
                setRefreshScreen = {setRefreshScreen} setSelectedEmails= {setSelectedEmails}/>
              </>
            )
          })  
        }
        </Box>
    </Box>
  )
}

export default Emails