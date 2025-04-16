import { Box } from "@mui/material"
import WorkshopCard from "./WorkshopCard"

type Props = {
    workshops: Workshop[]
    selectWorkshop: (id: string) => void
    deleteWorkshop: (id: string) => void
}

export default function WorkshopList({workshops, selectWorkshop, deleteWorkshop}: Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      {workshops.map(x => (
        <WorkshopCard key={x.id} workshop={x} selectWorkshop={selectWorkshop} deleteWorkshop = {deleteWorkshop}/>
        ))}
    </Box>
    
  )
}