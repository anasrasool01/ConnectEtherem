import './OneCardComponent.css';
import logo from './logo.svg';

function OneCardComponent() {
    return (
        <div className="Cardone">

            <div className="cardone">
                <div className="cardtext">
                    <h1 className="Cardoneh1">Natural Disaster</h1>
                    <p className="Cardoneh1">lorem ipsum dollar sit amit,consrector adpling sit</p>
                    <button className="Buttonone">learn more</button>
                </div>
                <div className="logocard">
                    <img src={logo} className="logoOne" alt="logo" />
                </div>
            </div>
        </div>

    );
}

export default OneCardComponent;
