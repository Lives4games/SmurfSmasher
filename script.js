let smurfs = 0;
let totalSmurfs = 0;
let hammerPrice = 10;
let stretcherPrice = 50;
let coasterPrice = 250;
let snatcherPrice = 1000;
let femurPrice = 5000;
let smurfsPerHammer = 1;
let smurfsPerFifthSecond =0;

let hammerLevel =0;
let stretcherLevel=0;
let coasterLevel=0;
let snatcherLevel=0;
let femurLevel=0;
let coasterBought = false;
let hammerBought = false;
let stretcherBought = false;
let snatcherBought = false;
let femurBought = false;

document.getElementById("smurf").addEventListener("click",switchImage);
document.getElementById("hammerButton").addEventListener("click",hammerClicked);
document.getElementById("stretcherButton").addEventListener("click",stretcherClicked);
document.getElementById("coasterButton").addEventListener("click",coasterClicked);
document.getElementById("snatcherButton").addEventListener("click",snatcherClicked);
document.getElementById("femurButton").addEventListener("click",femurClicked);

myInterval = setInterval(changeNum, 200);
document.getElementById("smurf").style.width="500px";
document.getElementById("smurf").style.height="500px";

function femurClicked(){
    if(smurfs >= femurPrice){
        smurfs-=femurPrice;
        femurPrice *= 2.13;
        femurPrice = Math.round(femurPrice);
        smurfsPerFifthSecond+=200;
        document.getElementById("femurButton").src="femurClicked.png";
        setTimeout (switchFBack,100);
        femurLevel++;
        if(!femurBought){
            femurBought = true;
            document.getElementById("femurGIF").src="SmurfLeg.gif";
        }
    }
}

function snatcherClicked(){
    if(smurfs >= snatcherPrice){
        smurfs-=snatcherPrice;
        snatcherPrice *= 2.03;
        snatcherPrice = Math.round(snatcherPrice);
        smurfsPerFifthSecond+=50;
        document.getElementById("snatcherButton").src="snatcherClicked.png";
        setTimeout (switchSSBack,100);
        snatcherLevel++;
        if(!snatcherBought){
            snatcherBought = true;
            document.getElementById("snatcherGIF").src="SmurfSqueezer.gif";
        }
    }
}

function coasterClicked(){
    if(smurfs >= coasterPrice){
        smurfs-=coasterPrice;
        coasterPrice *= 1.98;
        coasterPrice = Math.round(coasterPrice);
        smurfsPerFifthSecond+=5;
        document.getElementById("coasterButton").src="coasterClicked.png";
        setTimeout (switchCBack,100);
        coasterLevel++;
        if(!coasterBought){
            coasterBought = true;
            document.getElementById("coasterGIF").src="coaster.gif";
        }
    }
}

function stretcherClicked(){
    if(smurfs >= stretcherPrice){
        smurfs-=stretcherPrice;
        stretcherPrice *= 1.85;
        stretcherPrice = Math.round(stretcherPrice);
        smurfsPerFifthSecond++;
        document.getElementById("stretcherButton").src="stretcherClicked.png";
        setTimeout (switchSBack,100);
        stretcherLevel++;
        if(!stretcherBought){
            stretcherBought = true;
            document.getElementById("stretcherGIF").src="FallingOut.gif";
        }
    }
}

function hammerClicked(){
    if(smurfs >= hammerPrice){
        smurfs-=hammerPrice;
        hammerPrice *= 1.15;
        hammerPrice = Math.round(hammerPrice);
        smurfsPerHammer++;
        document.getElementById("hammerButton").src="HammerClicked.png";
        setTimeout (switchHBack, 100);
        hammerLevel++;
        if(!hammerBought){
            hammerBought = true;
            document.getElementById("hammerGIF").src="hammer.gif";
        }
    }
}

function changeNum(){
    document.getElementById("num").innerHTML = "Smurfs Smashed = " + smurfs;
    document.getElementById("tNum").innerHTML = "Total Smurfs Smashed = " + totalSmurfs;
    document.getElementById("hammerPrice").innerHTML = hammerPrice + " smurfs";
    document.getElementById("stretcherPrice").innerHTML = stretcherPrice + " smurfs";
    document.getElementById("coasterPrice").innerHTML = coasterPrice + " smurfs";
    document.getElementById("snatcherPrice").innerHTML = snatcherPrice + " smurfs";
    document.getElementById("femurPrice").innerHTML = femurPrice + " smurfs";

    document.getElementById("hammerL").innerHTML = "Level: " + hammerLevel;
    document.getElementById("stretcherL").innerHTML = "Level: " + stretcherLevel;
    document.getElementById("coasterL").innerHTML = "Level: " + coasterLevel;
    document.getElementById("snatcherL").innerHTML = "Level: " + snatcherLevel;
    document.getElementById("femurL").innerHTML = "Level: " + femurLevel;
    smurfs+=smurfsPerFifthSecond;
    totalSmurfs+=smurfsPerFifthSecond;
}

function switchImage(){
    document.getElementById("smurf").src="SmurfHit.png";
    smurfs+=smurfsPerHammer;
    totalSmurfs+=smurfsPerHammer;
    setTimeout (switchBack, 100);
}

function switchBack(){
    document.getElementById("smurf").src="png-clipart-grouchy-smurf-smurfette-gutsy-smurf-papa-smurf-the-smurfs-smurfs-face-head-removebg-preview.png";
}

function switchHBack(){
    document.getElementById("hammerButton").src="Hammer.png";
}

function switchSBack(){
    document.getElementById("stretcherButton").src="stretcher.png";
}

function switchCBack(){
    document.getElementById("coasterButton").src="coaster.png";
}

function switchSSBack(){
    document.getElementById("snatcherButton").src="snatcher.png";
}

function switchFBack(){
    document.getElementById("femurButton").src="femur.png";
}