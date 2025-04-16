import { Grid } from "@mui/material";
import WorkshopList from "./WorkshopList";
import WorkshopDetails from "../details/WorkshopDetails";
import WorkshopForm from "../forms/WorkshopForm";

type Props = {
  workshops: Workshop[]
  selectWorkshop: (id:string) => void;
  cancelSelectWorkshop: () => void;
  selectedWorkshop?: Workshop | undefined
}

export default function WorkshopDashboard({workshops, selectWorkshop, cancelSelectWorkshop, selectedWorkshop}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
          <WorkshopList workshops={workshops} selectWorkshop={selectWorkshop}/>
      </Grid>
      <Grid size={6}>
         {selectedWorkshop && <WorkshopDetails workshop={selectedWorkshop} cancelSelectWorkshop={cancelSelectWorkshop} /> }
         <WorkshopForm></WorkshopForm>
      </Grid>
    </Grid>
  )
}