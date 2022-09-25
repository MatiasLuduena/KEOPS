import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Short = () => {
  const { id } = useParams();

  const dates = new Date();
  const dia = dates.getDate();
  const mes = dates.getMonth();

  useEffect(() => {
    async function fetchId() {
      const res = await axios.post('http://localhost:5000/api/usuarios/redirect', {
        id: id, clicGrafico: `${dia}/${mes + 1}-`
      });
      window.location.href = res.data.url;
    }
    fetchId();
  }, []);
}

export default Short;