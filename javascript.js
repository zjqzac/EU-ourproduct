// Swiper滑动块初始化
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
});

// Clappr视频播放插件初始化
// pop up中第五个视频
var player = new Clappr.Player({
  source: "./video/DeveloperMobile.gif", 
  parentId: "#player5",
  width:"100%",
  height:"250px"
});

// pop up中第二个视频
var player2 = new Clappr.Player({
  source: "./video/video2.mp4", 
  parentId: "#player2",
  width:"684px",
  height:"437.76px",
  mediacontrol:{seekbar:"#16697A"}
});


