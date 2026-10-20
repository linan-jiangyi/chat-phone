// 打开微信APP
function openDawnApp(){
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'block';
}

// 返回手机桌面（供微信内部调用）
function backToHome(){
    document.getElementById('appContainer').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
}

// 监听底部上滑手势（可选：在手机端从底部上滑回桌面）
let startY = 0;
const screenElement = document.querySelector('.screen');

screenElement.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const rect = screenElement.getBoundingClientRect();
    if (rect.bottom - touch.clientY < 100) {
        startY = touch.clientY;
    } else {
        startY = 0;
    }
}, { passive: true });

screenElement.addEventListener('touchend', function(e) {
    if (startY === 0) return;
    const deltaY = startY - e.changedTouches[0].clientY;
    if (deltaY > 60) {
        backToHome();
    }
    startY = 0;
}, { passive: true });