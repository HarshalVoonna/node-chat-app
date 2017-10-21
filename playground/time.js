const moment = require('moment');

var createdAt = 1234122122132;
var date = moment(createdAt);
date.add(1, 'year').subtract(4, 'months').add(4, 'hour');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
console.log(moment().valueOf());
