import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import MoreVertIcon from '@mui/icons-material/MoreVert'
import { motion } from 'framer-motion'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom'
import { useState } from 'react';


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

function CardPage({name,ad,id}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 
   const [a,setA] =useState(0)
   const [ilk,setIlk] = useState(<FavoriteBorderIcon/>)

   const handle7=()=>{
    if(a===0){
      setA(1)
      setIlk(<FavoriteBorderIcon/>)
    }
    if(a===1){
      setA(0)
      setIlk(<FavoriteIcon/>)
    }
   
   }



  return (
    <motion.div layout 
    animate={{opacity:1,scale:1}}
    initial={{opacity:0 ,scale:1}}
    exit={{opacity:0,scale:3}}
    transition={{duration:2}}

    >
      
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         {`${name.substring(0,1)}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         
         {`adres: ${ad.city 
               }  ${ad.street}`}



        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites" onClick={handle7}>
            {ilk}
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
    <Link to={`detail/${id}`}> <ArrowForwardIosIcon/>
    </Link>
       
        </ExpandMore>
      </CardActions>
     
    </Card>
     
    
    </motion.div>
    
  );

}
export default CardPage