import { Card,CardContent,CardActions, Chip, Button,Typography, Box } from "@mui/material"



type Props = {
    workshop: Workshop
    selectWorkshop: (id: string) => void

  }

export default function WorkshopCard({workshop, selectWorkshop}: Props) {
    return (
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5">{workshop.title}</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1 }}>{workshop.date}</Typography>
          <Typography variant="body2">{workshop.description}</Typography>
          <Typography variant="subtitle1">{workshop.city} / {workshop.venue}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
        <Chip label={workshop.category} variant="outlined" />
        <Box display='flex' gap={3}>

          <Button onClick={() => selectWorkshop(workshop.id)} size="medium" variant="contained">View</Button>
        
        </Box>
      </CardActions>
      </Card>
    )
  }