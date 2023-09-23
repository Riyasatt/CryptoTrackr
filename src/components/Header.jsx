import React from 'react'
import { AppBar, Box, Toolbar, Typography, Select, MenuItem, Container } from '@mui/material'
import { CryptoSate } from '../CryptoContext'



const Header = () => {

  const {currency,setCurrency}=CryptoSate()

  console.log(currency,setCurrency);

  return (
      <AppBar position="static" sx={{bgcolor:"#0b0b14"}}>
      <Container sx={{bgcolor:'transparent'}} >
        <Toolbar  >
        {/* <Link to="/"> */}
          <Typography variant="h5" component="div" sx={{ flexGrow:1,fontWeight:900, color:"gold"}}>
            Crypto Trackr
            </Typography>
            {/* </Link> */}
         

          <Select
            style={{
              width:100,
              height:40,
              marginLeft:15
            }}
            value={currency}
            onChange={(e)=> setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
        </Container>
      </AppBar>

  )
}

export default Header