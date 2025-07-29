window.addEventListener("load", function() {
    const header = document.querySelector('#wrap header');
    const logoImg = document.querySelector('#wrap header .menu .logo a img');
    const navLinks = document.querySelectorAll('#wrap header .menu nav a');
    const rightMenuImgs = document.querySelectorAll('#wrap header .menu .right_menu a img');
    const menuImg = document.querySelector('#wrap header .menu .menuimg a img');

    // 초기 설정: 헤더 고정
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.zIndex = '50';
    header.style.width = '100%';
    header.style.height = '90px'; // 기본 헤더 높이

    // 반응형 체크: 430px 이하일 때
    function checkResponsive() {
        if (window.innerWidth <= 430) {
            // 헤더 높이를 40px로 변경
            header.style.height = '40px';
            
            // 반응형 상태에서는 menuImg 색상 초기화 (스크롤에 관계없이 초기 상태)
            if (menuImg) {
                menuImg.style.filter = 'invert(0)';
            }
        } else {
            // 기본 헤더 높이로 복원
            header.style.height = '90px';
        }
    }

    // 초기 반응형 체크
    checkResponsive();

    // 윈도우 크기 변경 시 반응형 체크
    window.addEventListener('resize', checkResponsive);

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        if (window.scrollY > 90) {
            // 90px 이상 스크롤 시 헤더 스타일 변경
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

            // nav 링크 색상 변경
            navLinks.forEach(link => {
                link.style.color = '#000';
            });

            // logo 이미지 색상 반전
            logoImg.style.filter = 'invert(1)';

            // 오른쪽 메뉴 이미지 색상 반전
            rightMenuImgs.forEach(img => {
                img.style.filter = 'invert(1)';
            });

            // 스크롤 후에는 menuImg 아이콘 색상 반전
            if (menuImg) {
                menuImg.style.filter = 'invert(1)';
            }
        } else {
            // 스크롤이 90px 이하일 경우 원래 스타일 복원
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';

            // nav 링크 색상 복원
            navLinks.forEach(link => {
                link.style.color = '#fff';
            });

            // logo 이미지 색상 복원
            logoImg.style.filter = 'invert(0)';

            // 오른쪽 메뉴 이미지 색상 복원
            rightMenuImgs.forEach(img => {
                img.style.filter = 'invert(0)';
            });

            // 스크롤을 내리기 전에는 menuImg 색상 초기화 상태 유지 (반응형 상태)
            if (window.innerWidth <= 430) {
                if (menuImg) {
                    menuImg.style.filter = 'invert(0)';
                }
            }
        }
    });
});
