import { CssBaseline, List, ListItem, ListItemText} from "@mui/material";
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