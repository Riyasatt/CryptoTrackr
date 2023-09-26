import { Container, Typography } from '@mui/material'
import React from 'react'
import Caraousel from './Caraousel'

const Banner = () => {
  return (
    <div style={{backgroundImage:"url(./banner3.jpg)", backgroundSize:"cover" }}>
     <Container
      sx={{display:'flex',
     height:450, 
     flexDirection:'column', 
     pt:2, 
     justifyContent:'space-around',
     textAlign:'center'
     }}>
          <div>
               <Typography variant='h2' sx={{fontWeight:900, mb:1}}>
                    Crypto <span style={{color:'gold'}}>Trackr</span>
               </Typography>
               <Typography variant='subtitle1' sx={{fontWeight:100}}>
                    Get All The Info Regarding Your Favorite Crypto Currency
               </Typography>
          </div>
          <Caraousel />
     </Container>
    </div>
  )
}

export default Banner