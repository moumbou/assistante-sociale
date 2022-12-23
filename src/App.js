import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import AddEmploye from "./components/Employe/AddEmploye";
import Container from "./Container";

function App() {
  const [page, setPage] = React.useState(0);
  return (
    <Container page={page} setPage={setPage}>
      <Dashboard page={page} />
      <AddEmploye page={page} />
    </Container>
  );
}

export default App;
