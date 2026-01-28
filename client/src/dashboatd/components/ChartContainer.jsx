import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const ChartContainer = ({ statsData }) => {
  const data = {
    labels: statsData.map(s => s.product_name),
    datasets: [{
      label: 'Lượt Click',
      data: statsData.map(s => s.clicks),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  return <Bar data={data} />;
};