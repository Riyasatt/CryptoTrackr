import React from 'react'
import { AppBar, 
  Toolbar, 
  Typography, 
  Select, 
  MenuItem, 
  Container, 
  Link, 
  Box} 
  from '@mui/material'
import { CryptoState } from '../CryptoContext'
import { NavLink } from 'react-router-dom'



const Header = () => {

  const { currency, setCurrency } = CryptoState()

  console.log(currency, setCurrency);

  return (
    <Box position="static" sx={{ bgcolor: "#1d1d2b", py:0.5 }}>
      <Container sx={{ bgcolor: 'transparent' }} >
        <Toolbar  >
          <div style={{width:"100%"}}>
            <Typography variant="h5" component="div" sx={{  fontWeight: 900}}>
            <NavLink to="/" style={{textDecoration:"none",color:'#fcc200' }} >
              Crypto Trackr
              </NavLink>
            </Typography>
          </div>

          <Select
            style={{
              width: 100,
              height: 40,
              marginLeft: 15
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </Box>

  )
}

export default Header