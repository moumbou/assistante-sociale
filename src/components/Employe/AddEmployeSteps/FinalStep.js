import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

// ICONS
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function FinalStep() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen((pre) => !pre);
    setOpen1((pre) => !pre);
  };

  return (
    <Box
      sx={{
        width: "70%",
        mx: "auto",
      }}
    >
      <List>
        <ListItemButton sx={{boxShadow: '0 0 3px rgba(0,0,0,.2)'}} onClick={handleClick}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Information Personnel" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="NOM PRENOM" secondary="nom et prenom" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="10-07-2000" secondary="date de naissance" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Informaticien" secondary="fonction" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Structure" secondary="structure" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="19-02-2023" secondary="date de révision" />
            </ListItem>
          </List>
        </Collapse>

        <ListItemButton sx={{boxShadow: '0 0 3px rgba(0,0,0,.2)'}} onClick={handleClick}>
          <ListItemIcon>
            <MedicalServicesIcon />
          </ListItemIcon>
          <ListItemText primary="Information Médicale" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Analyses" secondary="analyses" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Radio" secondary="radio" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Temporaire" secondary="poste" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Apte 1" secondary="Aptitude" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="avis" secondary="avis" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minus ut a quia cum non ad sed dignissimos, accusantium eum ab? Aspernatur adipisci quam, mollitia possimus laudantium molestias nulla tempora." secondary="observation" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
