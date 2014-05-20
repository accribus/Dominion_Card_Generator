
	var baseCardsGlobal = 0;
	var intrCardsGlobal = 0;
	var ssCardsGlobal = 0;
	var prosCardsGlobal = 0;
	var daCardsGlobal = 0;


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
	//alert("Total: " + cardTotal);	
	//alert("base: " + baseCards + " intr: " + intrCards + " ss: " + ssCards + " pros: " + prosCards + " da: " + daCards);
	
	
	
	if (cardTotal != 10){
	
		alert("Please enter valid numerical values only (field values from 1-10), totalling 10 cards.  Currently, card total is: " + cardTotal);
		var baseCards = 0;
		var intrCards = 0;
		var ssCards = 0;
		var prosCards = 0;
		var daCards = 0;
	
	}
	
	//alert("base: " +baseCards +" intr: " +intrCards +" ss: " +ssCards +" pros: " +prosCards +" da: " +daCards);
	
	resultGenerator(baseCards, intrCards, ssCards, prosCards, daCards); //sends values to next function resultGenerator
}

function inArray(cardName,arr)
{
    var arrLength=arr.length;
	
    for(var i=0; i < arrLength; i++){
	
        if(arr[i]==cardName){return true;}
    }
    return false;
}

function resultGenerator(b, i, s, p, d){

	//alert("enter resultGenerator");

	var baseCards = b;
	var intrCards = i;
	var ssCards = s;
	var prosCards = p;
	var daCards = d;
	
	
	var baseSet = ["Cellar", "Chapel", "Moat", "Chancellor", "Village", "Woodcutter", "Workshop", "Bureaucrat", "Feast", "Gardens", "Militia", "Moneylender", "Remodel", "Smithy", "Spy", "Thief", "Throne Room", "Council Room", "Festival", "Laboratory", "Library", "Market", "Mine", "Witch", "Adventurer"];
	var intrSet = ["Courtyard", "Pawn", "Secret Chamber", "Great Hall", "Masquerade", "Shanty Town", "Swindler", "Wishing Well", "Baron", "Bridge", "Conspirator", "Coppersmith", "Ironworks", "Mining Village", "Scout", "Minion", "Saboteur", "Torturer", "Trading Post", "Tribute", "Upgrade", "Harem", "Nobles"];
	var ssSet = ["Embargo", "Haven", "Lighthouse", "Native Village", "Pearl Diver", "Ambassador", "Fishing Village", "Lookout", "Smugglers", "Warehouse", "Caravan", "Cutpurse", "Island", "Navigator", "Pirate Ship", "Salvager", "Sea Hag", "Treasure Map", "Bazaar", "Explorer", "Ghost Ship", "Merchant Ship", "Outpost", "Tactician", "Treasury", "Wharf"];
	var prosSet = ["Loan", "Trade Route", "Watchtower", "Bishop", "Monument", "Quarry", "Talisman", "Worker's Village", "City", "Contraband", "Counting House", "Mint", "Mountebank", "Rabble", "Royal Seal", "Vault", "Venture", "Goons", "Grand Market", "Hoard", "Bank", "Expand", "Forge", "King's Court", "Peddler"];
	var daSet = ["Hermit/Madman", "Urchin/Merc.", "Poor House", "Beggar", "Squire", "Vagrant", "Forager", "Market Square", "Sage", "Storeroom", "Armory", "Death Cart", "Feodum", "Fortress", "Ironmonger", "Marauder", "Procession", "Rats", "Scavenger", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Count", "Counterfeit", "Cultist", "Graverobber", "Junk Dealer", "Mystic", "Pillage", "Rebuild", "Rogue", "Altar", "Hunting Grounds", "Knights"];                                         

	/**************************TEST CODE****************************************/
	//alert(baseCards)
	//var testArrStr = toString(baseSet);
	//alert(baseSet[0]);
	//alert(prosSet);
	/*alert(toString(intrSet));
	alert(toString(ssSet));
	alert(toString(prosSet));
	alert(toString(daSet));*/
	/***************************************************************************/
	
	
	var baseSetResult = [];
	var intrSetResult = [];
	var ssSetResult = [];
	var prosSetResult = [];
	var daCardsResult = [];
	
	
	var supply = [];
	
	if(baseCards > 0){
		//alert("enter if");
		bcCounter = 1;
		for(var i = 1; i <= baseCards; i++){
		
			//alert("enter for, baseSet: " + baseSet.length + supply);
			//alert("enter for, baseSet: " + baseSet.length);
			cardIndex = Math.floor(Math.random()*baseSet.length)
			newCard = baseSet[cardIndex];
			//alert("New card: " + newCard);
			//alert(baseSet[cardIndex]);
			
			if(!inArray(newCard,supply)){
			
				supply.push(newCard);
				bcCounter++;
				//alert("card placed in supply: " + baseSet[i]);
				//alert("card placed in supply: " + newCard);
				
			
			}		
		
		}	
	
		alert("Supply after loop: " + supply);
		
	}
	


}









