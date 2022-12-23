import { Box, Divider, TextField } from "@mui/material";
import React from "react";

export default function Personnel() {
  return (
    <Box sx={{
        width: '70%',
        mx: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gap: 5
    }}>
      <TextField label="nom" type="text" size="small" variant="outlined" />
      <TextField label="prenom" type="text" size="small" variant="outlined" />
      <TextField label="date de naissance" type="date" size="small" variant="outlined" focused />
      <i></i>
      <Divider sx={{gridColumn: 'span 2'}} variant="fullWidth" component="div" />

      <TextField label="fonction" type="text" size="small" variant="outlined" />
      <TextField label="structure" type="text" size="small" variant="outlined" />
      <TextField label="date de revision" type="date" size="small" variant="outlined" focused />
    </Box>
  );
}
