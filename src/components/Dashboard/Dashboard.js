import { Box, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { Fragment } from "react";
import TableDash from "./TableDash";

// ICONS
import SearchIcon from "@mui/icons-material/Search";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          background: "white",
          py: 1,
          px: 2,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0,0,0,.5)",
          maxWidth: "max-content",
        }}
        color={blue[500]}
        fontWeight={700}
        textTransform="capitalize"
        variant="h5"
      >
        dashboard
      </Typography>

      <Box
        sx={{
          background: "white",
          width: "100%",
          boxShadow: "0 0 10px rgba(0,0,0,.5)",
          p: 2,
          borderRadius: 1,
        }}
      >
        <TextField
          size="small"
          label={
            <Fragment>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
                <p style={{fontWeight: 700, textTransform: 'capitalize', fontSize: '.9rem'}}>rechercher un employé</p>
                <SearchIcon />
              </Box>
            </Fragment>
          }
          variant="outlined"
        />
      </Box>

      <TableDash />
    </Box>
  );
}
