import { useEffect, useState } from 'react';
import '../css/Myroom.css';

const Myroom = () => {
    const userId = localStorage.getItem('userId') !== null?localStorage.getItem('userId') : 'ID';
    const userPoint = localStorage.getItem('userPoint') !== null?localStorage.getItem('userPoint') : '0';

    const logout = () => {
        localStorage.clear();
        window.location.href='/login';
    }

    const getMyroom = async() => {
        return await fetch(`https://bdcb.cafe24app.com/logcheck`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                userId,
            })
        }).then((response) => {
            if(response.chk === 'true'){
                localStorage.setItem('userPoint', response.userInfo.point);
                let coursechk_1 = response.userInfo.course_1 === "Y"? true : false;
                let coursechk_2 = response.userInfo.course_2 === "Y"? true : false;
                let coursechk_3 = response.userInfo.course_3 === "Y"? true : false;
                let coursechk_4 = response.userInfo.course_4 === "Y"? true : false;
                let coursechk_5 = response.userInfo.course_5 === "Y"? true : false;
                let coursechk_6 = response.userInfo.course_6 === "Y"? true : false;
                let coursechk_7 = response.userInfo.course_7 === "Y"? true : false;
                let coursechk_8 = response.userInfo.course_8 === "Y"? true : false;
                let coursechk_9 = response.userInfo.course_9 === "Y"? true : false;
                let coursechk_10 = response.userInfo.course_10 === "Y"? true : false;
                let coursechk_11 = response.userInfo.course_11 === "Y"? true : false;
                let coursechk_12 = response.userInfo.course_12 === "Y"? true : false;
                let coursechk_13 = response.userInfo.course_13 === "Y"? true : false;
                let coursechk_14 = response.userInfo.course_14 === "Y"? true : false;
                let coursechk_15 = response.userInfo.course_15 === "Y"? true : false;
                let coursechk_16 = response.userInfo.course_16 === "Y"? true : false;
                let coursechk_17 = response.userInfo.course_17 === "Y"? true : false;
                let coursechk_18 = response.userInfo.course_18 === "Y"? true : false;
                let coursechk_19 = response.userInfo.course_19 === "Y"? true : false;
                return `
                [
                    {
                        roomName : '룸즈에이',
                        img : 'images/myroom/룸즈에이.png',
                        Franchise : '대구동성로점',
                        clear : ${coursechk_1}
                    },
                    {
                        roomName : '룸즈에이',
                        img : 'images/myroom/룸즈에이.png',
                        Franchise : '동성로2호점',
                        clear : ${coursechk_2}
                    },
                    {
                        roomName : '룸즈에이',
                        img : 'images/myroom/룸즈에이.png',
                        Franchise : '동성로아카데미점',
                        clear : ${coursechk_3}
                    },
                    {
                        roomName : '방탈출브이',
                        img : 'images/myroom/방탈출브이.png',
                        Franchise : '공평점',
                        clear : ${coursechk_4}
                    },
                    {
                        roomName : '방탈출브이',
                        img : 'images/myroom/방탈출브이.png',
                        Franchise : '삼덕점',
                        clear : ${coursechk_5}
                    },
                    {
                        roomName : '비밀의화원',
                        img : 'images/myroom/비밀의화원.png',
                        Franchise : '동성로점',
                        clear : ${coursechk_6}
                    },
                    {
                        roomName : '셜록홈즈',
                        img : 'images/myroom/셜록홈즈.png',
                        Franchise : '동성로점',
                        clear : ${coursechk_7}
                    },
                    {
                        roomName : '앨리스 이스케이프',
                        img : 'images/myroom/앨리스.png',
                        Franchise : '',
                        clear : ${coursechk_8}
                    },
                    {
                        roomName : '지구별방탈출',
                        img : 'images/myroom/지구별.png',
                        Franchise : '',
                        clear : ${coursechk_9}
                    },
                    {
                        roomName : '황금열쇠',
                        img : 'images/myroom/황금열쇠.png',
                        Franchise : '동성로점',
                        clear : ${coursechk_10}
                    },
                    {
                        roomName : '황금열쇠',
                        img : 'images/myroom/황금열쇠.png',
                        Franchise : '대구동성로2호점',
                        clear : ${coursechk_11}
                    },
                    {
                        roomName : '이스케이퍼스',
                        img : 'images/myroom/이스케이퍼스.png',
                        Franchise : '대구동성로점',
                        clear : ${coursechk_12}
                    },
                    {
                        roomName : '비트포비아',
                        img : 'images/myroom/비트포비아.png',
                        Franchise : '',
                        clear : ${coursechk_13}
                    },
                    {
                        roomName : '마스터키',
                        img : 'images/myroom/마스터키.png',
                        Franchise : '동성로로데오점',
                        clear : ${coursechk_14}
                    },
                    {
                        roomName : '마스터키',
                        img : 'images/myroom/마스터키.png',
                        Franchise : '동성로점',
                        clear : ${coursechk_15}
                    },
                    {
                        roomName : '서울이스케이프룸',
                        img : 'images/myroom/서울이스케이프룸.png',
                        Franchise : '대구동성로점',
                        clear :${coursechk_16}
                    },
                    {
                        roomName : '머더퍼커',
                        img : 'images/myroom/머더퍼커.png',
                        Franchise : '대구점',
                        clear : ${coursechk_17}
                    },
                    {
                        roomName : '머더퍼커',
                        img : 'images/myroom/머더퍼커.png',
                        Franchise : '대구2호점',
                        clear : ${coursechk_18}
                    },
                    {
                        roomName : '코드네임블랙',
                        img : 'images/myroom/코드네임블랙.png',
                        Franchise : '대구점',
                        clear : ${coursechk_19}
                    }
                ]`;
            } else {
                console.log(response.error);
            }
        });
    };

    const [ data, setData ] = useState[""];

    useEffect(() => {
        setData(getMyroom())
    }, []);

    const setList = () => {
        const result = [];
        for (let i = 0; i < JSON.parse(data).length; i++) {
            result.push(
            <div className='room' key={i}>
                <img src={JSON.parse(data)[i].img} alt="room" />
                <div className={JSON.parse(data)[i].clear ? 'clear' : 'none'}>
                    <img src="images/myroom/clear.svg" alt="clear" />
                </div>
                <div>{JSON.parse(data)[i].roomName}</div>
                <div>{JSON.parse(data)[i].Franchise}</div>
            </div>);
        }
        return result;
    }

    return (
        <div id="Myroom">
            <div className="sub_title">Myroom</div>
            <div className="bg"></div>
            <div className="myroom_bg">
                <div className="point_sec">
                    <div className="account">
                        <div>
                            <span id='myroom_name'>{userId}</span>
                            <span>님 반갑습니다!</span>
                        </div>
                        <span onClick={logout}>로그아웃</span>
                    </div>
                    <div className="point">
                        <div className="barcode">
                            <img src="images/myroom/barcode.svg" alt="barcode" />
                            <span>내 포인트 &gt;</span>
                        </div>
                        <div className="point_set">
                            <span>{userPoint}</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="room_list">{setList()}</div>
        </div>
    )
}

export default Myroom;