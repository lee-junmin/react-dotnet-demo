import { Container, CssBaseline, Box, Typography } from "@mui/material";
import { useState } from "react"
import '@fontsource/square-peg';
import axios from "axios"
import NavBar from "./NavBar";
import WorkshopDashboard from "../../feature/workshops/dashboard/WorkshopDashboard";
import { useQuery } from "@tanstack/react-query";

function App() {

  //const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)

  const {data: workshops, isPending} = useQuery({queryKey:["workshops"], queryFn: async () =>{
    const response = await axios.get<Workshop[]>('https://localhost:5001/api/workshops')
    return response.data  
  }
  })

  // useEffect(() => {
  //   axios.get("https://localhost:5001/api/Workshops")
  //     .then(response => setWorkshops(response.data))
  //   return () => { }
  // }, [])

  const handleSelectWorkshop = (id: string) => {
    setSelectedWorkshop(workshops!.find(x => x.id === id))
  }

  const handleCancelSelectWorkshop = () => {
    setSelectedWorkshop(undefined)
  }

  const handleOpenForm = (id?:string) => {
    if (id) handleSelectWorkshop(id)
    else handleCancelSelectWorkshop()
    setEditMode(true)
  }

  const handleCloseForm = () => {
    setEditMode(false)
  }

  const handleSubmitForm = (workshop: Workshop) => {
    // if (workshop.id) {
    //   setWorkshops(workshops.map(x => x.id === workshop.id ? workshop : x))
    // } else {
    //   const newWorkshop = {...workshop, id: workshops.length.toString()}
    //   setSelectedWorkshop(newWorkshop)
    //   setWorkshops([...workshops, newWorkshop])
    // }
    console.log(workshop)
    setEditMode(false)
  }

  const handleDelete = (id: string) => {
    console.log("delete workhop", id)
    //setWorkshops(workshops!.filter(x => x.id !== id))
  }

  return (
    <Box sx={{bgcolor: "#eeeeee", minHeight: "100vh"}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3}}>
        {!workshops || isPending ? (
          <Typography>Loading...</Typography>
        ): (
        <WorkshopDashboard 
        workshops={workshops} 
        selectWorkshop={handleSelectWorkshop} 
        cancelSelectWorkshop={handleCancelSelectWorkshop}
        selectedWorkshop={selectedWorkshop}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleCloseForm}
        submitForm={handleSubmitForm}
        deleteWorkshop={handleDelete}
      /> )}

      </Container>
    </Box>

  )
}

export default App