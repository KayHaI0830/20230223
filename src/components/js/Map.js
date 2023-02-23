import '../css/Map.css';
/* global kakao */
import { useEffect } from 'react';

const Map = () => {
    const logid = localStorage.getItem('userId');
    const getCourseData = async() => {
        return await fetch(`https://bdcb.cafe24app.com/logcheck`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                logid,
            })
        }).then((response) => {
            if(response.chk === 'true'){
                let coursechk_1 = response.userInfo.course_1 === "Y"? "Y" : "N";
                let coursechk_2 = response.userInfo.course_2 === "Y"? "Y" : "N";
                let coursechk_3 = response.userInfo.course_3 === "Y"? "Y" : "N";
                let coursechk_4 = response.userInfo.course_4 === "Y"? "Y" : "N";
                let coursechk_5 = response.userInfo.course_5 === "Y"? "Y" : "N";
                let coursechk_6 = response.userInfo.course_6 === "Y"? "Y" : "N";
                let coursechk_7 = response.userInfo.course_7 === "Y"? "Y" : "N";
                let coursechk_8 = response.userInfo.course_8 === "Y"? "Y" : "N";
                let coursechk_9 = response.userInfo.course_9 === "Y"? "Y" : "N";
                let coursechk_10 = response.userInfo.course_10 === "Y"? "Y" : "N";
                let coursechk_11 = response.userInfo.course_11 === "Y"? "Y" : "N";
                let coursechk_12 = response.userInfo.course_12 === "Y"? "Y" : "N";
                let coursechk_13 = response.userInfo.course_13 === "Y"? "Y" : "N";
                let coursechk_14 = response.userInfo.course_14 === "Y"? "Y" : "N";
                let coursechk_15 = response.userInfo.course_15 === "Y"? "Y" : "N";
                let coursechk_16 = response.userInfo.course_16 === "Y"? "Y" : "N";
                let coursechk_17 = response.userInfo.course_17 === "Y"? "Y" : "N";
                let coursechk_18 = response.userInfo.course_18 === "Y"? "Y" : "N";
                let coursechk_19 = response.userInfo.course_19 === "Y"? "Y" : "N";
                let wishchk_1 = response.userInfo.wish_1 === "Y"? "Y" : "N";
                let wishchk_2 = response.userInfo.wish_2 === "Y"? "Y" : "N";
                let wishchk_3 = response.userInfo.wish_3 === "Y"? "Y" : "N";
                let wishchk_4 = response.userInfo.wish_4 === "Y"? "Y" : "N";
                let wishchk_5 = response.userInfo.wish_5 === "Y"? "Y" : "N";
                let wishchk_6 = response.userInfo.wish_6 === "Y"? "Y" : "N";
                let wishchk_7 = response.userInfo.wish_7 === "Y"? "Y" : "N";
                let wishchk_8 = response.userInfo.wish_8 === "Y"? "Y" : "N";
                let wishchk_9 = response.userInfo.wish_9 === "Y"? "Y" : "N";
                let wishchk_10 = response.userInfo.wish_10 === "Y"? "Y" : "N";
                let wishchk_11 = response.userInfo.wish_11 === "Y"? "Y" : "N";
                let wishchk_12 = response.userInfo.wish_12 === "Y"? "Y" : "N";
                let wishchk_13 = response.userInfo.wish_13 === "Y"? "Y" : "N";
                let wishchk_14 = response.userInfo.wish_14 === "Y"? "Y" : "N";
                let wishchk_15 = response.userInfo.wish_15 === "Y"? "Y" : "N";
                let wishchk_16 = response.userInfo.wish_16 === "Y"? "Y" : "N";
                let wishchk_17 = response.userInfo.wish_17 === "Y"? "Y" : "N";
                let wishchk_18 = response.userInfo.wish_18 === "Y"? "Y" : "N";
                let wishchk_19 = response.userInfo.wish_19 === "Y"? "Y" : "N";
                return `
                [
                    {
                        title: '방탈출브이 삼덕점', 
                        latlng: new kakao.maps.LatLng(35.86736347236378, 128.59724416218504),
                        address: "대구 중구 동성로5길 50<br/>3층 방탈출브이",
                        site: "http://www.v-escape.co.kr",
                        wish: ${wishchk_1},
                        clear: ${coursechk_1},
                        course_num: "1"
                    },
                    {
                        title: '방탈출브이 공평점', 
                        latlng: new kakao.maps.LatLng(35.86830666694336, 128.598238271193),
                        address: "대구 중구 동성로3길 68<br/>상용빌딩 3층",
                        site: "http://www.v-escape.co.kr",
                        wish: ${wishchk_2},
                        clear: ${coursechk_2},
                        course_num: "2"
                    },
                    {
                        title: '룸즈에이 대구동성로점', 
                        latlng: new kakao.maps.LatLng(35.86889232419407, 128.59619279716802),
                        address: "대구 중구 동성로6길 16<br/>4층",
                        site: "http://roomsa.co.kr/new_main.asp?R_JIJEM=S10",
                        wish: ${wishchk_3},
                        clear: ${coursechk_3},
                        course_num: "3"
                    },
                    {
                        title: '룸즈에이 동성로2호점', 
                        latlng: new kakao.maps.LatLng(35.867950, 128.597590),
                        address: "대구 중구 동성로2길 50-18<br/>4층",
                        site: "http://roomsa.co.kr/new_main.asp?R_JIJEM=S15",
                        wish: ${wishchk_4},
                        clear: ${coursechk_4},
                        course_num: "4"
                    },
                    {
                        title: '룸즈에이 동성로아카데미점', 
                        latlng: new kakao.maps.LatLng(35.869920, 128.595050),
                        address: "대구 중구 중앙대로 412-21<br/>3층",
                        site: "http://roomsa.co.kr/new_main.asp?R_JIJEM=S17",
                        wish: ${wishchk_5},
                        clear: ${coursechk_5},
                        course_num: "5"
                    },
                    {
                        title: '비밀의화원 동성로점', 
                        latlng: new kakao.maps.LatLng(35.86758889746517, 128.59769485856276),
                        address: "대구 중구 동성로5길 55<br/>4층",
                        site: "http://www.secretgardenescape.com",
                        wish: ${wishchk_6},
                        clear: ${coursechk_6},
                        course_num: "6"
                    },
                    {
                        title: '셜록홈즈 동성로점', 
                        latlng: new kakao.maps.LatLng(35.86770040252499, 128.5970941850367),
                        address: "대구 중구 동성로5길 45<br/>3층",
                        site: "https://sherlock-holmes.co.kr",
                        wish: ${wishchk_7},
                        clear: ${coursechk_7},
                        course_num: "7"
                    },
                    {
                        title: '앨리스 이스케이프',
                        latlng: new kakao.maps.LatLng(35.868797385047806, 128.59563619961065),
                        address: "대구 중구 동성로6길 2-5<br/>3층",
                        site: "http://www.alice-escape.com",
                        wish: ${wishchk_8},
                        clear: ${coursechk_8},
                        course_num: "8"
                    },
                    {
                        title: '지구별방탈출', 
                        latlng: new kakao.maps.LatLng(35.86837820227644, 128.59464788537272),
                        address: "대구 중구 동성로 15-1<br/>3층, 4층, 5층",
                        site: "https://xn--2e0b040a4xj.com",
                        wish: ${wishchk_9},
                        clear: ${coursechk_9},
                        course_num: "9"
                    },
                    {
                        title: '황금열쇠 동성로점', 
                        latlng: new kakao.maps.LatLng(35.86642666215637, 128.59693389195613),
                        address: "대구 중구 동성로2길 18-12",
                        site: "http://xn--jj0b998aq3cptw.com/layout/res/home.php?go=rev.make&s_zizum=1",
                        wish: ${wishchk_10},
                        clear: ${coursechk_10},
                        course_num: "10"
                    },
                    {
                        title: '황금열쇠 대구동성로2호점',
                        latlng: new kakao.maps.LatLng(35.868572407098746, 128.59726107980532),
                        address: "대구 중구 동성로6길 36<br/>4층",
                        site: "http://xn--jj0b998aq3cptw.com/layout/res/home.php?go=rev.make&s_zizum=11",
                        wish: ${wishchk_11},
                        clear: ${coursechk_11},
                        course_num: "11"
                    },
                    {
                        title: '이스케이퍼스', 
                        latlng: new kakao.maps.LatLng(35.868850, 128.596630),
                        address: "대구시 중구 동성로6길 22<br/>4층",
                        site: "https://escapersd.com/theme/9",
                        wish: ${wishchk_12},
                        clear: ${coursechk_12},
                        course_num: "12"
                    },
                    {
                        title: '비트포비아', 
                        latlng: new kakao.maps.LatLng(35.8688652068134, 128.59736862124132),
                        address: "대구 중구 동성로6길 33<br/>3층 비트포비아",
                        site: "https://www.xphobia.net/shop/index.php?category=&branch=Phobia%20%EB%8F%99%EC%84%B1%EB%A1%9C",
                        wish: ${wishchk_13},
                        clear: ${coursechk_13},
                        course_num: "13"
                    },
                    {
                        title: '마스터키 동성로로데오점', 
                        latlng: new kakao.maps.LatLng(35.86772700788511, 128.59696542619287),
                        address: "대구 중구 동성로5길 43<br/>3층 마스터키",
                        site: "http://www.master-key.co.kr/booking/bk_detail?bid=14",
                        wish: ${wishchk_14},
                        clear: ${coursechk_14},
                        course_num: "14"
                    },
                    {
                        title: '마스터키 동성로점', 
                        latlng: new kakao.maps.LatLng(35.86723729424568, 128.59786643569788),
                        address: "대구 중구 동성로5길 62<br/>4층",
                        site: "http://www.master-key.co.kr/booking/bk_detail?bid=9",
                        wish: ${wishchk_15},
                        clear: ${coursechk_15},
                        course_num: "15"
                    },
                    {
                        title: '서울이스케이프룸 대구동성로점', 
                        latlng: new kakao.maps.LatLng(35.868510, 128.598210),
                        address: "대구 중구 동성로6길 52<br/>3층, 4층",
                        site: "https://www.seoul-escape.com/reservation?branch=4",
                        wish: ${wishchk_16},
                        clear: ${coursechk_16},
                        course_num: "16"
                    },
                    {
                        title: '머더퍼커 대구점', 
                        latlng: new kakao.maps.LatLng(35.86583903690903, 128.59709510442744),
                        address: "대구 중구 동성로3길 7<br/>3층",
                        site: "http://murderparker.com",
                        wish: ${wishchk_17},
                        clear: ${coursechk_17},
                        course_num: "17"
                    },
                    {
                        title: '머더퍼커 대구2호점', 
                        latlng: new kakao.maps.LatLng(35.86577236456264, 128.5974605768537),
                        address: "대구 중구 동성로3길 8<br/>3층",
                        site: "http://murderparker.com",
                        wish: ${wishchk_18},
                        clear: ${coursechk_18},
                        course_num: "18"
                    },
                    { 
                        title: '코드네임블랙 대구점',
                        latlng: new kakao.maps.LatLng(35.869412750941734, 128.59512029353863),
                        address: "대구 중구 동성로 25<br/>지하2층",
                        site: "http://www.codenameblack-dg.co.kr",
                        wish: ${wishchk_19},
                        clear: ${coursechk_19},
                        course_num: "19"
                    }
                ]`;
            } else {
                console.log(response.error);
            }
        })
    }

    useEffect(() => {
        function getDistance(latlng, escDistance) {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;
                
                var myPosition = new kakao.maps.LatLng(lat, lon);
                
                myMarker.setPosition(myPosition);

                var newpath = [
                    myPosition,
                    latlng
                ];

                roomDistance.setPath(newpath);

                Math.round(roomDistance.getLength()) < 1000 ? escDistance.innerHTML = `${Math.round(roomDistance.getLength())}m` : escDistance.innerHTML = `${Math.round(roomDistance.getLength() / 100) / 10}km`;
            });
        }

        function setOverlay(overlay, map) {
            return function() {
                if(tempOverlay !== "" && tempOverlay !== overlay) tempOverlay.setMap("");
                overlay.setMap(map);
                map.setLevel(2);
                map.panTo(overlay.getPosition()); // 부드럽게 좌표 이동
                tempOverlay = overlay;
            }
        }

        function closeOverlay(overlay) {
            return function() {
                overlay.setMap("");
                tempOverlay = "";
            }
        }

        const wishup = async(wshnum, wshchk) => {
            return await fetch(`https://bdcb.cafe24app.com/logcheck`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                    wshnum,
                    wshchk,
                })
            }).then((response) => {
                if(response.logchk === 'true'){
                    localStorage.setItem('userId', response.userInfo.id);
                    window.location.href='/map';
                } else {
                    console.log(response.error);
                }
            });
        };

        function clickHeart(popupMark, marker, position) {
            const wishnum = 'wish_' + position.course_num;
            return function() {
                if(position.wish === "Y") {
                    wishup(wishnum, position.wish);
                    position.wish = "N";
                    popupMark.src = "images/map/popup/heart_empty.svg";
                    popupMark.alt = "empty";
                    if(position.clear !== "Y") marker.setImage(markerImage);
                }
                else {
                    wishup(wishnum, position.wish);
                    position.wish = "Y";
                    popupMark.src = "images/map/popup/heart_full.svg";
                    popupMark.alt = "full";
                    if(position.clear !== "Y") marker.setImage(markerSelect);
                }
            }
        }

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new kakao.maps.LatLng(35.86807833909106, 128.5964410990585), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        
        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions = JSON.parse(getCourseData());

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "images/map/marker/star_mark.svg";
        var selectSrc = "images/map/marker/heart_mark.svg";
        var finishSrc = "images/map/marker/finish_mark.svg";
        var mySrc = "images/map/marker/gps.svg";

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);
        var mySize = new kakao.maps.Size(80, 80);
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        var markerSelect = new kakao.maps.MarkerImage(selectSrc, imageSize); 
        var markerFinish = new kakao.maps.MarkerImage(finishSrc, imageSize); 
        var myImage = new kakao.maps.MarkerImage(mySrc, mySize);

        // 현재 위치 마커 생성
        var myMarker = new kakao.maps.Marker({
            map: map,
            image: myImage
        });
        
        var tempOverlay = "";
        
        var markerMove = document.createElement('img');
        markerMove.className = "map_move";
        markerMove.src = "images/map/marker/now.svg";
        markerMove.alt = "me";
        
        if(window.location.href.includes('/map')) markerMove.classList.remove("none");
        else if(markerMove.classList.contains("none")) markerMove.classList.add("none");
    
        markerMove.addEventListener("click", () => {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;
                    
                var myPosition = new kakao.maps.LatLng(lat, lon);
                
                map.setLevel(2);
                map.panTo(myPosition); // 부드럽게 좌표 이동
            })
        });

        document.querySelector("body").append(markerMove);



        for (var i = 0; i < positions.length; i ++) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다  
            });
            
            // 마커 이미지
            if(positions[i].clear === "Y") marker.setImage(markerFinish);
            else if(positions[i].wish === "Y") marker.setImage(markerSelect);
            else marker.setImage(markerImage);

            // 마커 위에 커스텀오버레이를 표시합니다
            // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
            var overlay = new kakao.maps.CustomOverlay({
                map: map,
                position: marker.getPosition()       
            });


            var roomDistance = new kakao.maps.Polyline();

            // 커스텀 오버레이에 표시할 컨텐츠
            var content = document.createElement('div');
            content.className = "popup_wrap";
            
            var popupTop = document.createElement('div');
            popupTop.className = "popup_top";
            var popupCenter = document.createElement('div');
            popupCenter.className = "popup_center";
            var popupBottom = document.createElement('div');
            popupBottom.className = "popup_bottom";

            var escName = document.createElement('div');
            escName.className = "escape_name";
            escName.innerHTML = `${positions[i].title}`;
            var popupClose = document.createElement('img');
            popupClose.className = "popup_close";
            popupClose.src = "images/map/popup/close_black.svg";
            popupClose.alt = "close";
            popupClose.addEventListener("click", closeOverlay(overlay));
            
            var escAddress = document.createElement('div');
            escAddress.className = "escape_address";
            escAddress.innerHTML = `${positions[i].address}`;
            var escDistance = document.createElement('div');
            escDistance.className = "escape_distance";
            getDistance(positions[i].latlng, escDistance);

            var popupMark = document.createElement('img');
            popupMark.className = "popup_mark";
            if(positions[i].wish === "Y") {
                popupMark.src = "images/map/popup/heart_full.svg";
                popupMark.alt = "full";
            }
            else {
                popupMark.src = "images/map/popup/heart_empty.svg";
                popupMark.alt = "empty";
            }
            popupMark.addEventListener("click", clickHeart(popupMark, marker, positions[i]));
            
            popupBottom.innerHTML = `<a href=${positions[i].site}>홈페이지바로가기<img src="images/map/popup/allow_white.svg" alt="allow"/></a>`;

            popupTop.append(escName, popupClose);
            popupCenter.append(escAddress, escDistance, popupMark);
            content.append(popupTop, popupCenter, popupBottom);

            overlay.setContent(content);

            // 마커 클릭 시 오버레이 표시
            kakao.maps.event.addListener(marker, 'click', setOverlay(overlay, map));

            document.querySelector("body").addEventListener("click", closeOverlay(overlay));

            overlay.setMap(null);     
        }
    }, []);

    return (
        <div id='map'></div>
    )
}

export default Map;