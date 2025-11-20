import React from 'react'
import {Box,Typography} from '@mui/material'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Box className='footer'>
        <Typography component='p'>
            Developed by <Link to="https://github.com/SaranKishore-offl/ReactEx">Groot</Link></Typography>
    </Box>
  )
}

export default Footer