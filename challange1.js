// Please write a simple script in a scripting language of your choice that prints the numbers from 1 to 100 on a new line. 
// But for multiples of three print "Site" instead of the number and for the multiples of five print "Host". 
// For numbers which are multiples of both three and five print "SiteHost".

const challange = (number) => {

	let multiples = '';

	if(number % 3 == 0){
		multiples += 'Site';
	}

	if(number % 5 == 0){
		multiples += 'Host';
	}

	if(multiples == ''){
		console.log(number);
		return
	}else{
		console.log(multiples);
		return;
	}
}

const limit = 100;

for(let i = 1; i <= 100; i++){
	challange(i);
}