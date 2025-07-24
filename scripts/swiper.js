const top1 = new Swiper ('#top1',{
    loop:true,
    navigation:{
        nextEl:'#top1 .swiper-button-next',
        prevEl:'#top1 .swiper-button-prev',
    },
})
console.log('Next 버튼:', document.querySelector('#top1 .swiper-button-prev'));

const media = new Swiper ('#media',{
    loop:true,
    slidesPerView : 4,
    navigation:{
        nextEl:'#media ~ .swiper-button-next',
        prevEl:'#media ~ .swiper-button-prev',
    },
})

console.log('Next 버튼:', document.querySelector('#top1 .swiper-button-prev'));