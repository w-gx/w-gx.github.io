$(document).ready(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
})