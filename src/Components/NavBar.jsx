import { Navbar, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
        <Container>
            <Navbar.Brand href='#home'>
                <img src={''} alt = 'logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' >
                <span className='navbar-toggler-icon'>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto">
                <Nav.Link href='#home' className= {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('home')} >Home</Nav.Link>
                <Nav.Link href='#link' className= {activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                <Nav.Link href='#link' className= {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href='#link' className= {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('contact')}>Contact</Nav.Link>

            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={''} alt = ''/></a>
                    <a href='#'><img src={''} alt = ''/></a>
                    <a href='#'><img src={''} alt = ''/></a>
                </div>
                <button className="button" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}