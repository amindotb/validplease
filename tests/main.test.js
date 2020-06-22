const VP = require('../index.js');
const vp = new VP();
describe("Checking scope: required()", () => {
    
    test('On filled string', ()=> {
        const res = new VP().v("heythere").required();
        expect(res.success).toBe(true);
    });

    test('On filled numbers', ()=> {
        const res = new VP().v(132).required();
        expect(res.success).toBe(true);
    });

    test('On 0 filled number', ()=> {
        const res = new VP().v(0).required();
        expect(res.success).toBe(true);
    });

    test('On empty string', ()=> {
        const res = new VP().v("").required();
        expect(res.success).toBe(false);
    });

    test('On null', ()=> {
        const res = new VP().v(null).required();
        expect(res.success).toBe(false);
    });

    test('On undefined', ()=> {
        const res = new VP().v(undefined).required();
        expect(res.success).toBe(false);
    });
});

describe("Checking scope: max()", () => {
    
    test('On minimum number', ()=> {
        const res = new VP().v(10).max(5);
        expect(res.success).toBe(false);
    });

    test('On maximum number', ()=> {
        const res = new VP().v(10).max(20);
        expect(res.success).toBe(true);
    });

    test('On minimum number in strgin format', ()=> {
        const res = new VP().v('10').max(5);
        expect(res.success).toBe(false);
    });

    test('On maximum number', ()=> {
        const res = new VP().v('10').max(20);
        expect(res.success).toBe(true);
    });

    test('On not number', ()=> {
        const res = new VP().v('aa').max(20);
        expect(res.success).toBe(false);
    });

    test('On number and string', ()=> {
        const res = new VP().v('102a').max(20);
        expect(res.success).toBe(false);
    });
});

describe("Checking scope: min()", () => {
    
    test('On minimum number', ()=> {
        const res = new VP().v(10).min(5);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = new VP().v(10).min(20);
        expect(res.success).toBe(false);
    });

    test('On minimum number in strgin format', ()=> {
        const res = new VP().v('10').min(5);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = new VP().v('10').min(20);
        expect(res.success).toBe(false);
    });

    test('On not number', ()=> {
        const res = new VP().v('aa').min(20);
        expect(res.success).toBe(false);
    });

    test('On number and string', ()=> {
        const res = new VP().v('102a').min(20);
        expect(res.success).toBe(false);
    });
});

describe("Checking scope: maxLen()", () => {
    
    test('On minimum number', ()=> {
        const res = new VP().v(10).maxLen(20);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = new VP().v(10).maxLen(2);
        expect(res.success).toBe(true);
    });

    test('On minimum number in strgin format', ()=> {
        const res = new VP().v('10').maxLen(5);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = new VP().v('10').maxLen(2);
        expect(res.success).toBe(true);
    });

    test('On not number and correct len', ()=> {
        const res = new VP().v('aabbb').maxLen(4);
        expect(res.success).toBe(false);
    });

    test('On number and string', ()=> {
        const res = new VP().v('102a').maxLen(20);
        expect(res.success).toBe(true);
    });

    test('On not number', ()=> {
        const res = new VP().v('aa').maxLen(20);
        expect(res.success).toBe(true);
    });
});

describe("Checking scope: minLen()", () => {
    
    test('On minimum number', ()=> {
        const res = new VP().v(10).minLen(5);
        expect(res.success).toBe(false);
    });

    test('On maximum number', ()=> {
        const res = new VP().v(10).minLen(2);
        expect(res.success).toBe(true);
    });

    test('On minimum number in strgin format', ()=> {
        const res = new VP().v('10').minLen(5);
        expect(res.success).toBe(false);
    });

    test('On maximum number', ()=> {
        const res = new VP().v('10').minLen(2);
        expect(res.success).toBe(true);
    });

    test('On not number and correct len', ()=> {
        const res = new VP().v('aabbb').minLen(4);
        expect(res.success).toBe(true);
    });

    test('On number and string', ()=> {
        const res = new VP().v('102a').minLen(20);
        expect(res.success).toBe(false);
    });

    test('On not number', ()=> {
        const res = new VP().v('aa').minLen(20);
        expect(res.success).toBe(false);
    });
});

describe("Checking scope: isInt()", () => {
    
    test('On correct number', ()=> {
        const res = new VP().v(10).isInt();
        expect(res.success).toBe(true);
    });

    test('On correct float number', ()=> {
        const res = new VP().v(10.5).isInt();
        expect(res.success).toBe(true);
    });

    test('On correct string number', ()=> {
        const res = new VP().v('10').isInt();
        expect(res.success).toBe(true);
    });

    test('On string', ()=> {
        const res = new VP().v('abcd').isInt();
        expect(res.success).toBe(false);
    });

    test('On string + number mixed', ()=> {
        const res = new VP().v('abcd123').isInt();
        expect(res.success).toBe(false);
    });

    test('On empty string', ()=> {
        const res = new VP().v('').isInt();
        expect(res.success).toBe(false);
    });
    
});

