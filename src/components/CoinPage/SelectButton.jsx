import { Box } from '@mui/material'
import React from 'react'

const SelectButton = ({children,selected,onClick}) => {
  return (
    <Box sx={{padding:1,
     border:"1px solid",
     borderColor:"main.primary",
     width:"22%",
     textAlign:'center',
     borderRadius:2,
     bgcolor:selected?"main.primary" : "",
     color:selected?"background.primary":"main.primary",
     fontWeight:selected?700:500,
     cursor:'pointer'
     }} onClick={onClick}>{children}</Box>
  )
}

export default SelectButton