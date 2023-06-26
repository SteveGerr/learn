import './app-logo.scss'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const AppLogo = ({imgSrc, text}) => {
    return (
        <Container className='d-flex align-items-center'>
            <Image className='logo__image me-2' src={imgSrc} />
            <b>{ text }</b>
        </Container>
    )
}

export default AppLogo;