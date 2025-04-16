import { Box, TextField, Typography, Button, Paper } from "@mui/material";
import {FormEvent} from "react"

type Props ={
  workshop?: Workshop
  closeForm: () => void
}

export default function WorkshopForm({workshop,closeForm} :Props) {

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data : {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    console.log(data)
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
    <Typography variant="h5" gutterBottom color="primary">
        Create workshop
    </Typography>
    <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
        <TextField name='title' label='Title' value={workshop?.title}  />
        <TextField name='description' label='Description'  multiline rows={3} value={workshop?.description} />
        <TextField name='category' label='Category' value={workshop?.category} />
        <TextField name='date' label='Date' type="date" value={workshop?.date}  />
        <TextField name='city' label='City' value={workshop?.city} />
        <TextField name='venue' label='Venue' value={workshop?.venue} />
        <Box display='flex' justifyContent='end' gap={3}>
            <Button onClick={closeForm} color='inherit'>Cancel</Button>
            <Button type="submit" color='success' variant="contained">Submit</Button>
        </Box>
    </Box>
</Paper>
  )
}