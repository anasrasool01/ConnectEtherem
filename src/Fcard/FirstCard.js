import logo from './logo.svg';
import './FirstCard.css';

function FirstCard() {
    return (
        <div className='card'>
            <div className='writings'>
                <p>Trusted by the most innovative organizations and firms</p>
            </div>
            <div className="Middle">
                <img src={logo} sizes={10} className="pic" alt="logo" />
                <img src={logo} sizes={10} className="pic" alt="logo" />
                <img src={logo} sizes={10} className="pic" alt="logo" />
                <img src={logo} sizes={10} className="pic" alt="logo" />
                <img src={logo} sizes={10} className="pic" alt="logo" />
            </div>
        </div>
    );
}

export default FirstCard;
