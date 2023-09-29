import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import { ThemeProvider, createTheme } from '@mui/material'
import CryptoContext from './CryptoContext'

const App = () => {

     const customTheme = createTheme({
          palette: {
               mode: "dark",
               primary:{
                    main:"#fcc200"
               },
               main:{
                    primary: "#fcc200"
               },
               background:{
                    primary: "rgba(6, 6, 24, 0.955)",
                    secondary:"#1d1d2b"
               }
          },
          typography: {
               fontFamily: "Montserrat",
          }

     })

     return (
          <CryptoContext>
               <ThemeProvider theme={customTheme}>
                    <div>
                         <Header />
                         <Outlet />
                         <Footer />
                    </div>
               </ThemeProvider>
          </CryptoContext>
     )
}

export default App