var express = require('express')
var app = express()
app.listen(8080, _=>{
	console.log('start..')
})

var bear_dao = require('./bear_dao')

app.route('/bear')
.get((req, res)=>{
	bear_dao.list((ret)=>{
		res.end(JSON.stringify(ret))
	})
})
.post((req, res)=>{
	req.on('data', (chunk)=>{
		var obj = parse(chunk)
		bear_dao.save(obj, (ret)=>{
			res.end(ret.affectedRows+'')
		})
	})
})
.put((req, res)=>{
	req.on('data', (chunk)=>{
		var obj = parse(chunk)
		bear_dao.update(obj, (ret)=>{
			res.end(ret.affectedRows+'')
		})
	})
})

app.route('/bear/:id')
.get((req, res)=>{
	var id = req.params.id
	bear_dao.get(id, (ret)=>{
		res.end(JSON.stringify(ret))		
	})
})
.delete((req, res)=>{
	var id = req.params.id
	bear_dao.del(id, (ret)=>{
		res.end(ret.affectedRows+'')		
	})
})

var parse = (chunk)=>{
	try{
		return JSON.parse(chunk.toString())
	}catch (e){
		console.log(e)
		return {}
	}
}
