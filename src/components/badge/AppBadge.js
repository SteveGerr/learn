import { Image } from 'react-bootstrap'
import './app-badge.scss';


const AppBadge = ({icon, text}) => {
    return (
        <div className='app-badge'>
            <Image className='app-badge__image' src={icon} />
            <p className='app-badge__text'>{text}</p>
        </div>
    )
}

export default AppBadge;