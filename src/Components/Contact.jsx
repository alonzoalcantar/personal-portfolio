import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {




  const form = useRef()

  const handleSubmit = (e) => {

    e.preventDefault();
 

    emailjs.sendForm('service_r90to0d', 'template_4r6gpqe', form.current, 'k29HTIw-Rq49cAEkN')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    form.current.reset()
    };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                   <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name='first_name' placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='last_name' placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  name='email_address' placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name= 'phone_number' placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  name= 'message' placeholder="Message" ></textarea>
                      <input type="submit" value="Send" />
                    </Col>
  
                  </Row> 


                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

// emailjs.sendForm('gmail', 'template_4r6gpqe', form.current, 'k29HTIw-Rq49cAEkN')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
// };


//   return (
//     <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
//     </form>
//   );
// };