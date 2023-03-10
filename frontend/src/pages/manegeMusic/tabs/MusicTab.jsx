import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button, Typography,Box } from '@mui/material'
import {Add} from '@mui/icons-material'

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];


const MusicTab = () => {
  return (
    <TableContainer >
      <Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h5'>Music</Typography>
        <Button variant='contained'>
          <Add/>
          Add
        </Button>
      </Box>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Upload Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                <Button>Play</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default MusicTab;