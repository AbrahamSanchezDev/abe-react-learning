import React from "react";
import "./Tablero.css"; 
import CustomButton from "../CustomButton/CustomButton";
function Tablero() {
    return (  
        <>
         <div className="filaTTC">
          <CustomButton texto=""  posicion={0} />
          <CustomButton texto=""  posicion={1} />
          <CustomButton texto=""  posicion={2} />
        </div>
        <div className="filaTTC">
          <CustomButton texto=""  posicion={3} />
          <CustomButton texto=""  posicion={4}/>
          <CustomButton texto=""  posicion={5} />
        </div>
        <div className="filaTTC">
          <CustomButton texto="" posicion={6}/>
          <CustomButton texto="" posicion={7}/>
          <CustomButton texto="" posicion={8} />
        </div>
        </>
    );
}

export default Tablero;