import './app-button.scss';

const AppButton = ({cssClass, btnLink, children, click}) => {
    const link = btnLink ? 'link': '';
    return (
        <button className={['app-button', link, cssClass].join(' ')} onClick={click}>
            { children }
        </button>
    )
}

export default AppButton;