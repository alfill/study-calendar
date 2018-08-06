!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("moment"), require("fullcalendar")) : "function" == typeof define && define.amd ? define(["moment", "fullcalendar"], t) : "object" == typeof exports ? t(require("moment"), require("fullcalendar")) : t(e.moment, e.FullCalendar)
}("undefined" != typeof self ? self : this, function(e, t) {
    return function(e) {
        function t(n) {
            if (r[n])
                return r[n].exports;
            var s = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
        }
        var r = {};
        return t.m = e,
        t.c = r,
        t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(r, "a", r),
            r
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 181)
    }({
        0: function(t, r) {
            t.exports = e
        },
        1: function(e, r) {
            e.exports = t
        },
        181: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            r(182);
            var n = r(1);
            n.datepickerLocale("be", "be", {
                closeText: "Зачыніць",
                prevText: "&#x3C;Папярэд",
                nextText: "След&#x3E;",
                currentText: "Сёння",
                monthNames: ["Студзень", "Люты", "Сакавік", "Красавік", "Трав", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
                monthNamesShort: ["Студ", "Лют", "Сак", "Крас", "Трав", "Чэрв", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"],
                dayNames: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
                dayNamesShort: ["ндз", "пнд", "аўт", "срд", "чцв", "птн", "сбт"],
                dayNamesMin: ["Нд","Пн","Ат","Ср","Чц","Пт","Сб"],
                weekHeader: "Ндз",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
            n.locale("be", {
                buttonText: {
                    listMonth: "Падзеі месяцы",
                    month: "Месяц",
                    week: "Тыдзень",
                    agendaDay: "Расклад дня",
                    day: "Дзень",
                    list: "Парадак дня"
                },
                allDayText: "Увесь дзень",
                eventLimitText: function(e) {
                    return "+ яшчэ " + e
                },
                noEventsMessage: "Няма падзей для адлюстравання"
            })
        },
        182: function(e, t, r) {
            !function(e, t) {
                t(r(0))
            }(0, function(e) {
                function t(e, t) {
                    var r = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? r[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? r[1] : r[2]
                }
                function r(e, r, n) {
                    var s = {
                        ss: r ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: r ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                        hh: r ? "адзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                        dd: "дзень_дні_дзён",
                        MM: "месяц_месяцы_месяцаў",
                        yy: "год_гады_гадоў"
                    };
                    return "m" === n ? r ? "хвіліна" : "хвіліну" : e + " " + t(s[n], +e)
                }
                var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
                return e.defineLocale("ru", {
                    months: {
                        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                        standalone: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_")
                    },
                    monthsShort: {
                        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                        standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                    },
                    weekdays: {
                        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                    },
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., H:mm",
                        LLLL: "dddd, D MMMM YYYY г., H:mm"
                    },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function(e) {
                            if (e.week() === this.week())
                                return 2 === this.day() ? "[Ць] dddd [у] LT" : "[У] dddd [у] LT";
                            switch (this.day()) {
                            case 0:
                                return "[У наступнае] dddd [у] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У наступны] dddd [у] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[У наступную] dddd [у] LT"
                            }
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week())
                                return 2 === this.day() ? "[Ць] dddd [у] LT" : "[Ць] dddd [у] LT";
                            switch (this.day()) {
                            case 0:
                                return "[У мінулае] dddd [у] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [у] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [у] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "праз %s",
                        past: "%s таму",
                        s: "некалькі секунд",
                        ss: r,
                        m: r,
                        mm: r,
                        h: "час",
                        hh: r,
                        d: "дзень",
                        dd: r,
                        M: "месяц",
                        MM: r,
                        y: "год",
                        yy: r
                    },
                    meridiemParse: /ночы|раніцы|дня|вечара/i,
                    isPM: function(e) {
                        return /^(дня|вечара)$/.test(e)
                    },
                    meridiem: function(e, t, r) {
                        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function(e, t) {
                        switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-i";
                        case "D":
                            return e + "-ы";
                        case "w":
                        case "W":
                            return e + "-га";
                        default:
                            return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })
        }
    })
});