describe("Checking scope: isBoolean()", () => {
    
    test('On correct true boolean', ()=> {
        const res = new VP().v(true).isBoolean();
        expect(res.success).toBe(true);
    });

    test('On correct false boolean', ()=> {
        const res = new VP().v(false).isBoolean();
        expect(res.success).toBe(true);
    });

    test('On null', ()=> {
        const res = new VP().v(null).isBoolean();
        expect(res.success).toBe(false);
    });

    test('On zero', ()=> {
        const res = new VP().v(0).isBoolean();
        expect(res.success).toBe(false);
    });

    test('On empty string', ()=> {
        const res = new VP().v('').isBoolean();
        expect(res.success).toBe(false);
    });

    test('On string', ()=> {
        const res = new VP().v('validplease').isBoolean();
        expect(res.success).toBe(false);
    });

    test('On numbers', ()=> {
        const res = new VP().v(123456).isBoolean();
        expect(res.success).toBe(false);
    });
    
});

describe("Checking scope: isEmail()", () => {
    
    test('On correct email', ()=> {
        const res = new VP().v('johndoe@gmail.com').isEmail();
        expect(res.success).toBe(true);
    });

    test('On incorrect email domain', ()=> {
        const res = new VP().v('johndoe@.com').isEmail();
        expect(res.success).toBe(false);
    });

    test('On missing at sign', ()=> {
        const res = new VP().v('johndoegmail.com').isEmail();
        expect(res.success).toBe(false);
    });

    test('On double at sign', ()=> {
        const res = new VP().v('john@doe@gmail.com').isEmail();
        expect(res.success).toBe(false);
    });

    test('On missing dot', ()=> {
        const res = new VP().v('john@doe@gmailcom').isEmail();
        expect(res.success).toBe(false);
    });

    test('On double dot', ()=> {
        const res = new VP().v('john@doe@gm.ail.com').isEmail();
        expect(res.success).toBe(false);
    });
    
});


describe("Checking scope: isMobile()", () => {
    
    test('On correct mobile', ()=> {
        const res = new VP().v('09123456789').isMobile();
        expect(res.success).toBe(true);
    });

    test('On other correct mobile', ()=> {
        const res = new VP().v('09362345678').isMobile();
        expect(res.success).toBe(true);
    });

    test('On incorrect mobile length', ()=> {
        const res = new VP().v('0912345678').isMobile();
        expect(res.success).toBe(false);
    });

    test('On missing 09', ()=> {
        const res = new VP().v('80123456789').isMobile();
        expect(res.success).toBe(false);
    });

    test('On +98', ()=> {
        const res = new VP().v('+989123456789').isMobile();
        expect(res.success).toBe(false);
    });

    test('On 0098', ()=> {
        const res = new VP().v('00989123456789').isMobile();
        expect(res.success).toBe(false);
    });

    test('On 98', ()=> {
        const res = new VP().v('989123456789').isMobile();
        expect(res.success).toBe(false);
    });

    test('On mobile with string', ()=> {
        const res = new VP().v('09ab3456789').isMobile();
        expect(res.success).toBe(false);
    });
    
});


describe("Checking scope: isDate()", () => {
    
    test('On correct email', ()=> {
        const res = new VP().v('2020-02-20').isDate();
        expect(res.success).toBe(true);
    });

    test('On missing year', ()=> {
        const res = new VP().v('02-20').isDate();
        expect(res.success).toBe(false);
    });

    test('On missing day', ()=> {
        const res = new VP().v('2020-02').isDate();
        expect(res.success).toBe(false);
    });

    test('On out of range day', ()=> {
        const res = new VP().v('2020-02-32').isDate();
        expect(res.success).toBe(false);
    });

    test('On out of range month', ()=> {
        const res = new VP().v('2020-13-10').isDate();
        expect(res.success).toBe(false);
    });

    test('On incorrect year', ()=> {
        const res = new VP().v('20-13-10').isDate();
        expect(res.success).toBe(false);
    });
    
});

describe("Checking scope: isMeliCode()", () => {
    
    test('On correct code', ()=> {
        const res = new VP().v(3300100021).isMeliCode();
        expect(res.success).toBe(true);
    });

    test('On incorrect code', ()=> {
        const res = new VP().v(3300100022).isMeliCode();
        expect(res.success).toBe(false);
    });
    
});

