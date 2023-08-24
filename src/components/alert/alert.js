import './alertStyles.css';

const Alert = ({ alert, setAlert }) => {
    const stopClick = e => e.stopPropagation();
    return (
        <div className={`alert ${alert.visible && "openAlert"}`}>
            <div className='boxAlert' onClick={() => setAlert({ visible:false, message:"" })}>
                <div className="contentAlert" onClick={stopClick}>
                    <div className="center">
                        <p className='titleAlert'>{alert.message}</p>
                        <ul>
                            <li>Asegúrate de colocar los 18 dígitos de tu curp.</li>
                            <li>Coloca solo números y letras.</li>
                            <li>Verifica que está correctamente escrita.</li>
                            <li>O ponten en contacto con el departamento de sistemas de Itecce.</li>
                        </ul>
                        <button className='btnCloseModal' onClick={() => setAlert({ visible:false, message:""})}>
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alert;