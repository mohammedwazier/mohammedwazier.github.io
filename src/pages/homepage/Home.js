import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import Slider from 'react-slick';

// import imgBanner from '../../asset/img/Images-banner-welcome.svg';
import Self from '../../asset/img/Myself.JPG';

import WhatsApp from '../../asset/img/WhatsappBot.png';
import TimahIndustri from '../../asset/img/TimahIndustri.png';
import LiteBig from '../../asset/img/LiteBig.png';
import Lora from '../../asset/img/Lora.png';
import Sasa from '../../asset/img/Ssasa.png';

const isBrowser = typeof window !== `undefined`

export default function Home(){

    const items = useRef([]);
    const NavbarRef = useRef();
    const ScrollToTop = useRef();

    const AboutRef = useRef();
    const HomeRef = useRef();
    const PortoRef = useRef();
    const ContactRef = useRef();

    const LoopSlick = () => {
        let comp = [];

        let Project = [
            {
                name: 'LiteBIG',
                role: 'Website Frontend Developer',
                link: 'https://whatsappbot.id',
                date: 2015,
                images: LiteBig
            },
            {
                name: 'Lora (Telkom DDC, Intern)',
                role: 'Website Frontend Developer',
                link: 'https://whatsappbot.id',
                date: 2019,
                images: Lora
            },
            {
                name: 'PT Timah Industri',
                role: 'Website Fullstack Developer',
                link: 'https://timahindustri.com',
                date: 2019,
                images: TimahIndustri
            },
            {
                name: 'HiStore',
                role: 'Backend Developer',
                link: 'https://timahindustri.com',
                date: 2019,
                images: TimahIndustri
            },
            {
                name: 'HiPay',
                role: 'Website Frontend Developer',
                link: 'https://timahindustri.com',
                date: 2019,
                images: TimahIndustri
            },
            {
                name: 'FKPN',
                role: 'Backend Developer',
                link: 'https://timahindustri.com',
                date: 2020,
                images: TimahIndustri
            },
            {
                name: 'Dashboard Undian Sasa 2020',
                role: 'Website Fullstack Developer',
                link: 'http://sasainti.boteva.id',
                date: 2020,
                images: Sasa
            },
            {
                name: 'WhatsappBot.id',
                role: 'Website Frontend Developer',
                link: 'https://whatsappbot.id',
                date: 2021,
                images: WhatsApp
            },
        ];
        Project.forEach((el) => {
            console.log(el)
            comp.push(
                    <div className="card-wrapper px-2" style={{ width: '100%', display: 'inline-block' }} tabIndex={el} id={el} key={el} ref={(element) => (items.current[el] = element)}>
                        <article className="cards">
                            <picture className="card__background">
                                <img src={el.images} />
                            </picture>
                            <div className="card__category">
                                {el.role}
                            </div>
                            <a href={el.link} className="text-decoration-none text-reset">
                                <h3 className="card__title" style={{ fontWeight: 'bold', cursor: 'pointer' }}>{el.name}</h3>
                            </a>
                            <div className="card__duration">
                                {el.date}
                            </div>
                        </article>
                    </div>
            )
            return el;
        })

        return(
            <Slider {...{
                dots: false,
                infinite: true,
                speed: 500,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 3000,
                afterChange: (index) => {
                },
                beforeChange: (i) => {
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                arrows: false,
                responsive: [
                ]
            }}>
                {comp}
            </Slider>
        )

    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', (event) => {
            let scrollTop = window.scrollY;
            let windowHeight = window.innerHeight;
            let twp = ((25/100) * windowHeight);

            if(scrollTop > twp){
                NavbarRef.current.classList.add('navbar-big');
                ScrollToTop.current.style.opacity = 1;
            }else{
                NavbarRef.current.classList.remove('navbar-big');
                ScrollToTop.current.style.opacity = 0;
            }
        })
    })

    return (
        <div>
            <Navbar expand="lg" fixed="top" className="" ref={NavbarRef}>
                <Container>
                    {/* <Navbar.Brand href="#home">Masihkasar</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick={() => HomeRef.current.scrollIntoView()}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => AboutRef.current.scrollIntoView()}>About</Nav.Link>
                        <Nav.Link href="#porto" onClick={() => PortoRef.current.scrollIntoView()}>Portofolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {/* <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="scroll-top d-flex align-items-center justify-content-center" onClick={() => {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}} ref={ScrollToTop}><i className="fas fa-angle-up"></i></div>

            <div className="vw-100 vh-100" ref={HomeRef}>
                <div className="h-100 d-flex align-items-center">
                    <Container className="p-5 text-white" style={{ background: '#1e3799' }}>
                        <div className="row">
                            <div className="col-5 text-right ">
                                <span className="big-font-banner">
                                    Welcome
                                </span>
                            </div>
                            <div className="w-100"></div>
                            <div className="col offset-4">
                                <span className="big-font-banner">
                                    To
                                </span>
                            </div>
                            <div className="w-100"></div>
                            <div className="col offset-3">
                                <span className="big-font-banner">
                                    My Profile
                                </span>
                            </div>
                            <div className="w-100 mb-5"></div>
                            <div className="col-3 offset-6">
                                <p>
                                    Hello my name is Muhammad Waziruddin Akbar, known as Wazier.
                                </p>
                                <p>
                                    I am a Junior Software Engineering.
                                </p>
                            </div>
                            <div className="w-100"></div>
                            <div className="col text-center">
                                <Nav.Link href="#about" onClick={() => AboutRef.current.scrollIntoView()} className="text-decoration-none text-reset">
                                    <b>
                                        <u>
                                            Scroll Down
                                        </u>
                                    </b>
                                </Nav.Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <div className="py-5 position-relative" ref={AboutRef}>
                <div className="box-left-top"></div>
                <Container className="py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="display-1" style={{ fontWeight: 700, opacity: .8 }}>
                                About Me
                            </div>
                        </div>
                        <div className="col-3 offset-2">
                            <img src={Self} className="img-fluid" />
                        </div>
                        <div className="col-7 row align-content-between text-fade-7">
                            <div className="col-12">
                            Nulla amet magna quis fugiat magna voluptate enim incididunt labore mollit. Sit non non consequat do fugiat dolor. Qui reprehenderit consequat culpa nisi. Non duis cillum elit excepteur enim consequat in culpa dolore aliqua elit ullamco qui. Commodo pariatur sunt dolore Lorem reprehenderit commodo occaecat nostrud. Officia exercitation eu deserunt adipisicing pariatur.
                            </div>
                            <div className="col-12">
                                Ea sit minim nulla mollit. Id amet Lorem do ullamco culpa laborum eiusmod in mollit excepteur eiusmod. Culpa quis cupidatat reprehenderit pariatur elit velit ullamco et mollit sit excepteur. Eiusmod eu nostrud ex aute dolor culpa ex nisi eiusmod minim cupidatat minim aliquip incididunt. Velit quis ex ullamco mollit. Commodo id dolore id velit. Anim do adipisicing incididunt mollit reprehenderit veniam veniam adipisicing mollit elit velit.
                            </div>
                            <div className="col-12">
                                Ea sit minim nulla mollit. Id amet Lorem do ullamco culpa laborum eiusmod in mollit excepteur eiusmod. Culpa quis cupidatat reprehenderit pariatur elit velit ullamco et mollit sit excepteur. Eiusmod eu nostrud ex aute dolor culpa ex nisi eiusmod minim cupidatat minim aliquip incididunt. Velit quis ex ullamco mollit. Commodo id dolore id velit. Anim do adipisicing incididunt mollit reprehenderit veniam veniam adipisicing mollit elit velit.
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="py-2 position-relative" ref={PortoRef}>
                <div className="box-right-top"></div>
                <Container>
                    <div className="row">
                        <div className="col-12 text-right">
                            <div className="display-1" style={{ fontWeight: 700, opacity: .8 }}>
                                Portofolio
                            </div>
                        </div>
                        <div className="col">
                            <LoopSlick />
                        </div>
                    </div>
                    {/* lkjdflkgjdfglkjdfglkjdfglkjdfglkjdfg */}
                </Container>
            </div>

            <div className="vw-100 footer-bot">
                <Container>
                    <div className="row p-5">
                        <div className="col text-center">
                            &copy; 2020 Muhammad Waziruddin Akbar
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
