import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, dateN, fonction, dateR, poste) {
  return { name, dateN, fonction, dateR, poste };
}

const rows = [
  createData("raja mouhamed", "12-09-1989", "Fonction 1", "02-03-2023", "Temporaire"),
  createData("bouguerra rafik", "02-11-1991", "Fonction 2", "03-03-2023", "Temporaire"),
  createData("boufarik racim", "06-05-1990", "Fonction 1", "12-04-2023", "Indeterminer"),
  createData("tamara youcef", "08-10-1989", "Fonction 1", "13-05-2023", "Temporaire"),
];

export default function TableDash() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{
            textTransform: 'capitalize'
          }}>
            <TableCell>nom prenom</TableCell>
            <TableCell align="right">date de naissance</TableCell>
            <TableCell align="right">fonction</TableCell>
            <TableCell align="right">date de révision</TableCell>
            <TableCell align="right">poste</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
          textTransform: 'uppercase'
        }}>
          {rows.map((row, i) => (
            <TableRow
              key={i + row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dateN}</TableCell>
              <TableCell align="right">{row.fonction}</TableCell>
              <TableCell align="right">{row.dateR}</TableCell>
              <TableCell align="right">{row.poste}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
