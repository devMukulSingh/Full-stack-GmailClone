import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComponents = () => {
    const error = useRouteError();
    console.log(error);

  return (
    <Box style = {{ marginLeft:'250' }}>
        <Typography>
            There was a Error loading this page
        </Typography>
    </Box>
  )
}

export default ErrorComponents