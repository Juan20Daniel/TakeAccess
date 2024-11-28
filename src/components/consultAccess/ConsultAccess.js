import { useState } from 'react';
import './consultAccessStyles.css';
import { searchMatric } from '../../functions';
import iconBack from '../../assets/iconBack.png';
import Results from '../results/Results';
const ConsultAccess = ({ setAlert }) => {
    const [ matrincToSearch, setMatrincToSearch ] = useState({ value:'', valid:null });
    const [ ids, setIds ] = useState([]);
    const handleChange = e => {
        const valueInput = e.target.value.replace(/\s+/g, "");
        setMatrincToSearch({...matrincToSearch, value:valueInput});
    }
    const searchAccess = () => {
        if(!/^[0-9]{7}$/.test(matrincToSearch.value)) {
            setMatrincToSearch({ ...matrincToSearch, valid:'incorrect' });
            return setAlert({ visible:true, message:"La matrícula no es válida"});
        }
        setMatrincToSearch({ ...matrincToSearch, valid:'correct' });
        const resultToSearch = searchMatric(matrincToSearch.value);
        if(resultToSearch.length === 0) {
            return setAlert({ visible:true, message:"No se encontraron resultados de tu matrícula"});
        }
        setIds(resultToSearch);
    }
    const handleToBack = () => {
        setIds([]);
    }
    return (
        <div className='consultAccess'>
            <div className='box-consultAccess'>
                {ids.length !== 0 ?
                    <div className='boxResultAccess'>
                        <button onClick={handleToBack} className="btnBack">
                            <img src={iconBack} alt="icon de volver" />
                        </button>
                        <p className='name'>{ids[0].nombre} {ids[0].apellidos}</p>
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
                        <div className={`input-group ${matrincToSearch.valid === "incorrect" && "error"}`}>
                            <input
                                type="text"
                                id="getAccess"
                                value={matrincToSearch.value}
                                placeholder=' '
                                onChange={handleChange}
                            />
                            <label htmlFor='getAccess' className={`label ${matrincToSearch.valid === "incorrect" && "labelErr"}`}>
                                Matrícula
                            </label>
                            <p className="count">{matrincToSearch.value.length}/7</p>
                            <button className='btnSearch' onClick={searchAccess}>Buscar</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default ConsultAccess;