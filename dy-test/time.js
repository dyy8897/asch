const AschJS = require('asch-js');
const Request = require('superagent');

const init_time = AschJS.utils.slots.beginEpochTime()
console.log('Asch主网创世块生成时间')
console.log(init_time)

const now_time_asch = AschJS.utils.slots.getTime()
console.log('当前时间戳，相对于Asch纪元经历的秒数')
console.log(now_time_asch)

const now_time = AschJS.utils.slots.getRealTime(now_time_asch)
console.log('真实的 unix时间戳* 1000，毫秒单位')
console.log(now_time)