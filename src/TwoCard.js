import './TwoCard.css';
import logo from './logo.svg';
function TwoCard() {
    return (

        <div class="grid-contain">

            <div class="grid-item2">
                <div class='clmn'>

                    <h6 class='peace'>"</h6>
                    <p class='txt2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.   </p>

                    <div class='row'>
                        <img id='img2' src={logo} alt="Logo" />
                        <h5>Lorem ipsum dolor </h5>
                    </div>
                    <p class='txt3'>Lorem ipsum</p>
                </div>

            </div>
            <div class="grid-item2">
                <div class='clmn'>

                    <h6 class='peace'>"</h6>
                    <p class='txt2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.   </p>
                    <div class='row'>
                        <img id='img2' src={logo} alt="Logo" />
                        <h5>Lorem ipsum dolor </h5>
                    </div>
                    <p class='txt3'>Lorem ipsum</p>

                </div>

            </div>

        </div>

    );
}

export default TwoCard;
