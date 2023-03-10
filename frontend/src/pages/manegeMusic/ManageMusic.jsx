import React from 'react';
import PropTypes from 'prop-types';
import { Container, Tabs, Tab, Typography, Box } from '@mui/material';
import AlbumTab from './tabs/AlbumTab';
import MusicTab from './tabs/MusicTab';
import GenerTab from './tabs/GenerTab'

const ManageMusic = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', height: '100%' }} >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '200px', height: '100%' }}
                >
                    <Tab label="Music " />
                    <Tab label="Gener" />
                    <Tab label="Album" />
                    <Tab label="Artist" />
                </Tabs>
                <TabPanel  value={value} index={0}>
                    <MusicTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <GenerTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AlbumTab />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </Box>
        </Container>
    );
}

export default ManageMusic;


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 ,width: '100%' }}>
                   {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



