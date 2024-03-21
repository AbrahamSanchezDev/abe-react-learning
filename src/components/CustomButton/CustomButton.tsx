import React, { useState } from "react";
import "./CustomButton.css";

interface Valores {
  texto: string;
  posicion: number;
}
let movimientos: number[] =[]; //movimientos en todos
let tableroData: string[] = ['','','',
                             '','','',
                             '','','']; //conservar el estado

function CustomButton({ texto, posicion }: Valores) {
  const [contador, setContador] = useState(0);
  const [estadoGato, setEstadoGato] = useState("-");

  const sumar = () => {
    setContador((variable) => {
      return variable + 1;
    });
  };

  const funciones = (n: number) => {
    cambiarStado(n);
    agregarMovimiento(n);
  };
  const agregarMovimiento = (n: number) => {
    movimientos.push(n);
    console.log(movimientos);
  };
  const cambiarStado = (posicion:number) => {
    setEstadoGato((estado) => {
      const nuevoEstado = 
      estado === "-" ? "X":
      estado === "X" ? "O": "-";
      tableroData[posicion] = nuevoEstado;
      return nuevoEstado;
    });
  };
  return (
    <>
      <div onClick={() => funciones(posicion)} className="b0 b1">
        {estadoGato}
      </div>
    </>
  );
}

export default CustomButton;
