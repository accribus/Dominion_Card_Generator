/*
	var baseCardsGlobal = 0;
	var intrCardsGlobal = 0;
	var ssCardsGlobal = 0;
	var prosCardsGlobal = 0;
	var daCardsGlobal = 0;
*/

function getCardRatios(){

	//grabs the number of cards needed for each set, defaulting to zero
	//they are: baseField intrField ssField prosField daField
	//declared base values as 0
	
	var baseCards = 0;
	var intrCards = 0;
	var ssCards = 0;
	var prosCards = 0;
	var daCards = 0;

	
	if(document.getElementById("baseField").value > 0){
	
		baseCards = document.getElementById("baseField").value;		
	
	}
	if(document.getElementById("intrField").value > 0){
	
		intrCards = document.getElementById("intrField").value;		
	
	}
	if(document.getElementById("ssField").value > 0){
	
		ssCards = document.getElementById("ssField").value;		
	
	}
	if(document.getElementById("prosField").value > 0){
	
		prosCards = document.getElementById("prosField").value;		
	
	}
	if(document.getElementById("daField").value > 0){
	
		daCards = document.getElementById("daField").value;		
	
	}
	
	var cardTotal = parseInt(baseCards) + parseInt(intrCards) + parseInt(ssCards) + parseInt(prosCards) + parseInt(daCards);
	
	
	
	if (cardTotal != 10){
	
		alert("Please enter valid numerical values only (field values from 1-10), totalling 10 cards.  Currently, card total is: " + cardTotal);
		var baseCards = 0;
		var intrCards = 0;
		var ssCards = 0;
		var prosCards = 0;
		var daCards = 0;
	
	}
	
	
	resultGenerator(baseCards, intrCards, ssCards, prosCards, daCards); //sends values to next function resultGenerator
}

function inArray(cardName,arr){

    var arrLength=arr.length;
	
    for(var i=0; i < arrLength; i++){
	
        if(arr[i]==cardName){return true;}
    }
    return false;
}

