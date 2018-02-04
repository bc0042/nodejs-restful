var pool = require('./pool')

var update = (obj, cb)=>{
	var sql = 'update bear set ? where id=?'
	var p = [obj, obj.id]
	pool.query(sql, p, (err, ret)=>{
		if(err) console.log(err)
		else cb(ret)
	})
}

var save = (obj, cb)=>{
	var sql = 'insert into bear set ?'
	pool.query(sql, obj, (err, ret)=>{
		if(err) console.log(err)
		else cb(ret)
	})
}

var list = (cb)=>{
	var sql = 'select * from bear'
	pool.query(sql, (err, ret)=>{
		if(err) console.log(err)
		else cb(ret)
	})
}

var del = (id, cb)=>{
	var sql = 'delete from bear where id=?'
	pool.query(sql, id, (err, ret)=>{
		if(err) console.log(err)
		else cb(ret)
	})
}

var get = (id, cb)=>{
	var sql = 'select * from bear where id=?'
	pool.query(sql, id, (err, ret)=>{
		if(err) console.log(err)
		else cb(ret)
	})
}

module.exports = {
	update,
	save,
	list,
	del,
	get
}