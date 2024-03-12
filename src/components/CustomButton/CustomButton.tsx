import React, { useState } from "react";
import "./CustomButton.css";

interface Valores {
  texto: string;
}

function CustomButton({ texto }: Valores) {
  const [contador, setContador] = useState(0);
  const [estadoGato, setEstadoGato] = useState(" ");

  const sumar = () => {
    setContador((variable) => {
      return variable + 1;
    });
  };

  const cambiarStado = () => {
    setEstadoGato((estado) => {
      if (estado === "-") return "X";
      if (estado === "X") return "O";
      return "-";
    });
  };
  return (
    <>
      <div onClick={cambiarStado} className="b0 b1">
        {estadoGato}
      </div>
    </>
  );
}

export default CustomButton;
