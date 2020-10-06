// Spread Operator
console.log("%cSpread Operator", "color: yellow;");

const spreadArr0 = [1, 2, 3, 4, 5],
    spreadArr1 = [6, 7, 8, 9, 0];

console.log(spreadArr0, spreadArr1);

const spreadArr2 = [...spreadArr0, ...spreadArr1];

console.log(spreadArr2);
