import './app-checkbox.scss';

const AppCheckbox = ({id}) => {
    return (
        <div>
            <input id={id} className='app-checkbox__input' type='checkbox'  />
            <label htmlFor={id} className='app-checkbox'></label>
        </div>
    )
}

export default AppCheckbox;