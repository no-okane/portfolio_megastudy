const top1 = new Swiper ('#top1',{
    loop:true,
    navigation:{
        nextEl:'#top1 .swiper-button-next',
        prevEl:'#top1 .swiper-button-prev',
    },
})
console.log('Next 버튼:', document.querySelector('#top1 .swiper-button-prev'));

/* const media = new Swiper('#media', {
    loop: true,
    slidesPerView: 4,  // 기본값
    navigation: {
        nextEl: '#media ~ .swiper-button-next',
        prevEl: '#media ~ .swiper-button-prev',
    },
    breakpoints: {
        430: {
            slidesPerView: 1,  // 430px 이하에서 1개씩 표시
        }
    }
}); */
// 화면 크기에 따라 slidesPerView를 동적으로 설정
const setSlidesPerView = () => {
    return window.innerWidth <= 430 ? 1 : 4;  // 430px 이하일 때는 1개 슬라이드, 그 이상일 때는 4개 슬라이드
};

const media = new Swiper('#media', {
    loop: true,
    slidesPerView: setSlidesPerView(),  // 초기값 설정
    navigation: {
        nextEl: '#media ~ .swiper-button-next',
        prevEl: '#media ~ .swiper-button-prev',
    },
    on: {
        init: function () {
            this.update();  // 초기화 후 업데이트
        },
        resize: function () {
            // 화면 크기 변경 시 slidesPerView 값 업데이트
            this.params.slidesPerView = setSlidesPerView();
            this.update();
        }
    }
});

// 화면 크기 변경 시 업데이트
window.addEventListener('resize', () => {
    media.params.slidesPerView = setSlidesPerView();  // 슬라이드 개수 재설정
    media.update();  // Swiper 업데이트
});



const edu = new Swiper ('#edu',{
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:'#edu .swiper-button-next',
        prevEl:'#edu .swiper-button-prev',
    },
    scrollbar:{
        el:'#edu ~ .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#edu ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})