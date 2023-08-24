import { useState } from 'react';
import './consultAccessStyles.css';
import { searchCurp } from '../../functions';
import iconBack from '../../assets/iconBack.png';
import Results from '../results/Results';
const ConsultAccess = ({ setAlert }) => {
    const [ curpToSearch, setCurpToSearch ] = useState({ value:'', valid:null });
    const [ ids, setIds ] = useState([]);
    const handleChange = e => {
        const valueCurp = e.target.value.toUpperCase();
        const resetValue = valueCurp.replace(/\s+/g, "");
        setCurpToSearch({...curpToSearch, value:resetValue});
    }
    const searchAccess = () => {
        if(/^[a-zA-Z0-9]{18}$/.test(curpToSearch.value)) {
            setCurpToSearch({ ...curpToSearch, valid:'correct' });
            const resultToSearch = searchCurp(curpToSearch.value);
            if(resultToSearch.length > 0) {
                setIds(resultToSearch);
            } else {
                setAlert({ visible:true, message:"No se encontraron resultados de tu curp"});
            }
        } else {
            setCurpToSearch({ ...curpToSearch, valid:'incorrect' });
            setAlert({ visible:true, message:"La curp no es válida"});
        }
    }
    const handleToBack = () => {
        setIds([]);
    }
    return (
        <div className='consultAccess'>
            <div className='box-consultAccess'>
                <div className='ilustration'></div>
                {ids.length !== 0 ?
                    <div className='boxResultAccess'>
                        <button onClick={handleToBack} className="btnBack">
                            <img src={iconBack} alt="icon de volver" />
                        </button>
                        <p className='name'>Hola: {ids[0].nombre}</p>
                        <p className='titleResults'>Tu acceso a Algebraix</p>
                        <div className='resultAcces'>
                            {ids.map((item, index) => {
                                return <Results key={index} item={item} />
                            })}
                        </div>
                    </div>
                    :
                    <div className='takeaccess'>
                        <p className='title'>Busca tu acceso al portal.</p>
                        <div className={`input-group ${curpToSearch.valid === "incorrect" && "error"}`}>
                            <input
                                type="text"
                                id="getAccess"
                                value={curpToSearch.value}
                                placeholder=' '
                                onChange={handleChange}
                            />
                            <label htmlFor='getAccess' className={`label ${curpToSearch.valid === "incorrect" && "labelErr"}`}>
                                Ingresa tu curp
                            </label>
                            <p className="count">{curpToSearch.value.length}/18</p>
                            <button className='btnSearch' onClick={searchAccess}>Buscar</button>
                        </div>
                        <p className='pageConsultCurp'>
                            ¿No te sabes tu curp?
                            <button className='btnConsultCurp' onClick={()=> window.open("https://www.gob.mx/curp/", "_blank")}>consulta la aquí.</button>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ConsultAccess;