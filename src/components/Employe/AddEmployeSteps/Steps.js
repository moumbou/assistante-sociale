import { Box } from "@mui/material";
import React from "react";
import FinalStep from "./FinalStep";
import Medical from "./Medical";
import Personnel from "./Personnel";

export default function Steps({ index }) {
  return (
    <Box
      sx={{
        p: 2,
        my: 3,
      }}
    >
      {index === 0 ? <Personnel /> : index === 1 ? <Medical /> : <FinalStep />}
    </Box>
  );
}
