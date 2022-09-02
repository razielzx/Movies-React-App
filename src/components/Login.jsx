//Libraries
import swAlert from '@sweetalert/with-react'
import axios from 'axios';
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if(email === '' || password === '') {
            swAlert(<h2>Email & Password must be filled</h2>);
            return;
        };

        if(email !== "" && !regexEmail.test(email)) {
            swAlert(<h2>Email formatting not valid</h2>);
            return;
        }; 
        
        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Invalid Credentials</h2>);
            return;
        };

        axios
            .post('http://challenge-react.alkemy.org', { email, password})
            .then( res => {
                swAlert(<h2>Logged!</h2>);
                const receivedToken = res.data.token;
                localStorage.setItem("token", receivedToken);
                navigate("/list");
            })
            .catch(err => console.log(err))
    };


    return(
        <div className='text-center'>
            <h1>Log In</h1>
            <h6>challenge@alkemy.org</h6>
            <h6>react</h6>
            <form onSubmit={submitHandler}>
                <label className='mt-3' htmlFor="">
                    <span>Email:</span> <br />
                    <input type="text" name="email"/>
                </label>
                <br />
                <label className='mt-3' htmlFor="">
                    <span>Password:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button className='mt-3' type="submit">Log In</button>
            </form>
        </div>

    )
}

export default Login;