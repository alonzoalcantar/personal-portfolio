import { Col, Container, Row} from "react-bootstrap"

import { useState, useEffect } from "react"
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen"



export const Banner = () => {
    const toRotate ='Software Engineer';
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('Software Engineer');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    



    useEffect (() => {
        
        function tick(){
            let fullText = toRotate;
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
            setText(updatedText);
    
            if(isDeleting) {
                setDelta(prevDelta => prevDelta /2)
            }
    
            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '')
            setText('Software Engineer')
            setLoopNumber(loopNumber + 1);
            setDelta(500)
        }

        let ticker = setInterval(() => {
            tick();
            
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text, delta, isDeleting, loopNumber, toRotate])

    


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I am Alonzo Alcantar  `} </h1>
                        <h2><span className='wrap'>{text}</span></h2>
                        <h1>  </h1>
                        <p>I am a Software Engineer who feels comfortable in Javascript, React, Express and CSS but is always eager to discover new technologies and find a way to develop a new skill. 
                        <hr></hr>
                        <p>I enjoy soccer, anime and I hope to travel to another country one day.</p></p>
                        <hr></hr>
                        <p>I have a background in the hospitality industry dealing directly with guest relations and daily management operations. Personally I enjoy helping others be comfortable. I have found that Software Engineering allows me to provide assistance and peace of mind to many individuals by tackling problems head-on and breaking them down to smaller problems I know I can resolve efficiently.</p>
                        {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button> */}
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Headder Img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}