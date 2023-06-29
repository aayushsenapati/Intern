if (language === "HI") {
    if (lastTypedChar >= "\u0966" && lastTypedChar <= "\u096F") {
        if (el.f2Active) disablef2(e);
    }

    if (el.altActive && el.shiftActive) {
        var symbol = {
            173: "\u0903", // -
            61: "\u0943", // =
            88: "\u0901", // x
            221: "\u091E", // ]
            50: "\u0945", // 2
            51: "\u094D\u0930", // 3
            81: "\u094C", // q
            87: "\u0948", // w
            69: "\u093E", // e
            82: "\u0940", // r
            84: "\u0942", // t
            65: "\u094B", // a
            83: "\u0947", // s
            68: "\u094D", // d
            70: "\u093F", // f
            71: "\u0941", // g
            220: "\u0949", // /
            189: "\u0903", // -
            187: "\u0943" // =
        };

        text = symbol[value];
        if (!crisp(text)) return;

        return;
    } else if (el.altActive) {
        var symbol = {
            173: "\u0903", // -
            61: "\u0943", // =
            81: "\u094C", // q
            87: "\u0948", // w
            69: "\u093E", // e
            82: "\u0940", // r
            84: "\u0942", // t
            65: "\u094B", // a
            83: "\u0947", // s
            68: "\u094D", // d
            70: "\u093F", // f
            71: "\u0941", // g
            88: "\u0902", // x
            221: "\u093C", // ]
            220: "\u0949", // /
            189: "\u0903", // -
            187: "\u0943" // =
        };
        text = symbol[value];
        if (!crisp(text)) return;

        return;
    }

    if (el.f1Active) {
        if (value === undefined) return;

        var symbol = {
            173: "\u0903", // -
            88: "\u0902", // x
            189: "\u0903" // -
        };

        if (el.shiftActive) {
            symbol[173] = "\u0903"; // -
            symbol[189] = "\u0903"; // -
            symbol[88] = "\u0901"; // x
        }

        text = symbol[value];

        if (!crisp(text)) return;
        return;
    }
}


function crisp(text) {
    if (text === undefined || lastTypedChar === text) return false;

    if (content.length > 0) {
        do {
            newcp = newcp - 1;
            dp = newcp - 1;
        } while (content.substring(dp, newcp) !== " " && newcp > 0);
    }

    if (content.length === cp) {
        box.val(box.val() + text);
    } else {
        cp = $("textarea")[0].selectionStart;
        if (theletter !== text) {
            $("textarea").val(
                (content.substring(0, cp) + text + resthalf).replace(/^\s+/g, "")
            );
        }
        $("textarea").blur();
        $("textarea").prop("selectionEnd", cp + 1);
    }

    return true

}