import '../css/Login.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    if(localStorage.getItem('userId') !== null) {
        window.location.href='/map';
    }

    const KAKAO_API_KEY = '1643c496c19e7954898f53365d1604eb';
    const NAVER_API_KEY = 'coX7lAoZRjbIyqdltW8i';
    const REDIRECT_URI = 'http://bdcb.cafe24app.com/snslog';

    const KauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const NauthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=naver`
    
    // input useState
    const [logid, setLogid] = useState('');
    const [logpass, setLogpass] = useState('');

    const idChange = (e) => {
        setLogid(e.target.value);
    };

    const passChange = (e) => {
        setLogpass(e.target.value);
    }
    
    /* async function fnclogin(logid, logpass) {
        try {
          const response = await axios.post('https://bdcb.cafe24app.com/logcheck', {
            logid,
            logpass,
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
      
          if (response.data.logchk === 'true') {
            localStorage.setItem('userId', response.data.userInfo.id);
            localStorage.setItem('userPoint', response.data.userInfo.point);
            window.location.href = '/map';
          } else {
            console.log(response.data.error);
          }
        } catch (error) {
          console.log(error);
        }
      } */

    const fnclogin = async() => {
        return await fetch(`http://bdcb.cafe24app.com/logcheck`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                logid,
                logpass,
            })
        }).then((response) => {
            if(response.logchk === 'true'){
                localStorage.setItem('userId', response.userInfo.id);
                localStorage.setItem('userPoint', response.userInfo.point);
                window.location.href='/map';
            } else {
                console.log(response.error);
            }
        });
    };

    return (
        <div className='login_bg'>
            <div className="log_top_block">LOGIN</div>
            <div className="login">
                <div className="member_login">
                    <div className="input_form">
                        <div className="id">
                            <span>ID</span>
                            <input type="text" value={logid} placeholder='아이디를 입력해주세요.' onChange={idChange}/>
                        </div>
                        <div className="pw">
                            <span>PW</span>
                            <input type="text" value={logpass} placeholder='비밀번호를 입력해주세요.' onChange={passChange}/>
                        </div>
                    </div>
                    <div className="login_btn" onClick={fnclogin}>로그인</div>
                    <div className='signup'>
                        <span>회원가입하고 혜택을 누려보세요!</span>
                        <a href="/signup">회원가입바로가기</a>
                    </div>
                </div>
                <div className="social_login">
                    <div className="sns_text">
                        <hr />
                        <span className="text">SNS로그인</span>
                        <hr />
                    </div>
                    <div className="sns_img">
                        <a href={KauthUrl}><img src="images/login/kakao.svg" alt="kakao" /></a>
                        <a href={NauthUrl}><img src="images/login/naver.svg" alt="naver" /></a>
                    </div>
                </div>
            </div>
            <div className="log_under_block"></div>
        </div>
    )
}

export default Login;