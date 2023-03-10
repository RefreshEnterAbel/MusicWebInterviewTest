import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout/Layout';
import Album from './pages/album/Album';
import ManageMusic from './pages/manegeMusic/ManageMusic';
import NotFound from './pages/notFound/NotFound';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Album />} />
              <Route path='manage-music' element={<ManageMusic />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;
