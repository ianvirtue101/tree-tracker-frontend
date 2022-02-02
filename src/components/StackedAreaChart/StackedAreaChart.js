import "./StackedAreaChart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function StackedAreaChart() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(async () => {
    const response = await axios(`${API_URL}/BrazilDeforestation`);
    setData(response.data);
    console.log(response.data);
  }, []);

  return (
    <AreaChart
      width={575}
      height={550}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
      // isAnimationActive={true}
      // animationDuration={2000}
      // animationEasing={"ease-in-out"}
    >
      <Legend layout="horizontal" align="center" />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis />
      <Tooltip
        isAnimationActive={true}
        animationDuration={3000}
        animationEasing={"ease-in-out"}
      />
      <Area
        type="monotone"
        dataKey="commercial_crops"
        stackId="1"
        stroke="#9B84DB"
        fill="#9B84DB"
      />
      <Area
        type="monotone"
        dataKey="fire"
        stackId="1"
        stroke="#DB9795"
        fill="#DB9795"
      />
      <Area
        type="monotone"
        dataKey="flooding_due_to_dams"
        stackId="1"
        stroke="#80BEDB"
        fill="#80BEDB"
      />
      <Area
        type="monotone"
        dataKey="mining"
        stackId="1"
        stroke="#74DB96"
        fill="#74DB96"
      />
      <Area
        type="monotone"
        dataKey="natural_disturbances"
        stackId="1"
        stroke="#9AB0DB"
        fill="#9AB0DB"
      />
      <Area
        type="monotone"
        dataKey="other_infrastructure"
        stackId="1"
        stroke="#DBADA4"
        fill="#DBADA4"
      />
      <Area
        type="monotone"
        dataKey="pasture"
        stackId="1"
        stroke="#8FD1DB"
        fill="#8FD1DB"
      />
      <Area
        type="monotone"
        dataKey="roads"
        stackId="1"
        stroke="#DBBD79"
        fill="#DBBD79"
      />
      <Area
        type="monotone"
        dataKey="selective_logging"
        stackId="1"
        stroke="#84DBB6"
        fill="#84DBB6"
      />
      <Area
        type="monotone"
        dataKey="small-scale_clearing"
        stackId="1"
        stroke="#9CDBA0"
        fill="#9CDBA0"
      />
      <Area
        type="monotone"
        dataKey="tree_plantations_including_palm"
        stackId="1"
        stroke="#DB9586"
        fill="#DB9586"
      />
    </AreaChart>
  );
}
