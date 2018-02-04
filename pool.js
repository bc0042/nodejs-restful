var mysql = require('mysql')
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	passowrd: '',
	database: 'test'
})

module.exports = pool