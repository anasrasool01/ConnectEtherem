import './BodyPartComponent.css';
import logo from './logo.svg';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab'
function BodyPartComponent() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='con'>
                    <div className='conText'>
                        <img id='img1' src={logo} alt="Logo" />
                    </div>

                    <div className='conText'>
                        <h4 className="Cardoneh12">Natural Disaster</h4>
                        <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='con'>
                    <div className='conText'>
                        <img id='img1' src={logo} alt="Logo" />
                    </div>

                    <div className='conText'>
                        <h4 className="Cardoneh12">Natural Disaster</h4>
                        <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='con'>
                    <div className='conText'>
                        <img id='img1' src={logo} alt="Logo" />
                    </div>

                    <div className='conText'>
                        <h4 className="Cardoneh12">Natural Disaster</h4>
                        <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='con'>
                    <div className='conText'>
                        <img id='img1' src={logo} alt="Logo" />
                    </div>

                    <div className='conText'>
                        <h4 className="Cardoneh12">Natural Disaster</h4>
                        <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
                    </div>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    )
}

export default BodyPartComponent;















// function BodyPartComponent() {
//     return (
//         <div className="timeline">

//             <div className="content">
//                 <div className="logocard2">
//                     <img src={logo} className="logoOne2" alt="logo" />
//                 </div>
//                 <div className="cardtext2">
//                     <h1 className="Cardoneh12">Natural Disaster</h1>
//                     <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
//                 </div>
//             </div>



//             <div className="content">
//                 <div className="logocard2">
//                     <img src={logo} className="logoOne2" alt="logo" />
//                 </div>
//                 <div className="cardtext2">
//                     <h1 className="Cardoneh12">Natural Disaster</h1>
//                     <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
//                 </div>
//             </div>



//             <div className="content">
//                 <div className="logocard2">
//                     <img src={logo} className="logoOne2" alt="logo" />
//                 </div>
//                 <div className="cardtext2">
//                     <h1 className="Cardoneh12">Natural Disaster</h1>
//                     <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
//                 </div>
//             </div>




//             <div className="content">
//                 <div className="logocard2">
//                     <img src={logo} className="logoOne2" alt="logo" />
//                 </div>
//                 <div className="cardtext2">
//                     <h1 className="Cardoneh12">Natural Disaster</h1>
//                     <p className="Cardoneh12">lorem ipsum dollar sit amit,consrector adpling sit</p>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default BodyPartComponent;