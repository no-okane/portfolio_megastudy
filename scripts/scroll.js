// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 첫 번째 애니메이션: #wrap main .row2 .container .top .left와 #wrap main .row2 .container .top .right img 동시에 애니메이션 진행
gsap.fromTo(
  "#wrap main .row2 .container .top .left", 
  {
    y: 150, // 초기 위치 (아래에서 위로)
    opacity: 0, // 초기 상태 (투명)
  },
  {
    y: 0, // 최종 위치 (원래 위치로 이동)
    opacity: 1, // 최종 상태 (불투명)
    scrollTrigger: {
      trigger: "#wrap main .row2 .container .top", // 트리거 요소
      start: "top 80%", // 시작 위치
      end: "top 30%", // 종료 위치
      scrub: 0.5, // 스크롤에 따라 애니메이션 진행
    }
  }
);

gsap.fromTo(
  "#wrap main .row2 .container .top .right img", 
  {
    scale: 1, // 초기 크기
  },
  {
    scale: 1.2, // 최종 크기
    scrollTrigger: {
      trigger: "#wrap main .row2 .container .top", // 트리거 요소
      start: "top 80%", // 시작 위치
      end: "top 30%", // 종료 위치
      scrub: 0.5, // 스크롤에 따라 애니메이션 진행
    }
  }
);

// 두 번째 애니메이션: #wrap main .row2 .container .bottom .left img와 #wrap main .row2 .container .bottom .right 동시에 애니메이션 진행
gsap.fromTo(
  "#wrap main .row2 .container .bottom .left img", 
  {
    scale: 1, // 초기 크기
  },
  {
    scale: 1.2, // 최종 크기
    scrollTrigger: {
      trigger: "#wrap main .row2 .container .bottom", // 트리거 요소
      start: "top 80%", // 시작 위치
      end: "top 30%", // 종료 위치
      scrub: 0.5, // 스크롤에 따라 애니메이션 진행
    }
  }
);

gsap.fromTo(
  "#wrap main .row2 .container .bottom .right", 
  {
    y: 150, // 초기 위치 (아래에서 위로)
    opacity: 0, // 초기 상태 (투명)
  },
  {
    y: 0, // 최종 위치 (원래 위치로 이동)
    opacity: 1, // 최종 상태 (불투명)
    scrollTrigger: {
      trigger: "#wrap main .row2 .container .bottom", // 트리거 요소
      start: "top 80%", // 시작 위치
      end: "top 30%", // 종료 위치
      scrub: 0.5, // 스크롤에 따라 애니메이션 진행
    }
  }
);


// .row3 애니메이션
gsap.fromTo(
    "#wrap main .row3 .container h1 p", 
    {
      y: 150, // 초기 위치 (아래에서 위로)
      opacity: 0, // 초기 상태 (투명)
    },
    {
      y: 0, // 최종 위치 (원래 위치로 이동)
      opacity: 1, // 최종 상태 (불투명)
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row3", // 트리거 요소
        start: "top 80%", // 스크롤 시작 시점
        end: "top 30%", // 스크롤 끝 시점
        scrub: 0.5, // 스크롤에 맞춰 애니메이션 진행
      }
    }
  );


// .row4 전체 애니메이션
gsap.fromTo(
    "#wrap main .row4", 
    {
      y: 150, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 상태: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row4", // .row4 요소가 트리거 역할
        start: "top 80%", // 스크롤 위치 80% 지점에서 시작
        end: "top 30%", // 스크롤 위치 30% 지점에서 끝
        scrub: 0.5, // 스크롤에 맞춰 애니메이션 진행
      }
    }
  );

// .row5 애니메이션
gsap.fromTo(
    "#wrap main .row5 .container > p", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row5", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: true, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  gsap.fromTo(
    "#wrap main .row5 .container > h1", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row5", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  // .row5 .container .contents 애니메이션
  gsap.fromTo(
    "#wrap main .row5 .container .contents", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row5 .contents", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );



// .row6 애니메이션
gsap.fromTo(
    "#wrap main .row6 .container > p", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row6", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: true, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  gsap.fromTo(
    "#wrap main .row6 .container > h1", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row6", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  // .row5 .container .contents 애니메이션
  gsap.fromTo(
    "#wrap main .row6 .container .contents", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row6 .contents", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );



// .row7 애니메이션
gsap.fromTo(
    "#wrap main .row7 .container > p", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row7", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: true, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  gsap.fromTo(
    "#wrap main .row7 .container > h1", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row7", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );
  
  // .row7 .container .contents 애니메이션
  gsap.fromTo(
    "#wrap main .row7 .container .row7_wrap", 
    {
      y: 50, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 위치: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row7 .row7_wrap", // .row5 요소가 트리거 역할
        start: "top 80%", // 스크롤이 .row5가 80% 위치에 도달하면 시작
        end: "top 30%", // 끝나는 위치
        scrub: 0.5, // 스크롤에 따라 애니메이션 진행
      }
    }
  );



// .row8 전체 애니메이션
gsap.fromTo(
    "#wrap main .row8", 
    {
      y: 150, // 아래에서 위로 떠오르도록 설정
      opacity: 0, // 초기 상태: 투명
    },
    {
      y: 0, // 최종 상태: 원래 위치로 이동
      opacity: 1, // 최종 상태: 불투명
      duration: 1.5, // 애니메이션 지속 시간
      scrollTrigger: {
        trigger: "#wrap main .row8", // .row4 요소가 트리거 역할
        start: "top 80%", // 스크롤 위치 80% 지점에서 시작
        end: "top 30%", // 스크롤 위치 30% 지점에서 끝
        scrub: 0.5, // 스크롤에 맞춰 애니메이션 진행
      }
    }
  );