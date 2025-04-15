import { Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "./NavBar";

function App() {

  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Workshops")
      .then(response => setWorkshops(response.data))
    return () => { }
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar openForm={function (): void {
        throw new Error("Function not implemented.");
      }} />
      <Container maxWidth='xl' sx={{ mt: 3}}>
        <List>
          {workshops.map((workshop) => (
            <ListItem key={workshop.id}>
              <ListItemText>{workshop.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </>

  )
}

export default App