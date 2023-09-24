import React from 'react'
import { Box, Divider, Typography, styled } from "@mui/material";

const MainBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    whiteSpace:'nowrap',
    width:'100%',
    '& >.MuiTypography-body1':{
        fontSize:14,
        fontWeight:300,
        
    }
})
const StyledDivider = styled(Divider)({
    width:'100%',
    margin:'1rem 0rem'
})
const NoMails = ( { message }) => {
  return (
    <>
    <MainBox>
        <Typography>
            {message?.heading}
        </Typography>
        <Typography >
            {message?.subHeading}
        </Typography>
        <StyledDivider />
    </MainBox>
    </>
  )
}

export default NoMails