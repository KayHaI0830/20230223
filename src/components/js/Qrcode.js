import { NavLink, useSearchParams } from 'react-router-dom';
import '../css/Qrcode.css';

const Qrcode = () => {
    const close = () => {
        const pointAcmlt = document.querySelector('.pointAcmlt');
        pointAcmlt.classList.add('none');
    }

    const [searchParams] = useSearchParams();
    const clearCheck = searchParams.get('clear');
    
    const phoneTypeCheck = () => {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) return 'ios';
        else if (/Android/i.test(navigator.userAgent)) return 'android';
        else return 'pc';
    };

    const androidClick = () => {
        if(phoneType !== "pc") {
            window.HybridApp.QR_Btn();
        }
    }

    document.querySelector("body").addEventListener("load", () => {
        document.querySelector(".camera").innerHTML = androidClick();
    });

    const phoneType = phoneTypeCheck();
    
    return (
        <div id='Qrcode'>
            <div className="sub_title">QRcode</div>
            <div className="camera"></div>
            <div className="qrcode_text">
                <p>QR코드를 스캔하거나 QR이미지를 업로드 해보세요.</p>
                <p>인증 완료 시, 하나의 지점 당 500포인트가 쌓여요!</p>
            </div>
            <div className={clearCheck ? "pointAcmlt" : "pointAcmlt none"}>
                <div className={clearCheck === "Y" ? "true" : "true none"}>
                    <img className='close' src="images/qrcode/close_white.svg" alt="close" onClick={close} />
                    <img className='logo' src="images/qrcode/logo.svg" alt="logo"/>
                    <div className='accum'>
                        <span>500포인트 </span>
                        <span>적립!</span>
                    </div>
                    <div className='mis_comp'>
                        <img src="images/qrcode/money.svg" alt="money" />
                        <div className="text">
                            <span>roomName Franchise</span><span>에서</span>
                            <span> QR미션을 성공하셨습니다.</span>
                        </div>
                    </div>
                    <div>포인트는 1000단위로 사용가능합니다.</div>
                    <NavLink to='/myroom'>Myroom 바로가기</NavLink>
                </div>
                <div className={clearCheck === "N" ? "false" : "false none"}>
                    <img className='close' src="images/qrcode/close_white.svg" alt="close" onClick={close} />
                    <div>
                        <span>이미</span>
                        <span> 방문한 </span>
                        <span>지점입니다!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qrcode;