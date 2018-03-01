import WeexAdhoc from "../../js/src";

if (window.Weex) {
  Weex.install(WeexAdhoc);
} else if (window.weex) {
  weex.install(WeexAdhoc);
}