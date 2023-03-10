import {
    Card, CardContent, CardMedia, Typography, Button, List, ListItem,
    ListItemText, IconButton, Box, Collapse
} from "@mui/material";
import React from 'react';
import PlayArrow from '@mui/icons-material/PlayArrow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AlbumCard = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Abogida(አቦጊዳ)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Teddy Afro is an Ethiopian singer-songwriter. Known for his revolutionary songs and political dissent sentiment, …
                </Typography>
                <Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => setOpen(!open)}>
                    <Typography variant="button" >Music List</Typography>
                    <IconButton aria-label="expand row" >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Box>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        {[1, 2, 3].map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="comment">
                                        <PlayArrow />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={`ልጅነት አላት ${value}`} />
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button variant="outlined" size="small" color="primary">
                            Share
                        </Button>
                        <Button variant="contained" size="small" color="primary">
                            <PlayArrow sx={{ marginRight: '2px' }} />
                            Play All
                        </Button>
                    </Box>
                </Collapse>
            </CardContent>

        </Card>
    );
}

export default AlbumCard;