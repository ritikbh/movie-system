import React ,{useState} from 'react'
import '../../css/style.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();

    
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
      }

    const handleSubmit = () => {

        axios({
            method: 'post',
            url: 'http://localhost:8040/web/user-login',
            data: {
                user_mail:userMail,
                user_password:userPassword
            },
            headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {

                if(response.data.error)
                {
                    setShowErrorMessage(true)
                    setErrorMessage(response.data.error)
                }
                else{
                    setShowErrorMessage(false)
                    cookies.set('sessionId', response.data.message.session_token, { path: '/' });
                    navigate('/web/user-dasboard');

                    console.log(response.data)

                }

            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className='form-page'>
<div className="form">
      <div className="title">User Login</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " value={userMail} 
                onChange={(e) =>{setUserMail(e.target.value)}}
                onKeyDown={handleKeyDown}/>
        <div className="cut"></div>
        <label  className="placeholder"> Email ID</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " value={userPassword} 
                onChange={(e) =>{setUserPassword(e.target.value)}}
                onKeyDown={handleKeyDown}/>
        <div className="cut"></div>
        <label className="placeholder">Password</label>
      </div>
      <button type="text" className="submit" onClick={handleSubmit}>submit</button>
      <div className="mt-1">
      {showErrorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
          ) : (
          <p></p>
          )}

          </div>
    </div>
    </div>
    )
}

export default LoginForm
