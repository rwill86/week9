module.exports = {
	 alldata: function(db, result){
		 const collection = db.collection('product');
		 collection.find({}).toArray(function (err, res){
			 if(err){
				 throw err;
			 } 
			 result(res);
		 });
	 }
};