import { Box, Container, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../../CryptoContext'
import axios from 'axios'
import { SingleCoin } from '../../config/api'
import CoinChart from "./CoinChart"
import styled from '@emotion/styled'



const ResponsiveBox=styled(Box)(({theme})=>({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingTop:120,
  paddingBottom:130,
  display: 'flex',
  [theme.breakpoints.down("lg")]:{
    flexDirection:'column',
  }
}))

const SideBar=styled(Box)(({theme})=>({
  textAlign:'center',
  width:"30%",
  borderRight:"1px solid",
  borderColor:theme.palette.main.primary,
  [theme.breakpoints.down("lg")]:{
    width:"100%",
    borderRight:"0px",
  }
}))

const CoinPage = () => {
  const [coin, setCoin] = useState()
  const [loading, setloading] = useState(false)
  const { id } = useParams()


  const { currency, symbol } = CryptoState()

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [])

  const fetchCoin = async () => {
    setloading(true)
    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)
    setloading(false)
  }

  useEffect(() => {
    fetchCoin()
    // eslint-disable-next-line
  }, [currency])
  

  return (
    <Box sx={{minHeight:"90vh", bgcolor: "background.primary" }}>
      {loading ? (
        <LinearProgress color='inherit' sx={{ color: "main.primary" }}></LinearProgress>
      ) : (
        <ResponsiveBox>
          <SideBar>
            <Container>
              <img src={coin?.image.large} alt={coin?.name} height="200px" />
              <Typography variant='h3' sx={{ fontWeight: "700", my: 3 }}>{coin?.name}</Typography>
              <div style={{ textAlign: 'left' }}>
                <Typography variant='subtitle1' sx={{ textAlign: "justify", wordSpacing: 2, marginBottom: 4 }}>{coin?.description.en.split(".")[0]}</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 20, marginBottom: 2 }}>
                  Rank : <Box component="span" sx={{ fontWeight: 300, color: "main.primary" }}>&nbsp; {coin?.coingecko_rank}</Box>
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 20, marginBottom: 2 }}>
                  Current Price &nbsp;: <Box component="span" sx={{ fontWeight: 300, color: "main.primary" }}>&nbsp;{symbol}&nbsp;{coin?.market_data.current_price[currency.toLowerCase()]}</Box>
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 20, marginBottom: 2 }}>
                  Market Cap &nbsp;:<Box component="span" sx={{ fontWeight: 300, color: "main.primary" }}>&nbsp;&nbsp;{symbol} &nbsp;{((coin?.market_data.market_cap[currency.toLowerCase()]) / 1000000).toFixed(2)} M</Box>
                </Typography>
              </div>

            </Container>
          </SideBar>

              <CoinChart />
        </ResponsiveBox>

      )}

    </Box>
  )
}

export default CoinPage