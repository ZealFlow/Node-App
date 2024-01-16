const express = require('express');
const app = express();
const port = 3000;

app.get('/test', getAboutPage);

function getAboutPage(req, res){
	var spawn = require('child_process').spawn;
	var process = spawn('php',["./test.php",req.query.type]);
	process.stdout.on('data',function(data){
		res.send(data.toString());
	});
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
