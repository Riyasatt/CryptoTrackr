import React, { useEffect, useState } from 'react'
import { CryptoSate } from '../CryptoContext'
import axios from 'axios'
import { CoinList } from '../config/api'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, Stack, TextField, LinearProgress } from '@mui/material'
import { numberWithCommas } from './Banner/Caraousel'
import { Link} from 'react-router-dom'


const CoinsTable = () => {
     const [coinTable, setcoinTable] = useState([])
     const [search, setSearch] = useState("")
     const [loading, setLoading] = useState(false)
     const [page, setPage] = useState(1)

     const { currency, symbol } = CryptoSate()

     const fetchCoinTable = async () => {
          setLoading(true)
          const { data } = await axios.get(CoinList(currency))
          setcoinTable(data)
          setLoading(false)
     }

     console.log(coinTable);

     useEffect(() => {
          fetchCoinTable()
     }, [currency])

     const handleSearch=()=>{
          const searchValue=search? search.toLowerCase() : search
          return coinTable.filter((coininfo) =>
               coininfo.name.toLowerCase().includes(searchValue)||coininfo.symbol.toLowerCase().includes(searchValue)
          )
     }
     const items = handleSearch().slice((page-1)*10,(page-1)*10+10).map((coin) => {
          const profit = coin.price_change_percentage_24h >= 0

          return (
               
               <TableRow component={Link} to={`/coin/${coin.id}`} sx={{":hover":{bgcolor:'rgb(6, 6, 24)'}}}  key={coin.id}>
                 
                    <TableCell component="div">                      
                         <div style={{ display: 'flex',color:"white",alignItems:'center' }}>
                              <img src={coin.image} alt={coin.name} height="50px" />
                              <div style={{ marginLeft: 20 }}>
                                   <Typography  sx={{ fontWeight: 550,fontSize:22 }}>{coin.symbol.toUpperCase()}</Typography>
                                   <Typography variant='subtitle2'>{coin.name}</Typography>
                              </div>
                         </div>                      
                    </TableCell >
                    <TableCell align="right" component="div">
                                   <div style={{color:"white"}}>{symbol} {numberWithCommas(coin.current_price.toFixed(2))}</div>
                          </TableCell>
                    <TableCell align="right" component="div">
                              <div style={{color: profit ? "green" : "Red"}}>{profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}</div>
                         </TableCell>
                    <TableCell align="right" component="div">
                              <div style={{color:"white"}}>{symbol} {numberWithCommas((coin.market_cap / 1000000).toFixed(0))} M</div>
                         </TableCell>
                         
               </TableRow>


          )
     })

     return (
          <div style={{ paddingTop: 30, textAlign: 'center',minHeight:600 }}>
               <Container>
                    <Typography variant='h4' sx={{ fontWeight: 600 }}>
                         CryptoCurrency Prices by <span style={{ color: '#fcc200' }}>Market Cap</span>
                    </Typography>

                    <TextField
                         label="Search for CryptoCurrency"
                         variant='outlined'
                         sx={{ width: "100%", my: 3 }}
                         onChange={(e) => setSearch(e.target.value)}
                    />


                         {
                              loading ? (
                                   <LinearProgress style={{ bgcolor:"#fcc200" }} />
                              ) : (
                                   <div>
                                   <TableContainer sx={{ borderRadius: "10px 10px 0 0" }}>
                                   <Table>
                                        <TableHead sx={{ bgcolor: '#fcc200' }}>
                                             <TableRow >
                                                  <TableCell component="div"><Typography sx={{ fontWeight: 700, color: 'black' }}>Coins</Typography></TableCell>
                                                  <TableCell align="right" component="div"><Typography sx={{ fontWeight: 700, color: 'black' }}>Price in {symbol}</Typography></TableCell>
                                                  <TableCell align="right" component="div"><Typography sx={{ fontWeight: 700, color: 'black' }}>24h Change</Typography></TableCell>
                                                  <TableCell align="right" component="div"><Typography sx={{ fontWeight: 700, color: 'black' }}>Market Cap </Typography></TableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {items}
                                             
                                        </TableBody>


                                   </Table>
                                   
                                   </TableContainer>
                                   
                                   <Pagination component="div" count={(handleSearch()?.length / 10).toFixed(0)} onChange={(e)=>{setPage(page+1)}} color="primary" sx={{width:"100%", display:"flex", justifyContent:"center",py:3}}  />
                                   </div>
                              )

                         }

               </Container>
          </div>
     )
}

export default CoinsTable