import AppButton from '../../buttons/AppButton';
import AppCheckbox from '../../checkbox/AppCheckbox';
import AppInput from '../../input/AppInput';
import CloseSvg from '../../../assets/svg/x.svg';
import './modal-registration.scss';
import { Image } from 'react-bootstrap';


const ModalRegistration = ({ closeModal }) => {
    return (
        <div className='modal-registration'>
            <div className='modal-registration__header mb-4'>
                <h4 className='modal-registration__heading'>Registration</h4>
                <AppButton cssClass='modal-registration__close link' click={closeModal}>
                    <Image src={CloseSvg} />
                </AppButton>
            </div>
            <div className='modal-registration__body mb-5'>
                <form className='modal-registration__form'>
                    <AppInput type='text' placeholder='Name Surname' />
                    <AppInput type='text' placeholder='Email' />
                    <AppInput type='text' placeholder='Phone' />
                    <AppInput type='password' placeholder='Password' />
                    <AppInput type='password' placeholder='Confirm password' />
                </form>
                <div className='modal-registration__terms d-flex gap-2 mt-3'>
                    <AppCheckbox id='terms' />
                    <p className='modal-registration__terms'>I agree with <a className='modal-registration__terms-link' href='/'>Terms and Conditions</a></p>
                </div>
            </div>
            <div className='modal-registration__footer'>
                <AppButton cssClass='modal-registration__register-button'>Register</AppButton>
            </div>
        </div>
    )
}

export default ModalRegistration;