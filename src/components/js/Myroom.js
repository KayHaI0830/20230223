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
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '??????????????????',
                        clear : ${coursechk_1}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '?????????2??????',
                        clear : ${coursechk_2}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '????????????????????????',
                        clear : ${coursechk_3}
                    },
                    {
                        roomName : '???????????????',
                        img : 'images/myroom/???????????????.png',
                        Franchise : '?????????',
                        clear : ${coursechk_4}
                    },
                    {
                        roomName : '???????????????',
                        img : 'images/myroom/???????????????.png',
                        Franchise : '?????????',
                        clear : ${coursechk_5}
                    },
                    {
                        roomName : '???????????????',
                        img : 'images/myroom/???????????????.png',
                        Franchise : '????????????',
                        clear : ${coursechk_6}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '????????????',
                        clear : ${coursechk_7}
                    },
                    {
                        roomName : '????????? ???????????????',
                        img : 'images/myroom/?????????.png',
                        Franchise : '',
                        clear : ${coursechk_8}
                    },
                    {
                        roomName : '??????????????????',
                        img : 'images/myroom/?????????.png',
                        Franchise : '',
                        clear : ${coursechk_9}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '????????????',
                        clear : ${coursechk_10}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '???????????????2??????',
                        clear : ${coursechk_11}
                    },
                    {
                        roomName : '??????????????????',
                        img : 'images/myroom/??????????????????.png',
                        Franchise : '??????????????????',
                        clear : ${coursechk_12}
                    },
                    {
                        roomName : '???????????????',
                        img : 'images/myroom/???????????????.png',
                        Franchise : '',
                        clear : ${coursechk_13}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '?????????????????????',
                        clear : ${coursechk_14}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '????????????',
                        clear : ${coursechk_15}
                    },
                    {
                        roomName : '????????????????????????',
                        img : 'images/myroom/????????????????????????.png',
                        Franchise : '??????????????????',
                        clear :${coursechk_16}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '?????????',
                        clear : ${coursechk_17}
                    },
                    {
                        roomName : '????????????',
                        img : 'images/myroom/????????????.png',
                        Franchise : '??????2??????',
                        clear : ${coursechk_18}
                    },
                    {
                        roomName : '??????????????????',
                        img : 'images/myroom/??????????????????.png',
                        Franchise : '?????????',
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
                            <span>??? ???????????????!</span>
                        </div>
                        <span onClick={logout}>????????????</span>
                    </div>
                    <div className="point">
                        <div className="barcode">
                            <img src="images/myroom/barcode.svg" alt="barcode" />
                            <span>??? ????????? &gt;</span>
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