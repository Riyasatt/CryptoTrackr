import React from 'react'
import {
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Container,
  Box,
  Link
}
  from '@mui/material'
import { CryptoState } from '../CryptoContext'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'


const CustomSelect = styled(Select)(({ theme }) => ({
  height: 40,
  // color: theme.palette.main.primary,
  '& label.Mui-focused': {
       color: theme.palette.main.primary,
  },
  '& .MuiInput-underline:after': {
       borderBottomColor: theme.palette.main.primary,
  },
  '& .MuiOutlinedInput-root': {
       '& fieldset': {
            borderColor: theme.palette.main.primary,
       },
       '&:hover fieldset': {
            borderColor: theme.palette.main.primary,
       },
       '&.Mui-focused fieldset': {
            borderColor: theme.palette.main.primary,
       }
  }


}))


const Header = () => {

  const { currency, setCurrency } = CryptoState()

  console.log(currency, setCurrency);

  return (
    <Box position="static" sx={{ bgcolor: "background.secondary", py: 0.5 }}>
      <Container >
        <Toolbar  >
          <div style={{ width: "100%" }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 900 }}>
              <Link to="/" component={NavLink} color='inherit' sx={{ textDecoration: "none", color:"main.primary" }} >
                Crypto Trackr
              </Link>
            </Typography>
          </div>

          <CustomSelect
          sx={{color:"main.primary"}}
          variant="outlined"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </CustomSelect>
        </Toolbar>
      </Container>
    </Box>

  )
}

export default Header