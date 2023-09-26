import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{py:3, bgcolor:"#1d1d2b"}}>
      <Container>
        <Box >
        <Typography sx={{color:"#fcc200"}}>Made with 	&#x1F493; by Riyasat</Typography>
        </Box>
        

      </Container>
    </Box>
  )
}

export default Footer