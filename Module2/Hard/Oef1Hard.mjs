let getal1 = 12 
let getal2 = 2
let getal3 = 96
let getal4 = 45
let getal5 = 6 
let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5


if (getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5) {
    console.log(getal1);
} else if (getal2 > getal1 && getal2 > getal3 && getal2 > getal4 && getal2 > getal5) {
    console.log(getal2);
} else if (getal3 > getal1 && getal3 > getal2 && getal3 > getal4 && getal3 > getal5) {
    console.log(getal3);
} else if (getal4 > getal1 && getal4 > getal3 && getal4 > getal2 && getal4 > getal5) {
    console.log(getal4);
} else {
    console.log(getal5);
}

if (getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5) {
    console.log(getal1);
} else if (getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal2 < getal5) {
    console.log(getal2);
} else if (getal3 < getal1 && getal3 < getal2 && getal3 < getal4 && getal3 < getal5) {
    console.log(getal3);
} else if (getal4 < getal1 && getal4 < getal3 && getal4 < getal2 && getal4 < getal5) {
    console.log(getal4);
} else {
    console.log(getal5);
}

console.log(gemiddelde)