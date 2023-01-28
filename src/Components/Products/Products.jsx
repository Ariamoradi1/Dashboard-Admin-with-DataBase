import React, { useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChartProduct from "./ChartProduct";
import { chartData } from "../../Datas";


const Products = () => {
    const [products,setProducts] = useState([
        {id:1,name:'Laptop',img:'LapTop.jpg',about:' A laptop is a computer which is easy to carry around. A modern laptop is self-contained, with a screen, keyboard and pointing device laptop is laptop'},
        {id:2,name:'Tv',img:'Tv.jpg',about:'Television is one of the most popular 20th-century inventions by humans. It is used to transmit videos and sounds over distances miles apart from one another.'},
        {id:3,name:'Phone',img:'Phone.jpg',about:'Mobile Phone is often also called “cellular phone”. It is a device mainly used for a voice call im here to give best products to you broo good days coming :)'},
        {id:4,name:'Head Phone',img:'headphone.webp',about:'Headphones are electronic audio devices that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer.'},
        {id:5,name:'Apple Watch',img:'applewatch.jpg',about:'Headphones are electronic audio devices that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer.'},
        {id:6,name:'Ps5',img:'ps5.webp',about:'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 4 in April 2019'},
    ])
    const removeHandler = item => {
      setProducts(products.filter(event => {
        return item !== event.id
      }))
    }
    return (
        <>
        <h2 style={{textAlign:'center'}}>Products</h2>
        <div className="products">
        {products.map(item => (
            <>
             <Card style={{marginBottom:'30px'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeHandler(item.id)} size="small" color="error">Delete</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </>
        ))}
       
    </div>
    <ChartProduct data={chartData} datakey="sale"/>
        </>
    )
}

export default Products;