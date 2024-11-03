import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

interface Props {
  data: {
    positive: number;
    negative: number;
    neutral: number;
  };
  chartTile: string;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentPieChart = ({ data, chartTile }: Props) => {
  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [data.positive, data.negative, data.neutral],
        backgroundColor: ["#5C8CD6", "#F29C56", "#2E363A"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${Math.round(tooltipItem.raw)}%`;
          },
        },
      },
    },
  };

  if (chartTile)
    return (
      <Container maxW="1700px">
        <VStack>
          <Heading mb={10}>Sentiment percentage for {chartTile} topic</Heading>
          <Box
            style={{
              width: "500px",
              height: "500px",
            }}
          >
            <Pie data={chartData} options={options} />
          </Box>
        </VStack>
      </Container>
    );
};

export default SentimentPieChart;
