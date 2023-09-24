import { Box, Checkbox, Typography } from '@mui/material'
import { React, useState} from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import styled from '@emotion/styled';
import { Navigate, useNavigate } from 'react-router-dom';
import { routes } from "../routes/routes.js";
import useApi from '../hooks/useApi.jsx';
import { API_URLS } from '../service/api.url.js';
import StarIcon from '@mui/icons-material/Star';
////////////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box)`
    width:calc(100%-32vmin);
    margin-left:0;
    display:flex;
    align-items:center;
    background:#F2F6FC;
    cursor:pointer;
    justify-content:space-between;
    padding:0rem 1rem;
    border-bottom:1px solid #E1E7EE;    
    margin-top:1px;
    &:hover{
        box-shadow: 0px 10px 10px -3px rgba(0,0,0,0.75);
    }

`
const LeftSide = styled(Typography)`
    display:flex;
    align-items:center;
    flex:0.2;
`
const CenterSide = styled(Typography)`
    display:flex;
    flex:0.7;
    justify-content:flex-start;
    overflow: hidden;
    white-space:nowrap;
    // -webkit-line-clamp: 1;
    // -webkit-box-orient: vertical;

`
const RightSide = styled(Typography)`
    display:flex;
    justify-content:flex-end;
    flex:0.1;
`
const Indicator =styled(Typography)`
    background:#DDDDDD;
    margin-right:0.5rem;
    font-weight:300;
    border-radius:5px;
    padding:2px 5px;
    font-size:12px;
    height:1rem;

`
///////////////////////MAIN FUNCTIONS STARTS/////////////////////////////
const Email = ( {email ,selectedEmails, setRefreshScreen, setSelectedEmails} ) => {

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail);
    const Navigate = useNavigate();

            ///////////FUNCTIONS STARTS/////////////////
    //Starred Mail Function 
    const handleStarredBtn = () => {
        toggleStarredService.call( { id:email._id, value:!email.starred });
        setRefreshScreen(prev => !prev);
    }
    const onValueChange = () => {
        if(selectedEmails.includes(email._id)){
            setSelectedEmails( prev => prev.filter(id => id != email._id) );
        }else{
            setSelectedEmails(prev => [...prev, email._id]);
        }
    }
        //////////FUNCTIONS ENDS/////////////////

///////////////////////////////////JSX PART/////////////////////////////////////////////////////////////
  return (
    <MainBox >

        <LeftSide>
            <Checkbox size='small' onChange={ () => onValueChange()}
                checked = { selectedEmails.includes(email._id)  } />
                {
                    email.starred ? <StarIcon fontSize="small"  sx ={{marginRight : '0.5rem',color:'#F3C84B'}} onClick = { () => handleStarredBtn() }/>:
                  <StarBorderOutlinedIcon fontSize="small" sx={{marginRight:'0.5rem'}} onClick = { () => handleStarredBtn() }/> 
                }
            <Typography onClick = { () => Navigate(routes.view.path ,email && {state: { email : email}}) }>{email.name}</Typography>
        </LeftSide>

        <CenterSide onClick = { () => Navigate(routes.view.path ,email &&{state: { email : email}}) } >
            <Indicator>Inbox</Indicator>
            <Typography sx={{display:'flex'}}>{email?.subject} {email?.body && '-'}&nbsp;{email?.body}</Typography>
        </CenterSide>

        <RightSide onClick = { () => Navigate(routes.view.path ,email &&{state: { email : email}}) } >
            { (new window.Date(email.date).getDate() )}&nbsp;
            { ( new window.Date(email.date).toLocaleString('default', {month:'long'}))}
        </RightSide>

    </MainBox>
  )
}

export default Email