import { Link } from 'react-router-dom'

import './ErrorAlert.css'

export const ErrorAlert = ({ errorMessage }) =>
  <div className="error-alert">
    &#129324;&nbsp;{errorMessage}&nbsp;
    <Link to="/">Back to homepage.</Link>
  </div>
