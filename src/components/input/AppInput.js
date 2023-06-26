import { useState } from 'react';
import { Image } from 'react-bootstrap';
import './app-input.scss'
import EyeSvg from '../../assets/svg/input/eye.svg';
import EyeCloseSvg from '../../assets/svg/input/eye-off.svg';

const AppInput = ({placeholder, value, change, type}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);

        if ( change === 'Function') {
            change();
        }
    };

    const status = showPassword ? EyeCloseSvg : EyeSvg;
    const inputType = showPassword ? 'text' : 'password';

    if (type === 'text') {
        return (
            <div className={['app-input', inputValue.length ? 'no-empty' : ''].join(' ')}>
                <input
                    value={value}
                    onChange={handleChange}
                    type={type}
                    placeholder={placeholder}
                />
                <span className='app-input__placeholder'>{placeholder}</span>
            </div>
        )
    }


    if (type === 'password') {
        return (
            <div className={['app-input', inputValue.length ? 'no-empty' : ''].join(' ')}>
                <input
                    value={value}
                    onChange={handleChange}
                    type={inputType}
                    placeholder={placeholder}
                />
                <span className='app-input__placeholder'>{placeholder}</span>
                <Image
                    className='app-input__eye'
                    onClick={() => setShowPassword(!showPassword)}
                    src={status}
                />
            </div>
        )
    }


}

export default AppInput;