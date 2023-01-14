

import { Col, Row } from "react-bootstrap";

export const Resume = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Alonzo_Alcantar_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Alonzo_Alcantar_Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <>
      <Col lg={12} id='resume'>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h2>Resume</h2>
              <br></br>
              <button className="button"
                onClick={onButtonClick}>
                    Download Resume
                </button> 
            </Col>
            <Col md={6} xl={7}>
              
            </Col>
          </Row>
        </div>
      </Col>
    
    </>
  )
}