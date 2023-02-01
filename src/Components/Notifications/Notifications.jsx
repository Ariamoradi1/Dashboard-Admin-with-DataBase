import { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import { Styled } from '@mui/material/styles';
import { myData } from "../../Context/myContext";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Notifications = () => {
  const [expanded, setExpanded] = useState(false);
  const myDatas = useContext(myData)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="notifs">
    <Card className='notif-card' style={{marginBottom:'20px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="nigga.png" />
          </StyledBadge>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="David Beckham"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>May 30, 2023</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
          Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus ,I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="share">
          <ShareIcon color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    <Card className='notif-card' style={{marginBottom:'20px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='john.jpg'>
            R
          </Avatar>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Donald Trump"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>April 4, 2022</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
        Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus 
        ,I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    <Card className='notif-card' style={{marginBottom:'20px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="jack.jpg" />
          </StyledBadge>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shahram Shapare"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>March 23, 2023</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
        Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus ,
        I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    <Card className='notif-card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="person.jpg" />
          </StyledBadge>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="David Peterson"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>Jun 15, 2022</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
        Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus ,
        I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    <Card className='notif-card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="person2.jpg" />
          </StyledBadge>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Hanna Roudreiguez"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>April 12, 2022</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
        Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus ,
        I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    <Card className='notif-card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='person3.jpg'>
            R
          </Avatar>
        }
        action={
          <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Robert Kiusaki"
        subheader={<Typography style={{fontSize:'13px'}} color={myDatas.darkMode === 'dark' ? '#fff' : 'text.secondary'}>Jul 26, 2023</Typography>}
      />
      
      <CardContent>
        <Typography variant="body2" color={myDatas.darkMode === 'dark' ? '#fff' : 'black'}>
        Dear boss, We Have a Problem Here! Please hold an urgent meeting to resolve this issus ,
        I am waiting for you to solve the problem together i am waiting to meet you good luck.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color={myDatas.darkMode === 'dark' ? 'primary' : 'black'} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    </div>
  );
}

export default Notifications;