import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../img/logo-assistante-sociale.png";

export default function LogoSide() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Avatar sx={{ height: 60, width: 60 }} src={logo} alt="logo" />
      <Typography
        fontWeight={700}
        textTransform={"capitalize"}
        sx={{
          background:
            "linear-gradient(90deg, rgba(233,30,99,1) 0%, rgba(76,175,80,1) 50%, rgba(33,150,243,1) 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        assistante sociale
      </Typography>
    </Box>
  );
}
