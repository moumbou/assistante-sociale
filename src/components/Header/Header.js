import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

// ICONS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { blue, green, grey, pink } from "@mui/material/colors";
import LogoSide from "./LogoSide";

export default function Header({ setPage, page }) {
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: "3px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
        backdrop: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        p: 1,
        zIndex: 2,
      }}
    >
      <LogoSide />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          "& .MuiAvatar-root": {
            height: 40,
            width: 40,
            color: "#fff",
            // background: "#6f42c1",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, .2)",
            cursor: "pointer",
            ":hover": {
              boxShadow: "none",
            },
          },
        }}
      >
        <Avatar
          sx={{ bgcolor: page !== 0 ? blue[500] : grey[500] }}
          onClick={() => changePage(0)}
        >
          <AccountCircleIcon />
        </Avatar>
        <Avatar
          sx={{ bgcolor: page !== 1 ? green[500] : grey[500] }}
          onClick={() => changePage(1)}
        >
          <AddCircleIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <NotificationsIcon />
        </Avatar>
      </Box>
    </Box>
  );
}
