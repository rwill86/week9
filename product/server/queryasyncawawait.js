module.exports = {
     updatedata: async function(db){
		 let response = await collection.findOne({id:'1'});
		 let updatedvalues = {$set:{units:response.units-1}};
		 await collection.updateOne({id:response.id}, updatedvalues);
		 let responese3 = await collection.find().toArray();
		 return responese3;
	 }
};