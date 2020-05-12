const VP = require('../index.js');
const vp = new VP();
describe("Checking scope: required()", () => {
    
    test('On filled string', ()=> {
        const res = vp.v("heythere").required();
        expect(res.success).toBe(true);
    });

    test('On filled numbers', ()=> {
        const res = vp.v(132).required();
        expect(res.success).toBe(true);
    });

    test('On 0 filled number', ()=> {
        const res = vp.v(0).required();
        expect(res.success).toBe(true);
    });

    test('On empty string', ()=> {
        const res = vp.v("").required();
        expect(res.success).toBe(false);
    });

    test('On null', ()=> {
        const res = vp.v(null).required();
        expect(res.success).toBe(false);
    });

    test('On undefined', ()=> {
        const res = vp.v(undefined).required();
        expect(res.success).toBe(false);
    });
});

describe("Checking scope: min()", () => {
    
    test('On minimum number', ()=> {
        const res = vp.v(10).min(5);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = vp.v(10).min(20);
        expect(res.success).toBe(false);
    });

    test('On minimum number in strgin format', ()=> {
        const res = vp.v('10').min(5);
        expect(res.success).toBe(true);
    });

    test('On maximum number', ()=> {
        const res = vp.v('10').min(20);
        expect(res.success).toBe(false);
    });
});



