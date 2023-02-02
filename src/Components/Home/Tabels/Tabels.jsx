import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('13256498', 'Keyboard', 125, 'Rejected', '$70,999'),
    createData('13286564', 'Computer Accessories', 100,'Approved', '$83,348'),
    createData('38374733', 'Camera lens', 70, 'Rejected', '$99.20'),
    createData('38477383', 'Tv', 60, 'approved', '$130'),
    createData('33662266', 'laptop', 240, 'Approved', '300$'),
    createData('47388282', 'Mobile', 300, 'Approved', '170$'),
    createData('41212122', 'Ps5', 100, 'Rejected', '320$'),
  
  ];


const Tabels =  () => {
    return ( 
        <>
        <div className="orders">
         <TableContainer className='tableContainer' style={{width:'650px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'><h4>Tracking No.</h4></TableCell>
            <TableCell className='tablecell' align="right"><h4>Product Name</h4></TableCell>
            <TableCell className='tablecell' align="right"><h4>Total Order</h4></TableCell>
            <TableCell className='tablecell' align="right"><h4>Status</h4></TableCell>
            <TableCell className='tablecell' align="right"><h4>Total Amount</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tablecell' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='tablecell' align="right">{row.calories}</TableCell>
              <TableCell className='tablecell' align="right">{row.fat}</TableCell>
              <TableCell className='tablecell' align="right">{row.carbs}</TableCell>
              <TableCell className='tablecell' align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Paper className='papers' id="paper-chart">
    <div className="company">
    <Typography variant="span" component="div">
    Company Finance Growth
    </Typography>
    <Typography variant="h6" component="div">
    +45.14%
    </Typography>
    </div>
    
    <div className="company">
    <Typography variant="span" component="div">
    Company Expenses Ratio
    </Typography>
    <Typography variant="h6" component="div">
    +0.58%
    </Typography>
    </div>
    
    <div className="company">
    <Typography variant="span" component="div">
    Business Risk Cases
    </Typography>
    <Typography variant="h6" component="div">
    Low
    </Typography>
    </div>
    <Line
    style={{marginTop:'50px'}}
    data={{
      labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,34,56,102,400,98,46],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [19,20,70,130,320,70,52],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
    }}
    />
    </Paper>
    </div>
        </>
     );
}

export default Tabels ;