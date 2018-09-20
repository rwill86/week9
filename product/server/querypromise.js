module.exports = {
     updatedata: function(db, result){
		 const collection = db.collection('products');
		 collection.findOne({id:'1'})
		 .the(response => {
			 let updatedvalues = {$set:{units:response.units-1}};
			 return collection.updateOne({id:response.id},updatedvalues);
		 })
		 .then (() = > collection.find().toArray());
		 .then(response => result(response))
		 .catch(err => console.error('error =' + err));
	 }
};