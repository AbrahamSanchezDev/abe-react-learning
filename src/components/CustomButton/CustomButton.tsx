import React, { useState } from "react";
import "./CustomButton.css";

interface Valores {
  texto: string,
  posicion:number
}

function CustomButton({ texto ,posicion}: Valores) {
  const [movimientos, setMovimientos] = useState([]);
  const [contador, setContador] = useState(0);
  const [estadoGato, setEstadoGato] = useState("-");

  const sumar = () => {
    setContador((variable) => {
      return variable + 1;
    });
  };

  const funciones = (n:number) => {
    cambiarStado();
    agregarMovimiento(n);

  };
  const agregarMovimiento = (n:number)=>{
    setMovimientos(estado =>{
      return estado[n];
    });
  }
  const cambiarStado = () => {
    setEstadoGato((estado) => {
      if (estado === "-") return "X";
      if (estado === "X") return "O";
      return "-";
    });
  };
  return (
    <>
      <div onClick={()=>funciones(posicion)} className="b0 b1">
        {estadoGato}
      </div>
    </>
  );
}

export default CustomButton;
