import '../css/SplashScreen.css';

const splashScreen = () => {
    setTimeout(() => {
        window.location.href='/login';
    }, 2000)

    return (
        <div id="splashScreen">
            <img src="images/login/logo.svg" alt="logo" />
        </div>
    )
}

export default splashScreen;