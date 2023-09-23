import React, {createContext,useContext,useEffect,useState} from 'react'

const crypto= createContext()

const CryptoContext = ({children}) => {
  const [currency, setCurrency]=useState("INR")
  const [symbol, setSymbol]=useState("₹")

  useEffect(()=>{
    if(currency==="INR") setSymbol("₹")
    else if(currency==="USD") setSymbol("$")
  },[currency])

  return (    
    <crypto.Provider value={{currency,setCurrency,symbol}}>
     {children}
    </crypto.Provider>
  )
}

export default CryptoContext

export const CryptoSate = ()=>{
  return useContext(crypto)
}