function resultGenerator(b, i, s, p, d){

	//alert("enter resultGenerator");
	//document.getElementById("testDiv").style.display = "none";

	var baseCards = b;
	var intrCards = i;
	var ssCards = s;
	var prosCards = p;
	var daCards = d;
	
	
	var baseSet = ["Cellar", "Chapel", "Moat", "Chancellor", "Village", "Woodcutter", "Workshop", "Bureaucrat", "Feast", "Gardens", "Militia", "Moneylender", "Remodel", "Smithy", "Spy", "Thief", "Throne Room", "Council Room", "Festival", "Laboratory", "Library", "Market", "Mine", "Witch", "Adventurer"];
	var intrSet = ["Courtyard", "Pawn", "Secret Chamber", "Great Hall", "Masquerade", "Shanty Town", "Swindler", "Wishing Well", "Baron", "Bridge", "Conspirator", "Coppersmith", "Ironworks", "Mining Village", "Scout", "Minion", "Saboteur", "Torturer", "Trading Post", "Tribute", "Upgrade", "Harem", "Nobles"];
	var ssSet = ["Embargo", "Haven", "Lighthouse", "Native Village", "Pearl Diver", "Ambassador", "Fishing Village", "Lookout", "Smugglers", "Warehouse", "Caravan", "Cutpurse", "Island", "Navigator", "Pirate Ship", "Salvager", "Sea Hag", "Treasure Map", "Bazaar", "Explorer", "Ghost Ship", "Merchant Ship", "Outpost", "Tactician", "Treasury", "Wharf"];
	var prosSet = ["Loan", "Trade Route", "Watchtower", "Bishop", "Monument", "Quarry", "Talisman", "Worker's Village", "City", "Contraband", "Counting House", "Mint", "Mountebank", "Rabble", "Royal Seal", "Vault", "Venture", "Goons", "Grand Market", "Hoard", "Bank", "Expand", "Forge", "King's Court", "Peddler"];
	var daSet = ["Hermit/Madman", "Urchin/Merc.", "Poor House", "Beggar", "Squire", "Vagrant", "Forager", "Market Square", "Sage", "Storeroom", "Armory", "Death Cart", "Feodum", "Fortress", "Ironmonger", "Marauder", "Procession", "Rats", "Scavenger", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Count", "Counterfeit", "Cultist", "Graverobber", "Junk Dealer", "Mystic", "Pillage", "Rebuild", "Rogue", "Altar", "Hunting Grounds", "Knights", "Bandit Camp"];                                         
	
	
	var baseSetResult = [];
	var intrSetResult = [];
	var ssSetResult = [];
	var prosSetResult = [];
	var daCardsResult = [];
	
	
	var supply = [];

	var resultStrBase = "";	
	var resultStrIntr = "";
	var resultStrSS = "";
	var resultStrPros = "";
	var resultStrDA = "";

	
	
	
	if(baseCards > 0){
		
		var resultStrBase = "";
		counter = 1;
		while(counter <= baseCards){

			cardIndex = Math.floor(Math.random()*baseSet.length)
			newCard = baseSet[cardIndex];

			
			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				baseSetResult.push(newCard);
				
				if(counter < baseCards){
				
					resultStrBase = resultStrBase + newCard + ", ";
				} else if(counter == baseCards){
				
					resultStrBase = resultStrBase + newCard;
				}
				counter++;
				
				
			
			}		
		
		}

		//alert(resultStrBase);
		
		
	}
	
	
	
	if(intrCards > 0){
		
		
		counter = 1;
		while(counter <= intrCards){
		
			cardIndex = Math.floor(Math.random()*intrSet.length)
			newCard = intrSet[cardIndex];
			
			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				intrSetResult.push(newCard);
				
				if(counter < intrCards){
	
					resultStrIntr = resultStrIntr + newCard + ", ";
				} else{
	
					resultStrIntr = resultStrIntr + newCard;
				}
				
				
				counter++;

			
			}		
		
		}	

	}
	
	if(ssCards > 0){
		
		
		counter = 1;
		while(counter <= ssCards){

			cardIndex = Math.floor(Math.random()*ssSet.length)
			newCard = ssSet[cardIndex];

			
			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				ssSetResult.push(newCard);
				
				if(counter < ssCards){
	
					resultStrSS = resultStrSS + newCard + ", ";
				} else{
	
					resultStrSS = resultStrSS + newCard;
				}
				
				counter++;

				
			
			}		
		
		}

		

	}
		
	
	if(prosCards > 0){
		
		
		counter = 1;
		while(counter <= prosCards){

			cardIndex = Math.floor(Math.random()*prosSet.length)
			newCard = prosSet[cardIndex];

			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				prosSetResult.push(newCard);
				
				if(counter < prosCards){
	
					resultStrPros = resultStrPros + newCard + ", ";
				} else{
	
					resultStrPros = resultStrPros + newCard;
				}
				
				counter++;
				
			
			}		
		
		}	
	

	}
	
	if(daCards > 0){

		
		counter = 1;
		while(counter <= daCards){

			cardIndex = Math.floor(Math.random()*daSet.length)
			newCard = daSet[cardIndex];
			
			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				daCardsResult.push(newCard);
				
				if(counter < daCards){
	
					resultStrDA = resultStrDA + newCard + ", ";
				} else{
	
					resultStrDA = resultStrDA + newCard;
				}
				
				counter++;				
			
			}		
		
		}	

	}
	
	
	document.getElementById("baseArea").innerHTML = resultStrBase;
	document.getElementById("intrArea").innerHTML = resultStrIntr;
	document.getElementById("ssArea").innerHTML = resultStrSS;
	document.getElementById("prosArea").innerHTML = resultStrPros;
	document.getElementById("daArea").innerHTML = resultStrDA;

	if(resultStrBase.length > 0){
	
		resultStrBase += ", ";
	}
	if(resultStrIntr.length > 0){
	
		resultStrIntr += ", ";
	}
	if(resultStrSS.length > 0){
	
		resultStrSS += ", ";
	}
	if(resultStrPros.length > 0){
	
		resultStrPros += ", ";
	}
	if(resultStrDA.length > 0){
	
		resultStrDA += ", ";
	}
	
	var choiceSupply = resultStrBase + resultStrIntr + resultStrSS + resultStrPros + resultStrDA;
	
	var lastCharLocation = choiceSupply.length - 2; //location of the comma (there is a whitespace at the end of choiceSupply)
	var evilComma = choiceSupply.charAt(lastCharLocation);

	if(choiceSupply.charAt(lastCharLocation) == evilComma){
	
		//alert("comma found at: " + lastCharLocation + " last char: " + evilComma + " string: " + choiceSupply);
		//choiceSupply.trim();
		choiceSupply = choiceSupply.substring(0,lastCharLocation);
	
	}
	
	document.getElementById("listArea").innerHTML = choiceSupply;
	
} //end function resultGenerator
	


