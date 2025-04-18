import { Grid } from "@mui/material";
import WorkshopList from "./WorkshopList";
import WorkshopDetails from "../details/WorkshopDetails";
import WorkshopForm from "../forms/WorkshopForm";

type Props = {
  workshops: Workshop[]
  selectWorkshop: (id:string) => void
  cancelSelectWorkshop: () => void
  selectedWorkshop?: Workshop | undefined
  openForm: (id:string) => void
  closeForm: () => void
  editMode: boolean
  submitForm: (workshop: Workshop) => void
  deleteWorkshop: (id: string) => void
}


export default function WorkshopDashboard({
  workshops, 
  selectWorkshop, 
  cancelSelectWorkshop, 
  selectedWorkshop, 
  editMode, 
  openForm, 
  closeForm, 
  submitForm,
  deleteWorkshop
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
          <WorkshopList workshops={workshops} selectWorkshop={selectWorkshop} deleteWorkshop={deleteWorkshop}/>
      </Grid>
      <Grid size={6}>
         {selectedWorkshop && !editMode && <WorkshopDetails cancelSelectWorkshop={cancelSelectWorkshop} openForm={openForm} workshop={selectedWorkshop} /> }
         {editMode && <WorkshopForm closeForm={closeForm} workshop={selectedWorkshop} submitForm = {submitForm}></WorkshopForm>}
      </Grid>
    </Grid>
  )
}