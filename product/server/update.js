module.exports = {
     updatedata: function(db, productID, na, pri, desc, result){
		 const collection = db.collection('product');
		 collection.findOne({'name':productID}, function(err,res){
			 //let updatedvalues = {$set:{units:res.units-1}};
			 let updatedvalues = {$set:{name: na, price: pri, description: desc}};
			 collection.updateOne({'name':productID}, updatedvalues, function(err, res){
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