import './boxManualStyles.css';

const BoxManual = ({ num, title, children }) => {
    return (
        <div className='sections'>
            <div className='section'>
                <div className='header-section'>
                    <div className='circle'>
                        <p className='num'>{num}</p>
                    </div>
                    <p className='titleSection'>{title}</p>
                </div>
                {children}
            </div>
        </div>
    );
}
export default BoxManual;