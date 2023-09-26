import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const CoinPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  

  return (
    <Box sx={{minHeight:"100vh"}}>
      <Typography>
        CoinPage
        </Typography>
        </Box>
  )
}

export default CoinPage