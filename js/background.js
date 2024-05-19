// ��ȡ��ǩ
// ȫ�ֱ���div
var web_bg = document.getElementById("web_bg");
// ��������
var content_inner = document.getElementById("content-inner");
// ��ȡCookies
// ͸����
var opacity = Cookies.get("opacity");
// ����
var bg = Cookies.get("bg");
// ����
var animation = Cookies.get("animation");
// ��������
var type = Cookies.get("type");
// �������� ���ڼ�¼��ǰcolor
// ���ñ���
if (bg) {
  web_bg.style.background = bg;
  web_bg.setAttribute("data-type", type);
  if (animation) {
    web_bg.style.animation = animation;
  }
}
function setColor(opacity) {
  // style="--light_bg_color: rgb(255, 255, 255,.3);--dark_bg_color: rgba(18,18,18,.2);"
  var light_bg_color = "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
  var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
  content_inner.setAttribute("style", light_bg_color + dark_bg_color);
}
setColor(opacity);