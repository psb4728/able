// window.addEventListener("load", function(event) {
//   const loadPage = this.document.querySelector('.lode_page');
//   setTimeout(() => {
//     loadPage.classList.add('hide');
//   }, 1000);
// });

// 메인 타이틀 텍스트 스크롤링
setInterval(function () {
  const show = document.querySelector('span[data-show]')
  const next = show.nextElementSibling || document.querySelector('span:first-child')
  const up = document.querySelector('span[data-up]')
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 2500)


// 공지사항 리스트
const accItem = document.getElementsByClassName('notice_list');
const accHD = document.getElementsByClassName('list_tit');
for (let i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  const itemClass = this.parentNode.className;
  for (let i = 0; i < accItem.length; i++) {
    accItem[i].className = 'notice_list close';
  }
  if (itemClass == 'notice_list close') {
      this.parentNode.className = 'notice_list open';
  }
}


// 카카오 지도
var mapContainer = document.getElementById('map'), 
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 3 
  };  
  
var map = new kakao.maps.Map(mapContainer, mapOption); 
var geocoder = new kakao.maps.services.Geocoder();

geocoder.addressSearch('송도 갯벌로 129', function(result, status) {
  if (status === kakao.maps.services.Status.OK) {

    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    var marker = new kakao.maps.Marker({
      map: map,
      position: coords
    });

    map.setCenter(coords);
  } 
}); 
