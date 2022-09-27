import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Graficos = ({usuario}) => {
  const { clicsGrafico, numeroDeVentasGrafico } = usuario;

// ventas
  const labelVentas = numeroDeVentasGrafico.split('-');
  labelVentas.splice(labelVentas.length - 1);

  let dataClicsVentas = [0, 0, 0, 0, 0, 0, 0];
  const resultadoVentas = labelVentas.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});
  for (const prop in resultadoVentas) {
    dataClicsVentas.push(resultadoVentas[prop]);
  }

  // solo 5 en el gráfico
  for (let i = 0; i < dataClicsVentas.length; i++) {
    if (dataClicsVentas.length > 7) {
      dataClicsVentas.shift();
    }
  }

// clics
  const label = clicsGrafico.split('-');
  label.splice(label.length - 1);

  let labelContador = ["-", "-", "-", "-", "-", "-", "-"];
  label.forEach(element => {
    if (!labelContador.includes(element)) {
      labelContador.push(element);
    }
  });

  let max = 5;
  let dataClics = [0, 0, 0, 0, 0, 0, 0];
  const resultado = label.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});
  for (const prop in resultado) {
    dataClics.push(resultado[prop]);
  }

  // solo 5 en el gráfico
  for (let i = 0; i < dataClics.length; i++) {
    if (dataClics.length > 7) {
      dataClics.shift();
      labelContador.shift();
    }
  }

  // num max
  for (const prop in dataClics) {
    if (max < dataClics[prop]) {
      max = dataClics[prop];
    }
  }

  const opciones = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: max + 1
      }
    }
  }

  const data = {
    datasets: [
      {
        label: 'Clics en mi enlace',
        data: dataClics,
        fill: true,
        backgroundColor: "rgba(243, 156, 18, 0.7)"
      },
      {
        label: 'Ventas propias',
        data: dataClicsVentas,
        fill: true,
        backgroundColor: "rgba(52, 152, 219, 0.7)",
      }
    ],
    labels: labelContador
  }

  return (
    <div>
      <hr />
      <h5 className="mx-3 my-4">Desempeño en los últimos 7 días.</h5>
      <div style={{ maxWidth: 800 }} className="m-auto">
        <Bar data={data} options={opciones} />
      </div>
    </div>
  );
}

export default Graficos;