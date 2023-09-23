// import Montserrat from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap';
import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import { ThemeProvider, createTheme } from '@mui/material'

const App = () => {

     const customTheme =createTheme({
          palette: {
               mode:"dark",
          },
          typography: {
               fontFamily: "Montserrat",
          }

     })

  return (
     <ThemeProvider theme={customTheme}>
       <div>
          <Header />
          <Outlet />
       </div>
    </ThemeProvider>
  )
}

export default App