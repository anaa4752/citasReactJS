//Formulario 
import { useState,useEffect } from "react";
import "../css/formulario.css"

const Formulario = ( {
    modalVisible,
    setModalVisible
})=>{
    const[paciente,setPaciente]=useState('');

    return (       //si queremos regresar varias cosas usamos ()
        <div className="formulario-contenido">
            <h2 className="formulario-titulo">Nueva
                <span className="fromulario-titulo-bold"></span>Citas
            </h2>
            <button className="formulario-btn-cancelar"
                onClick={()=>setModalVisible(false)}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>

            <form>
                <div className="formulario-campo">
                    <label
                    htmlFor="paciente"   //el label se aplica a un input
                    >Nombre Paciente</label>
                    <input
                         id="paciente"
                         type="text"
                         className="formulario-input"
                         placeholder="Perrito Poppy"
                         value={paciente}
                         onChange={(e)=>setPaciente(e.target.value)}
                    />
                    

                </div>
            </form>
        </div>
    );
};

export default Formulario;