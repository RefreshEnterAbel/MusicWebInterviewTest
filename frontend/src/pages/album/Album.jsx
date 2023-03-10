import AlbumCard from '../../components/AlbumCard';
import { Container, Grid } from '@mui/material'

const Album = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <AlbumCard />
                </Grid>
                <Grid xs={4}>
                    <AlbumCard />
                </Grid>
                <Grid xs={4}>
                    <AlbumCard />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Album;