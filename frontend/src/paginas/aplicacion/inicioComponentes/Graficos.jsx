import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Graficos = ({usuario}) => {
  const { clicsGrafico } = usuario;

  const label = clicsGrafico.split('-');
  label.splice(label.length - 1);

  let labelContador = [];
  label.forEach(element => {
    if (!labelContador.includes(element)) {
      labelContador.push(element);
    }
  });

  let max = 0;
  let dataClics = [];
  const resultado = label.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});
  for (const prop in resultado) {
    dataClics.push(resultado[prop]);
    if (max < resultado[prop]) {
      max = resultado[prop] + 5;
    }
  }

  // solo 7 en el gráfico
  if (dataClics.length > 7) {
    dataClics.shift();
    labelContador.shift();
  }

  const opciones = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: max
      }
    }
  }

  const data = {
    datasets: [
      {
        label: 'Clics diarios en mi enlace',
        data: dataClics,
        borderColor: "#f39c12",
        fill: true,
        backgroundColor: "rgba(243, 156, 18, 0.2)"
      },
      {
        label: 'Ventas diarias',
        data: [],
        borderColor: "#3498db",
        fill: true,
        backgroundColor: "rgba(52, 152, 219, 0.2)",
      }
    ],
    labels: labelContador
  }

  return (
    <div>
      <Line data={data} options={opciones} />
    </div>
  );
}

export default Graficos;