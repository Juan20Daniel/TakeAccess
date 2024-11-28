import { useState } from 'react';
import './homeStyles.css';
import Navbar from '../components/navbar/Navbar';
import ConsultAccess from '../components/consultAccess/ConsultAccess';
import Alert from '../components/alert/alert';
import BoxManual from '../components/boxManual/BoxManual';
import loginAlgebraix from '../assets/loginAlgebraix.png';
import cambioContra from '../assets/cambioContra.png';
import addEmail from '../assets/addEmail.png';
import ready from '../assets/ready.png';
import imgId from '../assets/id.png';
import closeAnunc from '../assets/closeAnunc.png';
const Home = () => {
    const [ alert, setAlert ] = useState({ visible:false, message:"" });
    return (
        <div className="home-container">
            <Navbar />
            <Alert alert={alert} setAlert={setAlert} />
            <div className='boxNote'>
               <div className='alin-note'>
                    <h1 className='title-home'>Aviso</h1>
                    <ul>
                        <li className='note'>
                            Solo podrás consultar una vez tu usuario y contraseña.
                        </li>
                        <li className='note'>
                            Para cualquier problema, acude al departamento de sistemas de ITECCE 
                            o manda un mensaje por WhatsApp al número: <b>314 138 2130</b>.
                        </li>
                    </ul>
               </div>
            </div>
            <div className='boxTitleManual'>
                <div className='aling-title'>
                    <p className='titleManual'>Guía para entrar al portal.</p>
                </div>
            </div>
            <BoxManual num="1" title="Localiza tu matrícula escolar">
                <div className='step-one-section'>
                    <p>La matrícula escolar, la puedes consultar en la parte frontal de tu credencial física.</p>
                    <figure>
                        <img src={imgId} alt="Img de credencial de muestra" />
                    </figure>
                </div>
            </BoxManual>
            <BoxManual num="2" title="Consultar acceso">
                <p className='step-two-description'>Con la matrícula escolar a la mano, podrás consultar tu acceso en el buscador que está abajo.</p>
            </BoxManual>
            <ConsultAccess alert={alert} setAlert={setAlert} />
            <BoxManual num="3" title="Dirígete a la página de algebraix">
                <p className='textGoTo'>
                    Ingresa al siguiente link: 
                    <button 
                        onClick={() => window.open("https://c1-universidaditecce.algebraix.com/bin/g/start/default/?x_load=0","_blank")}
                        className="linkToAlgebraix"
                    >
                        Ir a algebraix.
                    </button>
                    <br />
                </p>
            </BoxManual>
            <BoxManual num="4" title="Inicia sesión en algebraix">
               <div className='sectionTwo'>
                    <p className='textInitsession'>
                        Ingresa tu usuario y contraseña anteriormente consultados.
                    </p>
                    <img src={loginAlgebraix} className="loginAlgebraix" alt="login algebraix" />
               </div>
            </BoxManual>
            <BoxManual num="5" title="Cambio de contraseña">
               <div className='sectionTree'>
                    <p className='textInitsession'>
                        En caso de pedirlo, cambia la contraseña, por otra.
                    </p>
                    <img src={cambioContra} className="cambContra" alt="login algebraix" />
               </div>
            </BoxManual>
            <BoxManual num="6" title="Cierre de mensaje">
               <div className='sectionTree'>
                    <p className='textInitsession'>
                        Para cerrar el mensaje de bienvenida, presiona o haz clic sobre la parte oscura que está alrededor del mensaje.
                    </p>
                    <img src={closeAnunc} className="closeAnun" alt="login algebraix" />
               </div>
            </BoxManual>
            <BoxManual num="7" title="Ingresa tu correo y tu teléfono de contacto.">
               <div className='sectionTree'>
                    <p className='textInitsession'>
                        Para proporcionarte un mejor servicio, es necesario que coloques tu correo electrónico personal y tu teléfono de contacto.
                    </p>
                    <img src={addEmail} className="cambContra" alt="login algebraix" />
               </div>
            </BoxManual>
            <BoxManual num="8" title="Listo">
               <div className='sectionTree' id="enlaceancla">
                    <img src={ready} className="loginAlgebraix" alt="login algebraix" />
               </div>
            </BoxManual>
        </div>
    );
}

export default Home;