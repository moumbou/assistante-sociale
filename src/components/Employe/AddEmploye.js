import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import AddEmployeStepper from "./AddEmployeStepper";

export default function AddEmploye({ page }) {
  return (
    <Box sx={{
        display: page === 1 ? "flex" : "none",
        flexDirection: 'column',
        height: '100%',
        gap: 2
    }}>
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
        ajouter un employé
      </Typography>

      <Box sx={{
        flex: 1,
        bgcolor: 'white',
        borderRadius: 2,
        p: 1
      }}>
        <AddEmployeStepper />
      </Box>
    </Box>
  );
}
