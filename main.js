var wrapper      = document.querySelector('.wrapper'),      // 전체 페이지를 감싸는 틀
    page         = document.querySelectorAll('.page'),      // 각 페이지 요소
    indicator    = document.getElementById('indicator'),    // 인디케이터를 담는 틀
    indicator_li = indicator.querySelectorAll('li');        // 인디케이터 목록

var yDeg             = 0,                                   // 각도
    indicator_num    = 1,                                   // 현재 페이지 번호
    indicator_length = page.length,                         // 인디케이터 개수
    w                = page[0].offsetWidth,                 // 현재 페이지 폭
    page_angle       = 0;                                   // 각 페이지 4면체의 배치를 위한 각도를 정의


function init_page(){
    w = page[0].offsetWidth;

    // 3D page 4면체 위치 정의
    for(var i = 0 ; i < page.length; i++){
        page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ('+ (w/2) + 'px)';
        page_angle += 90;
    }

    // page wrapper 정면으로 초기화
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotaateY(' + yDeg + 'deg)';
}

init_page();