import { Col, Container, Row} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const toRotate = ['Software Engineer', 'Web Developer', 'Always Learning'];
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    
    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
            
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '')
        setIsDeleting(false)
        setLoopNumber(loopNumber + 1);
        setDelta(500)
    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I am Alonzo Alcantar`}<span className='wrap'>{text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Headder Img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}