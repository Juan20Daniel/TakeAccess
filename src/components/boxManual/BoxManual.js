import './boxManualStyles.css';

const BoxManual = ({ num, title, children }) => {
    return (
        <section>
            <div className='section__box'>
                <div className='header-section'>
                    <div className='circle'>
                        <p className='num'>{num}</p>
                    </div>
                    <p className='titleSection'>{title}</p>
                </div>
                {children}
            </div>
        </section>
    );
}
export default BoxManual;