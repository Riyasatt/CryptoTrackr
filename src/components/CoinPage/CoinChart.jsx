import { Box, CircularProgress, Container, } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { CryptoState } from '../../CryptoContext'
import axios from 'axios'
import { HistoricalChart } from '../../config/api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import styled from '@emotion/styled'
import { CategoryScale,Chart,registerables } from 'chart.js'
import {chartDays} from "../../config/data"
import SelectButton from './SelectButton'


const ChartContainer=styled(Container)(({theme})=>({
  width:"70%",
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  color: theme.palette.main.primary,
  [theme.breakpoints.down("lg")]:{
    width: '100%',
    paddingTop:20
  }
}))

const CoinChart = () => {
     const [chartData, setchartData] = useState()
     const [days, setdays] = useState(1)

     const {id}=useParams()

     const{currency,symbol}=CryptoState()

     const fetchChart =async()=>{
      const {data}=await axios.get(HistoricalChart(id,days,currency))
      setchartData(data.prices)
     }

     useEffect(() => {
       fetchChart()
       // eslint-disable-next-line
     }, [days,currency])


     Chart.register(CategoryScale)
     Chart.register(...registerables)
     
  return (

      <ChartContainer>
        {!chartData ? (
          <CircularProgress size={150} thickness={1}></CircularProgress>
        ) :(
          <>
            <Line
              color='gold'
              data={{
                labels: chartData.map((coin)=>{
                  let date = new Date(coin[0])
                  let time = 
                  date.getHours() > 12 
                    ?`${date.getHours() -12 }:${date.getMinutes()} PM`  
                    :`${date.getHours()}:${date.getMinutes()} AM`

                  return days===1 ?time:date.toLocaleDateString()  
                }),
                datasets:[{
                  data:chartData.map((coin)=>coin[1]),
                  label:`Price ( Past ${days} days ) in ${symbol}`,
                  borderColor:"#fcc200"
                }]
              }}
              options={{
                elements:{
                  point:{
                    radius:1
                  }
                }
              }}
            />
            <Box sx={{display:'flex',marginTop:3,justifyContent:"space-evenly"}}>
              {chartDays.map((day)=>(<SelectButton selected={day.value===days} onClick={()=> setdays(day.value)}>{day.label}</SelectButton>))}
            </Box>
            </>
            

        )}
     </ChartContainer>



  )
}

export default CoinChart