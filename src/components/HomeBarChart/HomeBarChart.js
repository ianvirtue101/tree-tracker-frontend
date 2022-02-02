import "./HomeBarChart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function HomeBarChart() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(async () => {
    const response = await axios(`${API_URL}/DeforestationCauses`);
    setData(response.data);
    // console.log(response.data);
  }, []);

  return (
    <>
      <BarChart
        width={700}
        height={550}
        // layout={"vertical"}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Legend layout="horizontal" align="center" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Entity" />
        <YAxis />
        <Tooltip isAnimationActive="true" animationEasing="ease-in-out" />
        <Bar dataKey="Share of commodity-driven deforestation" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default HomeBarChart;
