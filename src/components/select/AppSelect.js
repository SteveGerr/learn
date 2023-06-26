import Form from 'react-bootstrap/Form';
import './app-select.scss';

function AppSelect() {
    return (
      <>
        <Form.Select size="lg">
          <option>Where did you find us</option>
          <option>Google</option>
          <option>Linkedin</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Other</option>
        </Form.Select>
      </>
    );
  }

  export default AppSelect;