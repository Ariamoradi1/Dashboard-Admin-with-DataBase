import React, {  useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChartProduct from "./ChartProduct";
import { myData } from "../../Context/myContext";
import { chartData } from "../../Datas";
import { Paper } from "@mui/material";


const Products = () => {
    const myDatas = useContext(myData)
    const handleClickDelete = (id) => {
     myDatas.setDeleteId(id)
     myDatas.setShowModal(true)
    }
    const removeHandler = () => {
      myDatas.setProducts(myDatas.products.filter(item => {
        return item.id !== myDatas.deleteId
      }))
      myDatas.setShowModal(false)
    }
    return (
        <>
        <h2 style={{textAlign:'center', marginTop:'10px'}}>Products</h2>
        <div style={{marginTop:'29px'}} className="products">
        {myDatas.products.map(item => (
            <>
             <Card className="card" style={{marginBottom:'30px'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography className="typ" variant="body2" color="text.secondary">
        {item.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleClickDelete(item.id)} size="small" color="error">Delete</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </>
        ))}
       
    

  
    </div>
    {myDatas.showModal && <div className="modalContainer">
        <Paper className="paperModal" style={{width:'400px',height:'300px',boxShadow:'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'}}>
        <h2>Delete Product</h2>
        <p>Are You Sure To Delete The Product?</p>
        <p>note: If You Delete The Product, There is No Going Back!</p>
        <div className="button">
        <button className="cancelButton" onClick={() => myDatas.setShowModal(false)}>Cancel</button>
        <button className="deleteButton" onClick={removeHandler}>Delete</button>
        </div>
        </Paper>
        </div>}
    <ChartProduct data={chartData} datakey="sale"/>
        </>
    
    )
}

export default Products;