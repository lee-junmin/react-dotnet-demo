import { Container, CssBaseline, Box } from "@mui/material";
import { useEffect, useState } from "react"
import '@fontsource/square-peg';
import axios from "axios"
import NavBar from "./NavBar";
import WorkshopDashboard from "../../feature/workshops/dashboard/WorkshopDashboard";

function App() {

  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | undefined>(undefined);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Workshops")
      .then(response => setWorkshops(response.data))
    return () => { }
  }, [])

  const handleSelectWorkshop = (id: string) => {
    setSelectedWorkshop(workshops.find(x => x.id === id))
  }

  const handleCancelSelectWorkshop = () => {
    setSelectedWorkshop(undefined)
  }

  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar openForm={function (): void {
        throw new Error("Function not implemented.");
      }} />
      <Container maxWidth='xl' sx={{ mt: 3}}>
        <WorkshopDashboard workshops={workshops}/>
      </Container>
    </Box>

  )
}

export default App