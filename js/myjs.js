var wgx = new xkTool();
wgx.meting("5073700008","netease","playlist");
wgx.cheatTitle();
// wgx.bannerList = [
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/d40e7e1f6d0a5d28785fdc158e0ad87e.png",
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/b855aecb08d4d97ef55c1f12b05d835b.png",
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/24f906dec626074ac6c0c293fb400912.png",
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/ddc594cb5a372f4b362de979a1bfe18e.png",
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/30fd3b03788e5d2dd8ef9ab3992897be.png",
//     "https://cdn.jsdelivr.net/gh/w-gx/img2006-2@latest/2020/07/31/85e29f683ef198751a0910b88dc946c5.png",
// ];
// wgx.randomBanner();

// dplayer 相关代码
// $(document).on('pjax:start', function () {
//     if (window.dplayers) {
//         for (let i = 0; i < window.dplayers.length; i++) {
//             window.dplayers[i].destroy();
//         }
//         window.dplayers = [];
//     }
// });
// function __create__dps(videos) {
//         for (i = 0; i < videos.length; i++) {
//             new DPlayer({
//                 container: document.getElementById('__dp' + i),
//                 screenshot: true,
//                 video: {
//                     url: videos[i]
//                 }
//             });
//         }
//         // 修正 Mirages 1.7.10 视频比例错误
//         setTimeout(() => {
//             let __elementList = document.querySelectorAll('.video-container.video-4-3');
//             for (let __element of __elementList) {
//                 __element.className = 'video-container video-16-9';
//                 __element.setAttribute('style', 'position: initial;');
//             }
//     }, 300);
// }

