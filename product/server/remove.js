module.exports = {
	 removedata: function(db, productID, result){
		 const collection = db.collection('product');
		 collection.findOne({'name': productID}, function(err,res){
			 collection.deleteOne({'name': productID}, function(err, res){
				 if(err){
					 throw err;
				 } 
                 collection.find({}).toArray(function(err, res){
					 if(err){
						 throw err;
					 } 
					 result(res);
				 });				 
			 });
		 });
	 }
};