function crazyTime(){

	document.getElementById("testDiv").style.display = "block";
	
	var all5Set = ["Cellar", "Chapel", "Moat", "Chancellor", "Village", "Woodcutter", "Workshop", "Bureaucrat", "Feast", "Gardens", "Militia", "Moneylender", "Remodel", "Smithy", "Spy", "Thief", "Throne Room", "Council Room", "Festival", "Laboratory", "Library", "Market", "Mine", "Witch", "Adventurer","Courtyard", "Pawn", "Secret Chamber", "Great Hall", "Masquerade", "Shanty Town", "Swindler", "Wishing Well", "Baron", "Bridge", "Conspirator", "Coppersmith", "Ironworks", "Mining Village", "Scout", "Minion", "Saboteur", "Torturer", "Trading Post", "Tribute", "Upgrade", "Harem", "Nobles", "Embargo", "Haven", "Lighthouse", "Native Village", "Pearl Diver", "Ambassador", "Fishing Village", "Lookout", "Smugglers", "Warehouse", "Caravan", "Cutpurse", "Island", "Navigator", "Pirate Ship", "Salvager", "Sea Hag", "Treasure Map", "Bazaar", "Explorer", "Ghost Ship", "Merchant Ship", "Outpost", "Tactician", "Treasury", "Wharf", "Loan", "Trade Route", "Watchtower", "Bishop", "Monument", "Quarry", "Talisman", "Worker's Village", "City", "Contraband", "Counting House", "Mint", "Mountebank", "Rabble", "Royal Seal", "Vault", "Venture", "Goons", "Grand Market", "Hoard", "Bank", "Expand", "Forge", "King's Court", "Peddler", "Hermit/Madman", "Urchin/Merc.", "Poor House", "Beggar", "Squire", "Vagrant", "Forager", "Market Square", "Sage", "Storeroom", "Armory", "Death Cart", "Feodum", "Fortress", "Ironmonger", "Marauder", "Procession", "Rats", "Scavenger", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Count", "Counterfeit", "Cultist", "Graverobber", "Junk Dealer", "Mystic", "Pillage", "Rebuild", "Rogue", "Altar", "Hunting Grounds", "Knights"];                                         
	
	var baseSet = ["Cellar", "Chapel", "Moat", "Chancellor", "Village", "Woodcutter", "Workshop", "Bureaucrat", "Feast", "Gardens", "Militia", "Moneylender", "Remodel", "Smithy", "Spy", "Thief", "Throne Room", "Council Room", "Festival", "Laboratory", "Library", "Market", "Mine", "Witch", "Adventurer"];
	var intrSet = ["Courtyard", "Pawn", "Secret Chamber", "Great Hall", "Masquerade", "Shanty Town", "Swindler", "Wishing Well", "Baron", "Bridge", "Conspirator", "Coppersmith", "Ironworks", "Mining Village", "Scout", "Minion", "Saboteur", "Torturer", "Trading Post", "Tribute", "Upgrade", "Harem", "Nobles"];
	var ssSet = ["Embargo", "Haven", "Lighthouse", "Native Village", "Pearl Diver", "Ambassador", "Fishing Village", "Lookout", "Smugglers", "Warehouse", "Caravan", "Cutpurse", "Island", "Navigator", "Pirate Ship", "Salvager", "Sea Hag", "Treasure Map", "Bazaar", "Explorer", "Ghost Ship", "Merchant Ship", "Outpost", "Tactician", "Treasury", "Wharf"];
	var prosSet = ["Loan", "Trade Route", "Watchtower", "Bishop", "Monument", "Quarry", "Talisman", "Worker's Village", "City", "Contraband", "Counting House", "Mint", "Mountebank", "Rabble", "Royal Seal", "Vault", "Venture", "Goons", "Grand Market", "Hoard", "Bank", "Expand", "Forge", "King's Court", "Peddler"];
	var daSet = ["Hermit/Madman", "Urchin/Merc.", "Poor House", "Beggar", "Squire", "Vagrant", "Forager", "Market Square", "Sage", "Storeroom", "Armory", "Death Cart", "Feodum", "Fortress", "Ironmonger", "Marauder", "Procession", "Rats", "Scavenger", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Count", "Counterfeit", "Cultist", "Graverobber", "Junk Dealer", "Mystic", "Pillage", "Rebuild", "Rogue", "Altar", "Hunting Grounds", "Knights", "Bandit Camp"];                                         
		
	var supply = [];
	
	var resultStrBase = "";	
	var resultStrIntr = "";
	var resultStrSS = "";
	var resultStrPros = "";
	var resultStrDA = "";
	
	counter = 1;
	
	while(counter <= 10){

		cardIndex = Math.floor(Math.random()*all5Set.length)
		newCard = all5Set[cardIndex];

		if(!inArray(newCard,supply)){
		
			supply.push(newCard);
			
			if(inArray(newCard,baseSet)){
			
				resultStrBase += newCard + ", ";
			} else if(inArray(newCard,intrSet)){
			
				resultStrIntr += newCard + ", ";
			} else if(inArray(newCard,ssSet)){
			
				resultStrSS += newCard + ", ";
			} else if(inArray(newCard,prosSet)){
			
				resultStrPros += newCard + ", ";
			} else if(inArray(newCard,daSet)){
			
				resultStrDA += newCard + ", ";
			}
			
			counter++;
			
		
		}		
	
	}	
	
	
	var randSupply = resultStrBase + resultStrIntr + resultStrSS + resultStrPros + resultStrDA;
	
	resultStrBase = resultStrBase.trim();
	resultStrIntr = resultStrIntr.trim();	
	resultStrSS = resultStrSS.trim();
	resultStrPros = resultStrPros.trim();
	resultStrDA = resultStrDA.trim();
	
	randSupply = randSupply.trim();
	
	document.getElementById("baseArea").innerHTML = resultStrBase.substring(0,resultStrBase.length-1);
	document.getElementById("intrArea").innerHTML = resultStrIntr.substring(0,resultStrIntr.length-1);
	document.getElementById("ssArea").innerHTML = resultStrSS.substring(0,resultStrSS.length-1);
	document.getElementById("prosArea").innerHTML = resultStrPros.substring(0,resultStrPros.length-1);
	document.getElementById("daArea").innerHTML = resultStrDA.substring(0,resultStrDA.length-1);
	
	document.getElementById("listArea").innerHTML = randSupply.substring(0,randSupply.length-1);
	//alert("Supply: " + supply);
	
}


