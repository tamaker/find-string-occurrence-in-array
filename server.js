var arrCheckStreetNames = ['beechfern', 'giant feather loop', 'cordgrass', 'brushfield'];

var testString = "beechfway"
var checkForFoundStreetName = arrCheckStreetNames.some( substring => testString.toLowerCase().includes(substring) );

console.log(checkForFoundStreetName) 