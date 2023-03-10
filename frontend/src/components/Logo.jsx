import { MusicNote } from '@mui/icons-material'
import { Typography, Box } from "@mui/material";
function Logo() {
    return (
        <Box sx={{display: 'flex',alignItems:'center'}}>
            <MusicNote sx={{ mr: 1}} />
            <Typography variant="h6" color="inherit" sx={{textAlign: 'center'}}>
                Music Web
            </Typography>
        </Box>
    );
}

export default Logo;