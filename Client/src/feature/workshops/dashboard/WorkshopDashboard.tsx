import { Grid } from "@mui/material";
import WorkshopList from "./WorkshopList";
import WorkshopDetails from "../details/WorkshopDetails";

type Props = {
  workshops: Workshop[]
  selectWorkshop: (id:string) => void;
  cancelSelectWorkshop: () => void;
  selectedWorkshop?: Workshop | undefined
}

export default function WorkshopDashboard({workshops, selectWorkshop, cancelSelectWorkshop, selectedWorkshop}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={4}>
          <WorkshopList workshops={workshops} selectWorkshop={selectWorkshop}/>
      </Grid>
      <Grid size={8}>
         {selectedWorkshop && <WorkshopDetails workshop={selectedWorkshop} cancelSelectWorkshop={cancelSelectWorkshop} /> }
      </Grid>
    </Grid>
  )
}