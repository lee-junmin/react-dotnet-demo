import { CssBaseline, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "./NavBar";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  
  useEffect(() => {
    axios.get("https://localhost:5001/api/Activities")
    .then(response => setActivities(response.data))
    return () => {}
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Typography variant='h3'>Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default App