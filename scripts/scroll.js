// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 배경 확대/축소 애니메이션 (즉시 시작)
gsap.to("#wrap main .row2 .container .top .right, #wrap main .row2 .container .bottom .left", {
    scrollTrigger: {
        trigger: "#wrap main .row2",
        start: "top center", // 특정 위치에서 애니메이션 시작 (스크롤이 top에 닿을 때)
        end: "bottom top",   // 끝 위치
        scrub: false,        // 서서히 변하지 않음 (즉시 실행)
        markers: false,      // 디버깅용 마커 (false로 설정하면 보이지 않음)
    },
    backgroundSize: "110%", // 배경을 110%로 확대
    duration: 2,
    ease: "power1.out"
});

// 텍스트 애니메이션 (아래에서 위로 떠오르며 opacity 0에서 100으로 변하는 애니메이션)
gsap.from("#wrap main .row2 .container .top .left p, #wrap main .row2 .container .top .left h1, #wrap main .row2 .container .bottom .right p, #wrap main .row2 .container .bottom .right h1", {
    scrollTrigger: {
        trigger: "#wrap main .row2",
        start: "top center", // 특정 위치에서 애니메이션 시작 (스크롤이 top에 닿을 때)
        end: "bottom top",   // 끝 위치
        scrub: false,        // 서서히 변하지 않음 (즉시 실행)
        markers: false,      // 디버깅용 마커 (false로 설정하면 보이지 않음)
    },
    opacity: 0,            // 초기 상태는 투명
    y: 50,                 // 아래에서 시작
    duration: 1.5,
    stagger: 0.2,          // 여러 요소가 있을 경우 순차적으로 나타나게
    ease: "power1.out"
});
