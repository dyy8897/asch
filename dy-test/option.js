const AschJS = require('asch-js');
const Request = require('superagent');

AschJS.options.set('secret','minor borrow display rebel depart core buzz right distance avocado immense push')

const secret = AschJS.options.get('secret')
console.log('获取一个option')
console.log(secret)

const option = AschJS.options.getAll()
console.log('获取全部option')
console.log(option)