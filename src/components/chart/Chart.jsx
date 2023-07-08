import "./chart.scss"
import { LineChart,Line,Legend, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
// const data = [
//     {
//       name: 'Week 1',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Week 2',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Week 3',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Week 4',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Week 5',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Week 6',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Week 7',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
// ;
const data = [
  {
    "name": "Week 1",
    "user": 4000,
    "guest": 2400,
    "amt": 2400
  },
  {
    "name": "Week 2",
    "user": 3000,
    "guest": 1398,
    "amt": 2210
  },
  {
    "name": "Week 3",
    "user": 2000,
    "guest": 9800,
    "amt": 2290
  },
  {
    "name": "Week 4",
    "user": 2780,
    "guest": 3908,
    "amt": 2000
  },
 
  
]
const Chart = () => {
  return (
    <div className="card">
    <div className='chart'>
        <h1 className="title" >Activities</h1>
     
<LineChart width={1200} height={250} data={data}
  margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="guest" stroke="rgba(233, 160, 160, 0.8)" />
  <Line type="monotone" dataKey="user" stroke="rgba(155, 221, 124, 0.8)" />
</LineChart>
</div>
</div>
  )
}

export default Chart
