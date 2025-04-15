import { Box } from "@mui/material"
import WorkshopCard from "./WorkshopCard"

type Props = {
    workshops: Workshop[]
}

export default function WorkshopList({workshops}: Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {workshops.map(x => {
            return <WorkshopCard workshop={x}/>
        })}
    </Box>
    
  )
}