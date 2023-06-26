import Container from 'react-bootstrap/Container';
import './assets/styles/app.scss';
import { Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
// Components
import AppHeader from './components/header/Header';
import AppBadge from './components/badge/AppBadge';
import AppButton from './components/buttons/AppButton';
// Img
import Man from './static/man.png';
// svg
import BookSvg from './assets/svg/advantages/book.svg';
import DollarSvg from './assets/svg/advantages/dollar-sign.svg';
import MingcuteSvg from './assets/svg/advantages/mingcute_certificate-line.svg';
import EllipseSvg from './assets/svg/Ellipse.svg';
import Highlight from './assets/svg/Highlight_10.svg';
import LineSvg from './assets/svg/Line-6.svg';
import ArrowDownSvg from './assets/svg/arrow-down.svg';
import AppModal from './components/modal/AppModal';
import ModalRegistration from './components/modal/ModalRegistration/ModalRegistration';

function App() {

  const advantages = [
    {
      id: 1,
      icon: BookSvg,
      text: 'Big library'
    },
    {
      id: 2,
      icon: DollarSvg,
      text: 'Low prices'
    },
    {
      id: 3,
      icon: MingcuteSvg,
      text: 'Professional certificates'
    },
  ];

  const svgImages = [
    {
      id: 1,
      svg: EllipseSvg,
      class: 'elipse'
    },
    {
      id: 3,
      svg: LineSvg,
      class: 'line-svg'
    },
    {
      id: 4,
      svg: ArrowDownSvg,
      class: 'arrow-down'
    },
  ]

  const [modalShow, setModalShow] = useState(false);

  const onModalShow = () => setModalShow(true);
  const onModalClose = () =>  setModalShow(false);

  return (
    <Container className='p-0' fluid>
      <header className='app-header'>
        <AppHeader onRegister={onModalShow} />
      </header>
      <main className='app-content'>
        <Container fluid>
          <Row>
            <Col className='left-column d-flex align-items-center flex-shrink-1 col-sm-12 col-lg-7'>
              <div className='left-block position-relative'>
                <h1 className='app-slogan'>
                  Learn without limits
                  <Image className='highlight d-none d-sm-block' src={Highlight} />
                </h1>
                <p className='app-text'>
                  Start, switch, or advance your career with more than 5,800 courses,
                  Professional <br/> Certificates, and degrees from world-class universities and companies. <br/>
                  Learning with us is easy because we have
                </p>
                <div className='d-flex gap-2 gap-xl-5 advantages'>
                  {
                    advantages ? advantages.map((adv) => <AppBadge key={adv.id} icon={adv.icon} text={adv.text} />) : null
                  }
                </div>
                <AppButton cssClass='app-start-btn'>Start learning</AppButton>
              {/* svg */}
                {
                  svgImages ? svgImages.map((svg) => <Image key={svg.id} className={[svg.class, 'd-none d-sm-block'].join(' ')} src={svg.svg} />) : null
                }
              </div>
            </Col>
            <Col className='col-sm-12 col-lg-5'>
              <div className='right-block d-flex justify-content-end'>
                <Image className='w-100' src={Man} />
              </div>
            </Col>
          </Row>
        </Container>
        <AppModal show={modalShow} handleClose={onModalClose}>
          <ModalRegistration closeModal={onModalClose} />
        </AppModal>
      </main>
    </Container>
  );
}

export default App;
