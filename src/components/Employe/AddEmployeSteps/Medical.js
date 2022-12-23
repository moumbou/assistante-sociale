import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function Medical() {
  const [apte, setApte] = React.useState(1);
  const handleApteChange = (e) => {
    setApte(e.target.value);
  };

  const [poste, setPoste] = React.useState(1);
  const handlePosteChange = (e) => {
    setPoste(e.target.value);
  };
  return (
    <Box
      sx={{
        width: "70%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto",
        gap: 5,
      }}
    >
      <TextField label="Analyses" type="text" size="small" variant="outlined" />
      <TextField label="Radio" type="text" size="small" variant="outlined" />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="Poste">Poste aménagé</InputLabel>
        <Select
          labelId="Poste"
          id="Poste"
          value={poste}
          label="Poste aménagé"
          onChange={handlePosteChange}
        >
          <MenuItem value={1}>temporaire</MenuItem>
          <MenuItem value={2}>definitif</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="Aptitude">Aptitude</InputLabel>
        <Select
          labelId="Aptitude"
          id="Aptitude"
          value={apte}
          label="Aptitude"
          onChange={handleApteChange}
        >
          <MenuItem value={1}>apte 1</MenuItem>
          <MenuItem value={2}>apte 2</MenuItem>
          <MenuItem value={3}>apte 3</MenuItem>
        </Select>
      </FormControl>

      <TextField label="avis" type="text" size="small" variant="outlined" />
      <i></i>
      <TextField
        sx={{ gridColumn: "span 2" }}
        label="observation"
        multiline
        rows={4}
      />
    </Box>
  );
}
