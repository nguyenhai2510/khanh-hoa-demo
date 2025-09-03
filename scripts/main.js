const mySlider = new Slidezy("#hero-slider", {
    items: 1,
    loop: true,
    autoplay: true,
});

// Xử lý video autoplay cho slider
const video = document.querySelector('.hero__video');
if (video) {
    mySlider._stopAutoplay();

    video.addEventListener('ended', function () {
        mySlider._startAutoplay();
    });

    video.addEventListener('play', function () {
        mySlider._stopAutoplay();
    });
}

const newsSlider = new Slidezy("#news-slider", {
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    controls: true,
    prevButton: "#prev-new-btn",
    nextButton: "#next-new-btn"
});

const locationInfo = [
    {
        id: "van-phong",
        title: "Vân Phong",
        desc: "Từ hè này, Vịnh Vân Phong – “báu vật ẩn mình” của Khánh Hòa, chính thức trở thành điểm hẹn mới cho du khách. Với biển xanh như ngọc, bãi cát hoang sơ và hệ sinh thái đa dạng, nơi đây hứa hẹn mang lại trải nghiệm nghỉ dưỡng và khám phá thiên nhiên đẳng cấp quốc tế.",
        img: "./assets/img/van-phong.jpg"
    },
    {
        id: "nha-trang",
        title: "Thành phố Nha Trang",
        desc: "Trung tâm du lịch biển hàng đầu Việt Nam, Nha Trang chào đón du khách bốn mùa với bãi tắm dài, phố biển sôi động và chuỗi hoạt động giải trí, lễ hội biển rực rỡ. Từ lặn ngắm san hô đến không gian đêm náo nhiệt, Nha Trang luôn là thiên đường bất tận của du lịch biển.",
        img: "./assets/img/nha-trang.jpg"
    },
    {
        id: "cam-ranh",
        title: "Thành phố Cam Ranh",
        desc: "Cam Ranh – thiên đường nghỉ dưỡng mới nổi của Khánh Hòa, nơi quy tụ những bãi biển nguyên sơ, nắng vàng quanh năm và các khu resort 5 sao sang trọng. Đây chính là điểm đến lý tưởng cho hành trình nghỉ ngơi, tái tạo năng lượng và tận hưởng phong vị biển cả trọn vẹn.",
        img: "./assets/img/cam-ranh.jpg"
    },
    {
        id: "phan-rang",
        title: "Thành phố Phan Rang",
        desc: "Nằm bên bờ biển Nam Trung Bộ, Phan Rang hấp dẫn du khách với nắng gió đặc trưng, bãi biển trong xanh cùng văn hóa Chăm độc đáo. Từ biển Ninh Chữ đến những cánh đồng nho trĩu quả, Phan Rang là điểm hẹn giao hòa giữa thiên nhiên, ẩm thực và văn hóa miền cát trắng.",
        img: "./assets/img/phan-rang.jpg"
    }
];

function initLocationClickHandlers() {
    const locationTitle = document.querySelector('#location-title');
    const locationDesc = document.querySelector('#location-desc');
    const locationImgDynamic = document.querySelector('#location-dynamic-img');

    locationInfo.forEach(location => {
        const locationElement = document.getElementById(location.id);
        if (locationElement) {
            locationElement.addEventListener('click', function () {
                if (locationTitle) {
                    locationTitle.textContent = location.title;
                }
                if (locationDesc) {
                    locationDesc.textContent = location.desc;
                }
                if (locationImgDynamic) {
                    locationImgDynamic.src = location.img;
                    locationImgDynamic.alt = location.title;
                }

                document.querySelectorAll('.location-decor > div').forEach(element => {
                    element.classList.remove('active');
                });
                locationElement.classList.add('active');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initLocationClickHandlers();
});
    // Scroll to top button show/hide
    const scrollBtn = document.querySelector('.fab-scroll');
    scrollBtn.style.display = 'none';
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Hotline click
    document.querySelector('.fab-hotline').onclick = function() {
        alert('Chức năng hotline đang phát triển.');
    };
    // Chat click
    document.querySelector('.fab-chat').onclick = function() {
        alert('Chức năng chat đang phát triển.');
    };
    // AI Assistant click
    document.querySelector('.fab-ai').onclick = function() {
        alert('AI Assistant đang phát triển.');
    };