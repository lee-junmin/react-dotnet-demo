import { Grid } from "@mui/material";
import WorkshopList from "./WorkshopList";
import WorkshopDetails from "../details/WorkshopDetails";

type Props = {
  workshops: Workshop[]
}

export default function WorkshopDashboard({workshops}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={4}>
          <WorkshopList workshops={workshops}/>
      </Grid>
      <Grid size={8}>
         {workshops[0] && <WorkshopDetails workshop={workshops[0]} /> }
      </Grid>
    </Grid>
  )
}