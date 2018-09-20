module.exports = {
	 searchdata: function(db, req, result){
		 const collection = db.collection('product');
		 var search = req.query.name;
		 //name:'Metroid', description:''
		 collection.find({'name':search}).toArray(function (err, res){
			 if(err){
				 throw err;
			 } 				 
			 result(res);
		 });
	 }
};