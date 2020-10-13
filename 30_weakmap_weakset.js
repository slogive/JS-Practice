let Value0 = { Valor: 0 },
    Value1 = { Valor: 1 },
    Value2 = { Valor: 2 };

const WS = new WeakSet();

WS.add(Value0);
WS.add(Value1);
WS.add(Value2);

// setInterval(() => console.log(WS), 1000);

// setInterval(() => {
//     Value0 = null;
//     Value1 = null;
//     Value2 = null;
// }, 5000);

let Key0 = {},
    Key1 = {},
    Key2 = {};

const WM = new WeakMap();

WM.set(Key0, 0);
WM.set(Key1, 1);
WM.set(Key2, 2);

console.log(WM);