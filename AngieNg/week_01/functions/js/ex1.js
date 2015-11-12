/*

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 

*/

var tellFortune = function (noOfChild, partnerName, geoLocation, jobTitle) {
	var fortune = "You will be a " +jobTitle+ " in " + geoLocation + ", and married to " +partnerName+ " with " + noOfChild + " kids.";
	
	console.log(fortune);
	
	return fortune;
};

tellFortune(2, 'Ali', 'Sydney', 'Policeman');
tellFortune(0, 'Fiona', 'Tasmania', 'Gardener');