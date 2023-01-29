import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './Dashboard.css'
import { TrendingUp } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Dashboard = () => {
  return (
    <>
    <div className="dashboard">
    <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Page Views
        </Typography>
        <Typography variant="h5" component="div">
        4,42,236
        </Typography>
        <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
        You made an extra 35,000 this year
        </Typography>
        <div className="dashIconDown">
      <TrendingDownIcon style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}>12.9%</span>
      </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Total Users
      </Typography>
      <Typography variant="h5" component="div">
      78,250
      </Typography>
      <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
      You made an extra 8,900 this year
      </Typography>
      <div className="dashIcon">
      <TrendingUp style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}> 50.1%</span>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Total Order
      </Typography>
      <Typography variant="h5" component="div">
      18,800
      </Typography>
      <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
      You made an extra 1,943 this year
      </Typography>
      <div className="dashIconDown">
      <TrendingDownIcon style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}>27.4%</span>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Total Sales
      </Typography>
      <Typography variant="h5" component="div">
      $35,078
      </Typography>
      <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
      You made an extra $20,395 this year
      </Typography>
      <div className="dashIcon">
      <TrendingUp style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}>70.4%</span>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Total Sales
      </Typography>
      <Typography variant="h5" component="div">
      $35,078
      </Typography>
      <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
      You made an extra $20,395 this year
      </Typography>
      <div className="dashIcon">
      <TrendingUp style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}>70.4%</span>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  <Card className='card' style={{width:'400px',marginTop:'40px'}} sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography className='typ' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Total Sales
      </Typography>
      <Typography variant="h5" component="div">
      $35,078
      </Typography>
      <Typography className='typ' sx={{ mb: 1.5 }} color="text.secondary">
      You made an extra $20,395 this year
      </Typography>
      <div className="dashIcon">
      <TrendingUp style={{color:'#fff'}}/>
      <span style={{marginTop:'3px'}}>70.4%</span>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </div>
  </>
  );
}

export default Dashboard