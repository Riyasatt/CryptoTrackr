import { Box, Container, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import axios from 'axios'
import { SingleCoin } from '../config/api'
import {numberWithCommas} from "./Banner/Caraousel"

const CoinPage = () => {
  const [coin, setCoin] = useState()
  const [loading, setloading] = useState(false)
  const {id} =useParams()


  const{currency,symbol}=CryptoState()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const fetchCoin=async()=>{
    setloading(true)
    const {data}= await axios.get(SingleCoin(id))
    setCoin(data)
    setloading(false)
  }

  useEffect(()=>{
    fetchCoin()
  },[currency])



  return (
    <Box sx={{minHeight:"90vh"}}>
    {loading?(
      <LinearProgress></LinearProgress>
    ) : (
    <Box sx={{my:5,display:'flex'}}>
      <Box sx={{textAlign:'center',borderRight:"1px solid #fcc200",width:"30%"}}>
        <Container>
        <img src={coin?.image.large} alt={coin?.name} height="200px" />
        <Typography variant='h3' sx={{fontWeight:"700",my:3}}>{coin?.name}</Typography>
        <div style={{textAlign:'left'}}>
        <Typography variant='subtitle1' sx={{textAlign:"justify",wordSpacing:2,marginBottom:4}}>{coin?.description.en.split(".")[0]}</Typography>
        <Typography sx={{fontWeight:600, fontSize:25,marginBottom:2}}>
          Rank : <span style={{fontWeight:300, color:"#fcc200"}}>&nbsp; {coin?.coingecko_rank}</span>
          </Typography>
        <Typography sx={{fontWeight:600, fontSize:25,marginBottom:2}}>
          Current Price &nbsp;: <span style={{fontWeight:300, color:"#fcc200"}}>&nbsp;{symbol}&nbsp;{coin?.market_data.current_price[currency.toLowerCase()]}</span>
          </Typography>
        <Typography sx={{fontWeight:600, fontSize:25,marginBottom:25}}>
          Market Cap &nbsp;:<span style={{fontWeight:300, color:"#fcc200"}}>&nbsp;&nbsp;{symbol} &nbsp;{ ((coin?.market_data.market_cap[currency.toLowerCase()])/1000000).toFixed(2)} M</span>
          </Typography>
        </div>

        </Container>
      </Box>
      <Box></Box>
      {/* Chart */}

    </Box>

    )}
    </Box>
  )
}

export default CoinPage