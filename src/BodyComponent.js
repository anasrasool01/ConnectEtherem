import './Body.css';
import ButtonGetStarted from './ButtonGetStarted';
import FirstCard from "./Fcard/FirstCard";
import FourCardComponent from './FourCardComponent'
import SixCard from './SixCard';
import TwoCard from './TwoCard';
import OneCardComponent from './OneCard';
import BodyPartComponent from './BodyPart';

function BodyComponent() {
  return (
    <div className="AppBody">
      <div className="body">
        <h1 className="heading">Simple crypto wallet backups that</h1>
        <h1 className="heading2">Scale with you.</h1>
        <h4 className="paragraph">Back up all of Your crypto tokens and NFTs across every wallet,all in one place</h4>
        <h4 className="paragraph">Sleeps easy knowingthat yours investments are safe for life.</h4>
        <ButtonGetStarted />

        <FirstCard />

        <p className="BluePara">DON'T LEAVE IT TO CHANCE</p>
        <h3>Why back up your crypto?</h3>
        <FourCardComponent />

        <p className="BluePara">DON'T LEAVE IT TO CHANCE</p>
        <h3>Why back up your crypto?</h3>

        <SixCard />

        <p className="BluePara">DON'T LEAVE IT TO CHANCE</p>
        <h3>Why back up your crypto?</h3>

        <TwoCard />


        <OneCardComponent />

        <p className="BluePara">DON'T LEAVE IT TO CHANCE</p>
        <h3>Why back up your crypto?</h3>

        <BodyPartComponent />

      </div>

    </div>

  );
}

export default BodyComponent;