describe("Checking scope: isPersian()", () => {
    
    test('On Persian string', ()=> {
        const res = new VP().v('سلام').isPersian();
        expect(res.success).toBe(true);
    });

    test('On English string', ()=> {
        const res = new VP().v('salam').isPersian();
        expect(res.success).toBe(false);
    });

    test('On English and Persian mixed', ()=> {
        const res = new VP().v('salam سلام').isPersian();
        expect(res.success).toBe(false);
    });

    test('On Persian string with space', ()=> {
        const res = new VP().v('سلام دنیا').isPersian();
        expect(res.success).toBe(true);
    });

});

describe("Checking scope: isEnglish()", () => {
    
    test('On Persian string', ()=> {
        const res = new VP().v('سلام').isEnglish();
        expect(res.success).toBe(false);
    });

    test('On English string', ()=> {
        const res = new VP().v('salam').isEnglish();
        expect(res.success).toBe(true);
    });

    test('On English and Persian mixed', ()=> {
        const res = new VP().v('salam سلام').isEnglish();
        expect(res.success).toBe(false);
    });

    test('On Persian string with space', ()=> {
        const res = new VP().v('سلام دنیا').isEnglish();
        expect(res.success).toBe(false);
    });

});



describe("Checking scope: isPersianDigit()", () => {
    
    test('On Persian number', ()=> {
        const res = new VP().v('۰۱۲۳۴۵۶۷۸۹').isPersianDigit();
        expect(res.success).toBe(true);
    });

    test('On English number', ()=> {
        const res = new VP().v('0123456789').isPersianDigit();
        expect(res.success).toBe(false);
    });

    test('On English and Persian mixed', ()=> {
        const res = new VP().v('۰۱۲۳۴56789').isPersianDigit();
        expect(res.success).toBe(false);
    });

    test('On Persian number with space', ()=> {
        const res = new VP().v('۰۱۲۳۴۵ ۶۷۸۹').isPersianDigit();
        expect(res.success).toBe(false);
    });

});

describe("Checking scope: isEnglishDigit()", () => {
    
    test('On Persian number', ()=> {
        const res = new VP().v('۰۱۲۳۴۵۶۷۸۹').isEnglishDigit();
        expect(res.success).toBe(false);
    });

    test('On English number', ()=> {
        const res = new VP().v('0123456789').isEnglishDigit();
        expect(res.success).toBe(true);
    });

    test('On English and Persian mixed', ()=> {
        const res = new VP().v('۰۱۲۳۴56789').isEnglishDigit();
        expect(res.success).toBe(false);
    });

    test('On English number with space', ()=> {
        const res = new VP().v('012345 6789').isEnglishDigit();
        expect(res.success).toBe(false);
    });

});

describe("Checking scope: isIP()", () => {
    
    test('on correct IP', ()=> {
        const res = new VP().v('10.12.4.250').isIP();
        expect(res.success).toBe(true);
    });

    test('on correct IP with 0 range', ()=> {
        const res = new VP().v('0.0.0.0').isIP();
        expect(res.success).toBe(true);
    });

    test('On incorrect IP with missing part', ()=> {
        const res = new VP().v('121.236.123').isIP();
        expect(res.success).toBe(false);
    });

    test('On incorrect IP with a bad scope', ()=> {
        const res = new VP().v('121.236.123.').isIP();
        expect(res.success).toBe(false);
    });

    test('On incorrect IP with two bad scopes', ()=> {
        const res = new VP().v('121.236..').isIP();
        expect(res.success).toBe(false);
    });

    test('On incorrect IP with out of range numbers', ()=> {
        const res = new VP().v('121.0.257.16').isIP();
        expect(res.success).toBe(false);
    });

});

describe("Checking scope: isIPv6()", () => {
    
    test('on correct IPv6', ()=> {
        const res = new VP().v('fe80::200:5aee:feaa:20a2').isIPv6();
        expect(res.success).toBe(true);
    });

    test('On incorrect IPv6 with missing part', ()=> {
        const res = new VP().v('fe80:f:200:5aee:feaa:20a2').isIPv6();
        expect(res.success).toBe(false);
    });

});

describe("Checking scope: isVersion()", () => {
    
    test('on correct version with build version', ()=> {
        const res = new VP().v('1.0.2.1').isVersion();
        expect(res.success).toBe(true);
    });

    test('on correct version', ()=> {
        const res = new VP().v('1.0.2').isVersion();
        expect(res.success).toBe(true);
    });

    test('on correct simple version', ()=> {
        const res = new VP().v('1.2').isVersion();
        expect(res.success).toBe(true);
    });

    test('on out of range', ()=> {
        const res = new VP().v('1.2.3.4.5').isVersion();
        expect(res.success).toBe(false);
    });

    test('on single digit', ()=> {
        const res = new VP().v('1').isVersion();
        expect(res.success).toBe(true);
    });

    test('on missed part', ()=> {
        const res = new VP().v('1.2..4').isVersion();
        expect(res.success).toBe(false);
    });

});