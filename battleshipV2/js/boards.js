window.onload = init;

/************************************************************
	something temporary*/
var xBoat=[2,3,4,5,6];
var yBoat=5;
var p1= new Player(xBoat,yBoat);
/************************************************************
*
*/
function init() {
	var playerTable = document.createElement("table");
	var progressTable = document.createElement("table");

	playerTable.className = "player";
	progressTable.className = "prog";

	document.body.appendChild(playerTable);
	document.body.appendChild(progressTable);

	playerTable.innerHTML = makeTable();
	progressTable.innerHTML = makeTable();

	var carrier = document.getElementsByTagName("td");

	//carrier[10].style.backgroundImage = "url('myCarrier/carrier1.jpg')";
	/*
	var j = 1;
	for(var i=10; i<60; i+=10) {
		carrier[i].style.backgroundImage = "url('myCarrier/carrier" + (j++) + ".jpg')";
	}*/

}

function makeTable() {
	var NUM_COLS_ROWS = 10;
	var counter = 0;
	var table = "";//"<table>";

	table = makeTableHeads(table);

	for(var i=0; i<NUM_COLS_ROWS; i++) {
		table += "<tr>";
		for(var j=0; j<NUM_COLS_ROWS; j++) {
			table += "<td id='e" + (counter+1) + "'onclick='mouseClick("+(i+1)+','+(j+1)+")'></td>";
			counter++;
		}
		table += "</tr>";
	}
	//table += "</table>";

	return table;
}

function makeTableHeads(element) {
	element += "<tr>";
	for(var i=0; i<10; i++) {
		element += "<td class='table-headers'>"+ (i+1) +"</td>";
	}

	element += "</tr>";

	return element;
}

function mouseClick(x,y){ //identifies the x-position and the y-position when player clicks on a cell. 
	console.log(x,y);
	checkHit(x,y,p1);
}


function checkHit(x,y,p){
	for(var i=0;i<p.xp.length;i++)
	{
		if(x===(p.xp[i])&&y===p.yp){
			document.getElementById('console').innerHTML='HIT! at ('+x+','+y+')';
			document.getElementById('console').style.color= 'green';
			console.log("HIT");
			break;
		}else{
			document.getElementById('console').innerHTML='MISS! at ('+x+','+y+')';
			document.getElementById('console').style.color= 'red';
			console.log("MISS");
		}
	}
}

function Player(xBoat1, yBoat){
	this.xp=[5];
	for(var i=0;i<5;i++)
	{
		this.xp[i]=xBoat1[i];
	}
	this.yp=yBoat;
}