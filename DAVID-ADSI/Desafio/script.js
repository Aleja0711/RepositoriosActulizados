var dateObj2 = new Date("2020-03-26");
var days2 = dateObj2 / 86400000;
console.log( days2 );

var dateObj3 = new Date("2020-04-02");
var days3 = dateObj3 / 86400000;
console.log( days3 );


var days4 =days3-days2;

console.log(Math.floor(days4));