//Formulario 
import { useState,useEffect } from "react";
import "../css/formulario.css"

const Formulario = ( {
    modalVisible,
    setModalVisible,
    pacientes,
    setPacientes

})=>{
    const[paciente,setPaciente]=useState('');
    const[nombrePropietario,setnombrePropietario]=useState('');
    const[correo,setCorreo]=useState('');
    const[telefono,setTelefono]=useState('');
    const[fechaAlta,setFechaAlta]=useState('');
    const[sintomas,setSintomas]=useState('');

    const handleCita = (e) => {     // Function to handle the form submission
        e.preventDefault();

        //validacion de formulario
        if([paciente.trim(), nombrePropietario.trim(), correo.trim(), telefono.trim(), fechaAlta.trim(), sintomas.trim()].includes('')){
            console.log('Todos los campos son obligatorios');
            return;
        }

        //Create an object with all values in the form
   
        const nuevoPaciente = {
            paciente,
            nombrePropietario,
            correo,
            telefono,
            fechaAlta,
            sintomas
        };

        nuevoPaciente.id = Date.now(); // Add a unique ID to the new patient object
        console.log(nuevoPaciente);

        //Save all new recorsd(pacientes)
        //state = add my object into the array
        setPacientes([...pacientes, nuevoPaciente]);// Add the new patient to the existing array of patients
        setModalVisible(false); // Close the modal after submitting the form
    }

   

    

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

            <form onSubmit={(e)=> handleCita(e)}>
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
                <div className="formulario-campo">
                    <label
                    htmlFor="nombrePropietario"   //el label se aplica a un input
                    >Nombre Propietartio</label>
                    <input
                         id="Propietario"
                         type="text"
                         className="formulario-input"
                         placeholder="Ingresa nombre del propietario"
                         value={nombrePropietario}
                         onChange={(e)=>setnombrePropietario(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="correo"   //el label se aplica a un input
                    >Correo</label>
                    <input
                         id="correo"
                         type="email"
                         className="formulario-input"
                         placeholder="aaa@gmail.com"
                         value={correo}
                         onChange={(e)=>setCorreo(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="telefono"   //el label se aplica a un input
                    >Telefono</label>
                    <input
                         id="telefono"
                         type="tel"
                         className="formulario-input"
                         placeholder="449-000-000"
                         value={telefono}
                         onChange={(e)=>setTelefono(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="fechaAlta"   //el label se aplica a un input
                    >Fecha Alta</label>
                    <input
                         id="fechaAlta"
                         type="date"
                         className="formulario-input"
                         placeholder="01/01/2000"
                         value={fechaAlta}
                         onChange={(e)=>setFechaAlta(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="sintomas"   //el label se aplica a un input
                    >Sintomas</label>
                    <textarea
                         id="sintomas"
                         className="formulario-input"
                         placeholder="El paciente presenta..."
                         value={sintomas}
                         onChange={(e)=>setSintomas(e.target.value)}
                         rows={4}
                    />
                </div>
                <button //
                    type="submit"
                    className="formulario-btn-submit"
                >Agregar Paciente</button>
            </form>
        </div>
    );
};

export default Formulario;