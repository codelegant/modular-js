define(['jquery'], function ($) {
    'use strict';
    var Tool;
    (function (Tool) {
        Tool.Phpmessage = (function () {
            var _this = this;
            var element;
            var _showAlert = function (message, className) {
                element = document.getElementById("phpmessage") || undefined;
                if (!element) {
                    className = className || "info";
                    $("div.content").before("<div id=\"phpmessage\" class=\"alert alert-" + className + "\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>" + message + "</div>");
                }
                setTimeout(_hideAlert, 5000);
                return false;
            };
            var _hideAlert = function () {
                console.info(_this);
                element = document.getElementById("phpmessage") || undefined;
                if (element) {
                    element.parentNode.removeChild(element);
                }
                return false;
            };
            var _updateAlert = function (message, className) {
                element = document.getElementById("phpmessage") || undefined;
                if (element) {
                    element.innerText = message;
                    element.className = "alert alert-" + className;
                }
                return false;
            };
            return {
                showAlert: _showAlert,
                hideAlert: _hideAlert,
                updateAlert: _updateAlert
            };
        })();
        var BtnStatus = (function () {
            function BtnStatus($element) {
                this.element = $element;
                this.html = this.element.html();
                this.attr = this.element.attr("disabled") || false;
            }
            BtnStatus.judeBrowser = function () {
                if (navigator.appName === "Microsoft Internet Explorer") {
                    var version = navigator.appVersion.split("(")[1].split(";")[1].replace(/[ ]/g, "");
                    if (version === "MSIE9.0") {
                        return "IE9";
                    }
                    else if (version === "MSIE8.0") {
                        return "IE8";
                    }
                    else {
                        return "IE7";
                    }
                }
                else {
                    return "Netscape";
                }
            };
            BtnStatus.prototype.doing = function (text) {
                this.text = text === null ? " " : text || "操作中...";
                if (BtnStatus.judeBrowser() === "IE9") {
                    this.element.html("<span class='fa fa-spinner fa-spin'></span>" + this.text);
                }
                else if (BtnStatus.judeBrowser() === "IE8") {
                    this.element.html("<span class='fa fa-spinner fa-spin'></span>" + this.text);
                }
                else if (BtnStatus.judeBrowser() === "IE7") {
                    this.element.html("<span class='fa fa-spinner fa-spin'></span>" + this.text);
                }
                else {
                    this.element.attr("disabled", true).html("<span class='fa fa-spinner fa-spin'></span>" + this.text);
                    this.element.parents(".modal-content").find("button[data-dismiss='modal']").each(function () {
                        $(this).attr("disabled", true);
                    });
                }
                return this;
            };
            BtnStatus.prototype.done = function () {
                this.element.removeClass("btn-warning").attr("disabled", this.attr).html(this.html);
                this.element.parents(".modal-content").find("button[data-dismiss='modal']").each(function () {
                    $(this).attr("disabled", false);
                });
                return this;
            };
            BtnStatus.prototype.again = function (text) {
                this.text = text === null ? " " : text || "请求超时，请重试。";
                this.element.attr("disabled", false).html("<span class='fa fa-refresh'></span>" + this.text);
                this.element.parents(".modal-content").find("button[data-dismiss='modal']").each(function () {
                    $(this).attr("disabled", false);
                });
                return this;
            };
            return BtnStatus;
        })();
        Tool.BtnStatus = BtnStatus;
        Tool.getUnit = function (id, many, connect) {
            if (connect === void 0) { connect = "."; }
            try {
                var doc = document, currentInput = doc.getElementById(id + "_1"), result = currentInput.value, target = doc.getElementById(id);
                for (var i = 1; i < many; i++) {
                    var _input = doc.getElementById(id + "_" + (i + 1));
                    result += connect + _input.value;
                }
            }
            catch (e) {
                console.error(e.name + ":" + e.message);
            }
            return target.value = result;
        };
        Tool.rgbToHsl = function (r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;
            if (max == min) {
                h = s = 0;
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h *= 60;
            }
            return [h, s, l];
        };
        Tool.hslToRgb = function (h, s, l) {
            var r, g, b;
            if (s == 0) {
                r = g = b = l;
            }
            else {
                var hue2rgb = function (p, q, t) {
                    if (t < 0)
                        t += 1;
                    if (t > 1)
                        t -= 1;
                    if (t < 1 / 6)
                        return p + (q - p) * 6 * t;
                    if (t < 1 / 2)
                        return q;
                    if (t < 2 / 3)
                        return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                h /= 360;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        };
    })(Tool || (Tool = {}));
    return Tool;
});