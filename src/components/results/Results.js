import './resultsStyles.css';

const Results = ({ item }) => {
    return (
        <div className='content-results'>
            <p className='section'>Carrera: {item.carrera}</p>
            <p className='group-student'>Grupo: {item.grupo}</p>
            <p className='result'>
                <span>Usuario:</span> {item.userName}
            </p>
            <p className='result'><span>Contraseña: </span>Tempo4321 <b>o</b> Temporal1</p>
        </div>
    );
}

export default Results;