import {useState, useRef} from 'react';
import styled from 'styled-components';
import './Login.css';

const LoginBlock = styled.div`
    form {
        text-align : center;
        margin: 0 auto;
    }
`;

function Login(){

    const [inputs, setInputs] = useState({
        id:'',
        password:''
    });

    const {id, password} = inputs;

    const loginInput = useRef();

    const onChange = (e)=>{
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    
    const onClick = ()=>{
        setInputs({
            id:'',
            password:''
        });
        loginInput.current.focus();
    }

    return (
        <LoginBlock>
            <form>
                <div className = "login_box">
                    <h2>로그인</h2>
                    <ul className = "input_button">
                        <li id="id_pass">
                            <ul>
                                <li>
                                    <span>ID : </span>
                                    <input type="text" name="id" value={id} onChange={onChange} ref={loginInput}></input>
                                </li>
                                <li className="pwInput">
                                    <span>PW : </span>
                                    <input type="password" name="password" value={password} onChange={onChange}></input>
                                </li>
                            </ul>
                        </li>

                        <li className="login_btn">
                            <br/>
                            <button>로그인</button>
                        </li>
                    </ul>
                    <br/>
                    <ul className="btns">
                        <li>회원가입</li>
                        <li>ID/PW 찾기</li>
                    </ul>
                </div>
            </form>
        </LoginBlock>
    )
}

export default Login;