import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MineSweeper",
      description: "HTML5, Javascript, CSS",
      projectUrl: 'https://alonzoalcantar.github.io/Minesweeper-Project-/',
      imgUrl: projImg1,
    },
    {
      title: "Hotel Booking App",
      description: "HTML5, Javascript, CSS, Bootstrap, Express, MongoDB, Heroku",
      imgUrl: projImg2,
      projectUrl: 'https://aqueous-spire-88874.herokuapp.com/'
    },
    {
      title: "Spotify Mock Application",
      description: "HTML5, Javascript, CSS, React, Express, Styled Components, Bootstrap, AXIOS, JWT Authentication, Spotify Web API, Heroku",
      imgUrl: projImg3,
      projectUrl: 'https://thawing-bayou-17998.herokuapp.com/'
    },
    {
      title: "Character Collector",
      description: "Django, Python, PSQL, Materialize, AWS, Heroku",
      imgUrl: projImg4,
      projectUrl: 'https://peaceful-wave-72012.herokuapp.com/'
    },
    {
        title: "Boolean Fitness",
        description: "Django, Python, PSQL, Materialize, Javascript, CSS, HTML, Heroku",
        imgUrl: projImg5,
        projectUrl: 'https://shrouded-retreat-81056.herokuapp.com/'
      },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have completed in my time learning to become a software engineer. You can view the individual Project or select a new tab for more information. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Anticipated Projects</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><a href="https://github.com/alonzoalcantar/Minesweeper-Project-">Minesweeper</a> - Find the mines scattered across the board. Use flags to mark potential sites and avoid the explosion.... BOOOM!!!!</p>
                      <hr></hr>
                      <p><a href="https://github.com/alonzoalcantar/Full-Stack-Application-Project">My Bookings App</a> - This is My Bookings App. Here you will be able to keep track of your various Hotel Reservations all in one place. You will be able to select your specifc Hotel and Room Type all from this application and rest assured your room will be ready!!</p>
                      <hr></hr>
                      <p><a href="https://github.com/alonzoalcantar/Spotify-Mock-Application">Spotify Mock Application</a> - This is my attempt at creating a Spotify mock application. Users can Sign in to the app and connect their Spotify account. Here they can view profile information regarding their Spotify data, and play music. This was my first attempt at using a WEB API. Furture updates incoming.....</p>
                      <hr></hr>
                      <p><a href="https://github.com/alonzoalcantar/CharacterCollector">Character Collector</a> - This is my Character Collector where users can save details regarding their D&D characters. Items can be collected and associated with player characters and more characters can be created. This application help with the orginization of a player sheet.</p>
                      <hr></hr>
                      <p><a href="https://github.com/Boolean-Hooligans-DjangoApp/Boolean-Fitness-">Boolean Fitness</a> - Boolean Fitness is a web application that allows users to find and review fitness studios and gyms in their area. It also allows to advertise local activities to find more participants. Users can search for studios by location and activity type. Also they will be able to view location details and ratings, and leave their own ratings and reviews.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Instagram Clone</p>
                      <p>Streaming Application</p>
                      <p>Bank App / Wallet </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}