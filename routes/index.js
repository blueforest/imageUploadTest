
/*
 * GET home page.
 */
//module.exports = function(app){
	exports.index = function(req, res){
	  res.render('index', { title: '图片上传' });
	};
	// app.get('/',function(req, res){
	// 	 res.render('index', { title: '图片上传' });
	// });
	//处理图像文件上传，图像文件保存在public/upload下
	// app.get('/upload',function(req, res){
	// 	console.log(req.files);
	// 	var patharray = req.files.file.path.split("\\");
	// 	res.send(patharray[patharray.length-1]);
	// });

	exports.upload = function (req, res) {
		//console.log(req.files);
		console.log(req.body);
  		console.log(req.files);
		//var patharray = req.files.file.path.split("\\");
		//res.send(patharray[patharray.length-1]);
		res.send(req.files)
	}
//}