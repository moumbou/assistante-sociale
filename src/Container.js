import { Box } from '@mui/material'
import React from 'react'
import Header from './components/Header/Header'

export default function Container({ children }) {
  return (
    <Box
    sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: '70px 1fr',
        gridTemplateColumns: '1fr'
    }}>
        <Header />

        <Box
        sx={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            p: 1
        }}>
            {children}
        </Box>
    </Box>
  )
}
