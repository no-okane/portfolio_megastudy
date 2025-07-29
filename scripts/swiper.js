const top1 = new Swiper ('#top1',{
    loop:true,
    navigation:{
        nextEl:'#top1 .swiper-button-next',
        prevEl:'#top1 .swiper-button-prev',
    },
})
console.log('Next 버튼:', document.querySelector('#top1 .swiper-button-prev'));

const media = new Swiper('#media', {
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
});

console.log('Next 버튼:', document.querySelector('#top1 .swiper-button-prev'));


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