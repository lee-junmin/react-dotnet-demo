
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem } from "@mui/material";

type Props = {
    openForm: () => void
}
export default function NavBar({ openForm }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                <Typography variant="h2" fontWeight='bold' sx={{ fontFamily: '"Square Peg", cursive' }}>workshopPortal</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Workshops</MenuItem>
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>About</MenuItem>
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Contact</MenuItem>
                        </Box>
                        <Button onClick={openForm} size="large" variant="contained" color="secondary">Create workshop</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}