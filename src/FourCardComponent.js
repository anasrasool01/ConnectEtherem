import './FourCardComponent.css';
import logo from './logo.svg';

function FourCardComponent() {
  return (
    <div class="gridcontainer">

      <div className="Card">

        <img src={logo} className="logo" alt="logo" />
        <h4 className="Cardh1">Natural Disaster</h4>
        <p className="Cardp">lorem ipsum dollar sit amit,consre</p>
        <h3>learn more</h3>
      </div>

      <div className="Card1">
        <img src={logo} className="logo" alt="logo" />
        <h4 className="Cardh1">Natural Disaster</h4>
        <p className="Cardp">lorem ipsum dollar sit amit,consre</p>
        <h3>learn more</h3>
      </div>

      <div className="Card2">
        <img src={logo} className="logo" alt="logo" />
        <h4 className="Cardh1">Natural Disaster</h4>
        <p className="Cardp">lorem ipsum dollar sit amit,consre</p>
        <h3>learn more</h3>
      </div>


      <div className="Card3">
        <img src={logo} className="logo" alt="logo" />
        <h4 className="Cardh1">Natural Disaster</h4>
        <p className="Cardp">lorem ipsum dollar sit amit,consre</p>
        <h3>learn more</h3>
      </div>

    </div>

  );
}

export default FourCardComponent;