if (language === "OR") {
    if (lastTypedChar >= "\u0b66" && lastTypedChar <= "\u0b6F" && el.f2Active === true) disablef2(e);

    var symbol = {};

    if (el.shiftActive === true && el.altActive === true) {
        if (navigator.userAgent.includes("Firefox")) {
            symbol[173] = "\u0B03"; // -
            symbol[61] = "\u0B43"; // =
        }
        symbol[51] = "\u0b4d\u0b30"; //3
        symbol[65] = "\u0B4B";
        symbol[67] = "\u0B41";
        symbol[68] = "\u0B4D";
        symbol[69] = "\u0B3E";
        symbol[70] = "\u0b62";
        symbol[71] = "\u0B41";
        symbol[81] = "\u0B4C";
        symbol[82] = "\u0b63";
        symbol[83] = "\u0B47";
        symbol[84] = "\u0B42";
        symbol[87] = "\u0B48";
        symbol[88] = "\u0B01";
        symbol[187] = "\u0B43";
        symbol[189] = "\u0B03";
        symbol[221] = "\u0B1E";

        text = symbol[value];
        if (!crisp(text)) return;
        return;

    } else if (el.altActive === true) {

        if (navigator.userAgent.includes("Firefox")) {
            symbol[173] = "\u0B03"; // -    
            symbol[61] = "\u0B43"; // =
        }
        symbol[65] = "\u0B4B";
        symbol[68] = "\u0B4D";
        symbol[69] = "\u0B3E";
        symbol[70] = "\u0B3F";
        symbol[71] = "\u0B41";
        symbol[81] = "\u0B4C";
        symbol[82] = "\u0B40";
        symbol[83] = "\u0B47";
        symbol[84] = "\u0B42";
        symbol[87] = "\u0B48";
        symbol[88] = "\u0B02";
        symbol[189] = "\u0B03";
        symbol[221] = "\u0B3C";
        symbol[187] = "\u0B43";

        text = symbol[value];
        if (!crisp(text)) return;
        return

    }
    if (el.f1Active === true) {
        if (value === undefined) return;


        if (navigator.userAgent.includes("Firefox")) {
            symbol[173] = "\u0B03"; // -
        }
        symbol[88] = "\u0B02";
        symbol[189] = "\u0B03";

        if (el.shiftActive === true) {

            if (navigator.userAgent.includes("Firefox")) {
                symbol[173] = "\u0B03"; // -
            }
            symbol[189] = "\u0B03";
            symbol[88] = "\u0B01";
        }
        text = symbol[value];
        if (!crisp(text)) return;
        return;
    }
}