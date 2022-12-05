import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />

      <Box height="60vh" width="auto">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
