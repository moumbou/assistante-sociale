import { Box, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'

export default function SuccessMessage() {
  return (
    <Box sx={{
        width: '100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Typography sx={{
            fontWeight: 700,
            color: 'white',
            bgcolor: green[500],
            px: 3,
            py: 2,
            borderRadius: 2,
            boxShadow: 5
        }}>
        L'employé a était ajouter avec succée !
        </Typography>
    </Box>
  )
}
