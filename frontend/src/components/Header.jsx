import { AppBar, Toolbar, Container, Link, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo";


function Header() {
    
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Container >
                <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Logo />
                    <nav>
                        <Link
                            underline="hover"
                            variant="button"
                            color="text.primary"
                            onClick={() => navigate('/')}
                            sx={{ my: 1, mx: 1.5, }}
                        >
                            Music
                        </Link>
                        <Link
                            underline="hover"
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Album
                        </Link>
                        <Link
                            underline="hover"
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Genre
                        </Link>
                    </nav>
                    <Button
                        variant="outlined"
                        href="#"
                        onClick={() => navigate('/manage-music')}
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Manage Music
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;