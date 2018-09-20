module.exports = {
     updatedata: function(db, req, result){
		 const collection = db.collection('product');
		 collection.findOne({'_id':'1'}, function(err,res){
			 //let updatedvalues = {$set:{units:res.units-1}};
			 let updatedvalues = {$set:{name: 'Halo', price: '99.99', description:'A boring game'}};
			 collection.updateOne({'_id':'1'}, updatedvalues, function(err, res){
				 if(err){
					 throw err;
				 }
				 collection.find().toArray(function(err, res){
					 if(err){
						 throw err;
					 } 
					 result(res);
				 });
			 });
		 });
	 }
};