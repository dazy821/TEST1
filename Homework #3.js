//let, if, else, if else//
let zodiacSign = "";
if (zodiacSign.length === 0) {
	zodiacSign = prompt("What's Your Zodiac Sign? (Fire signs only)");
} 
	else if (zodiacSign.toLowerCase () === "leo"); 
	{alert("You are a strong leader");}

	else if (zodiacSign.toLowerCase () === "sagittarius");
	{alert("You are very optimistic");}

	else if (zodiacSign.toLowerCase () === "aries");
	{ alert("You are a strong leader");}

	else { 
		alert("Sorry, Fire Signs Are the Best :)");
	}

//switch statement//
switch(zodiacSign){
	case "Cancer";
		alert ("You are very loyal!");
		break;
	case "Scorpio";
		alert ("You are very brave!");
		break;
	case "Pisces";
		alert ("You are very creative!");
		break;
default:
	alert("Water Signs Only!");
}

//Ternary operator//
const oneAirSign = "Libra";
const trait= oneAirSign === "Libra" ? "You are very clever!" : "Try Another Air Sign!";
