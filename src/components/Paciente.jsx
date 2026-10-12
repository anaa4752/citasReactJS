const Paciente = ({
    setModalVisible,//parametro son etiquetas las cuales esperan recibir algo
    pacientes,
    paciente,
    eliminarPaciente
}) => {

    const handleEliminar = () => {
        eliminarPaciente(paciente.id)
    }

    //handle sirve para manejar eventos se llama dentro del DOM
    const handleEditar = () => {
        setModalVisible(true);      
        console.log(pacientes);     
    };

    return (
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre">{paciente.paciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-editar"
                    onClick={()=>handleEditar()}
                >Editar</button>
                <button className="paciente-btn paciente-btn-eliminar"
                    onClick={()=>handleEliminar()}
                > Eliminar
                </button>
            </div>
        </article>
    );
};

export default Paciente;