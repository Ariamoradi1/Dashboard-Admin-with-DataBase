import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import {
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const chartData = [
  {state: 'Jan', votes:12},
  {state: 'Feb', votes:5},
  {state: 'March', votes:8},
  {state: 'April', votes:4},
  {state: 'May', votes:9},
  {state: 'June', votes:6},
]

const Chartdash = () => {
  return (
    <div className="paper">
    <Paper style={{width:'600px',height:'500px'}}>
    <Chart
          data={chartData}
        >
          <PieSeries
            valueField="votes"
            argumentField="state"
          />
          <Title
            text="Users"
          />
          <Animation />
        </Chart>

    </Paper>
    <Paper style={{width:'600px',height:'500px'}}>
    <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="votes"
            argumentField="state"
          />
          <Title text="This Week Statistics" />
          <Animation />
        </Chart>
    </Paper>
    </div>
  );
}

export default Chartdash