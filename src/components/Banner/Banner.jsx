import { Container, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <div style={{backgroundImage:"url(./banner2.jpg)"}}>
     <Container
      sx={{display:'flex',
     height:400, 
     flexDirection:'column', 
     pt:2, 
     justifyContent:'space-around',
     textAlign:'center'
     }}>
          <div>
               <Typography variant='h1' sx={{fontWeight:900, mb:1}}>
                    Crypto Trackr
               </Typography>
               <Typography variant='h6'>
                    Get all the Info Regarding your Favorite Crypto Currency
               </Typography>
          </div>
     </Container>
    </div>
  )
}

export default Banner