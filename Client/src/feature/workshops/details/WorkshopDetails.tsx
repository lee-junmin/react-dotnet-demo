import { Card, CardContent, CardMedia, Button, CardActions, Typography } from "@mui/material"

type Props = {
    workshop: Workshop
}
export default function WorkshopDetails({workshop}: Props) {
  return (
    <Card>
        <CardMedia 
            component='img'
            src={`/images/categoryImages/${workshop.category}.jpg`}/>         
        <CardContent>
            <Typography variant = "h5">{workshop.title}</Typography>
            <Typography variant = "subtitle1" fontWeight='light'>{workshop.date}</Typography>
            <Typography variant = "body1">{workshop.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary">Edit</Button>
            <Button color="inherit">Cancel</Button>
        </CardActions>
    </Card>
  )
}