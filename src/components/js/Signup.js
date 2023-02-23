import '../css/Signup.css';

const signup = () => {
    const next = () => {
        // 입력창 정보 검사
        const id = document.getElementById('id').value;
        const pw = document.getElementById('pw').value;
        const pw_re = document.getElementById('pw_re').value;
        if (id === '') return alert('아이디를 입력해주세요.');
        if (pw === '') return alert('비밀번호를 입력해주세요.');
        if (pw_re === '') return alert('비밀번호를 한번 더 입력해주세요.');
        if (pw !== pw_re) return alert('비밀번호가 일치하지 않습니다.');

        // 다음 창으로 넘어가기
        const first_div = document.getElementById('first_div');
        const last_div = document.getElementById('last_div');
        first_div.classList.add('none');
        last_div.classList.remove('none');

        // 이전 창 활성화
        const before = document.querySelector('.sign_top_block > img');
        before.classList.remove('none');
    }
    const before = () => {
        const before = document.querySelector('.sign_top_block > img');
        const first_div = document.getElementById('first_div');
        const last_div = document.getElementById('last_div');
        first_div.classList.remove('none');
        last_div.classList.add('none');
        before.classList.add('none');
    }
    const submit = async() => {
        // 입력창 정보 검사
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const callnum = document.getElementById('callnum').value;
        if (name === '') return alert('이름을 입력해주세요.');
        if (email === '') return alert('이메일을 입력해주세요.');
        if (callnum === '') return alert('전화번호를 입력해주세요.');
        const id = document.getElementById('id').value;
        const pw = document.getElementById('pw').value;

        // 정보 submit
        return await fetch(`https://bdcb.cafe24app.com/logcheck`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                callnum,
                id,
                pw,
            })
        }).then((response) => {
            if(response.logchk === 'true'){
                window.location.href='/map';
            } else {
                console.log(response.error);
            }
        });
    }

    return (
        <div id="Signup">
            <div className="sign_top_block">
                JOIN
                <img className='none' src="images/login/allow_dark.svg" alt="이전" onClick={before} />    
            </div>
            <div id="first_div">
                <div className="signup_input">
                    <input id='id' type="text" placeholder='아이디를 입력하여 주세요'/>
                    <input id='pw' type="password" placeholder='비밀번호를 입력하여 주세요 (영문, 숫자 사용 8자 이상)'/>
                    <input id='pw_re' type="password" placeholder='비밀번호를 한번 더 입력하여 주세요'/>
                    <div className='button' onClick={next}>다음으로</div>
                </div>
            </div>
            <div id="last_div" className='none'>
                <div className="signup_input">
                    <input id='name' type="text" placeholder='이름을 입력하여 주세요'/>
                    <input id='email' type="text" placeholder='이메일을 입력하여 주세요'/>
                    <input id='callnum' type="text" placeholder='전화번호를 입력하여 주세요'/>
                    <div className='button' onClick={submit}>회원가입</div>
                </div>
            </div>
            <div className="sign_under_block"></div>
        </div>
    )
}

export default signup;