import { Paper } from "@mui/material";
import React, { useContext } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
  } from 'recharts'
import { myData } from "../../Context/myContext";


const ChartProduct = ({data, datakey, grid}) => {

    const myDatas = useContext(myData)
    return(
        <>
        <h1 style={{textAlign:'center'}}>Products Sales Chart</h1>
          <div className="chart">
          <Paper className="papers" style={{width:'100%',height:'350px'}}>
          <ResponsiveContainer className='rechart' width='100%' aspect={4}>
          <LineChart data={data}>
          <XAxis className="xaxis" dataKey="name" stroke={myDatas.darkMode === 'dark' ? 'white' : 'black'}/>
          <Line type='monotone' dataKey={datakey} stroke='blue'/>
          <Tooltip />
          {grid && <CartesianGrid stroke={myDatas.darkMode === 'dark' ? 'white' : 'black'}/>}
          </LineChart>
          </ResponsiveContainer>
          </Paper>
          </div>
          </>
    
    )
}


export default ChartProduct;