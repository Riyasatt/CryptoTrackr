import { Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import {TrendingCoins} from "../../config/api"
import { CryptoSate } from '../../CryptoContext'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

export function numberWithCommas (x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     
}

const Caraousel = () => {
     const {currency,symbol}=CryptoSate()

     const [trending, setTrending] = useState([])

     const fetchTrendingCoins=async()=>{
          const {data}=await axios.get(TrendingCoins(currency))
          setTrending(data)
     }


     useEffect(() => {
       fetchTrendingCoins();
     }, [currency])
     
     const responsive={
          0:{
               items:2
          },
          512:{
               items:4
          }
     }

     const items=trending.map((coin)=>{
          const profit=coin.price_change_percentage_24h>=0

          return(
               <div style={{margin:"0 30px"}}>

               <Link to={`/coin/${coin.id}`} >
                    <img src={coin.image} alt={coin.name}
                         style={{height: '90px',marginBottom:"10px"}}
               />
               <div style={{display:'flex',justifyContent:'space-evenly' }}>
               <Typography sx={{color:'white',fontWeight:550, }}>
                    {coin.symbol.toUpperCase()}
               </Typography>
               <Typography sx={{color:profit>0? "green":"red", fontWeight:550}}>
                    {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}
               </Typography>
               </div>

               <Typography sx={{color:'white',fontWeight:600, fontSize:20, mt:1}}>
                    {symbol}{numberWithCommas(coin.current_price.toFixed(2))}
               </Typography>
               
               </Link>
               </div>
          )
     })


  return (
    <div>
     <AliceCarousel
          mouseTracking
          infinite
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={1000}
          animationDuration={1500}
          responsive={responsive}
          items={items}
     />
    </div>
  )
}

export default Caraousel