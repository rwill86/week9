module.exports = {
	 adddata: function(db, na, pri, des, result){
		 const collection = db.collection('product');
	     var myObj = {name:na, price:pri, description:des};
		 collection.insertOne(myObj , function(err, res){
			 if(err){
				 throw err;
			 } 
			 result(res);
		 });
	 }
};
