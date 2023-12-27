document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('image');
    const audio = document.getElementById('audio');
    const container = document.querySelector('.container');
    const loadingIndicator = document.getElementById('loadingIndicator');

    let totalResources = 2; // 图片和音频
    let loadedResources = 0;

    function resourceLoaded() {
        loadedResources++;
        if (loadedResources === totalResources) {
            loadingIndicator.style.display = 'none';
            container.style.display = 'block';
        }
    }

    image.onload = resourceLoaded;
    audio.oncanplaythrough = resourceLoaded;

    // 如果资源已缓存，onload/oncanplaythrough 可能不会触发，因此需要额外检查
    if (image.complete) {
        resourceLoaded(); // 如果图片已加载
    }
    if (audio.readyState >= 4) {
        resourceLoaded(); // 如果音频已加载
    }
});