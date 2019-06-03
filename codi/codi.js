/*The parameter passed for function is the state of match. False isn't started the match, true yes*/
window.onload = function()
{
    eventsButtons(false);
}

//Functions for disabled buttons at initial game
function eventsButtons(started)
{
    let card = document.getElementById("carta");
    let stop = document.getElementById("atura");
    let start = document.getElementById("partida");
    
    if(!started)
    {
        card.style.opacity = 0.5;
        card.setAttribute("disabled","true");

        stop.style.opacity = 0.5;
        stop.setAttribute("disabled","true");

        start.addEventListener("click",match);    
    }
    else
    {
        card.style.opacity = 1;
        card.removeAttribute("disabled");
        card.addEventListener("click",giveCard);

        stop.style.opacity = 1;
        stop.setAttribute("disabled","false");

        start.style.opacity = 0.5;
        start.setAttribute("disabled","true");
        start.removeEventListener("click",match);
    }
    
}
//In match
function match()
{
    eventsButtons(true);
    
}

//give Card
function giveCard()
{
    let characterCard = ['b','c','e','o'];
    let numberCard = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    let character = randomLetter();
    let number = randomNumber();
    
    showCard(characterCard[character],numberCard[number]);
}

//Random letter of card
function randomLetter()
{
    return Math.floor(Math.random()*4);
}
//Random number of card
function randomNumber()
{
    return Math.floor(Math.random()*12);
}
//Function for show the card
function showCard(character,number)
{
    let cards = document.getElementById("cartes");
    let backCard = document.getElementById("carta01");
    let valueImage = backCard.getAttribute("src");
    let arrayCardsOnTable = new Array();
    let resultCard = character+number;
    if(valueImage == "imatges/back.png")
    {
        backCard.src = "imatges/"+resultCard+".png";
        arrayCardsOnTable.push(resultCard);
    }
    else
    {
        if(arrayCardsOnTable.indexOf(resultCard) == -1)
        {
            let image = document.createElement("img");
            image.src = "imatges/"+resultCard+".png";
            arrayCardsOnTable.push(resultCard);
            cards.appendChild(image);
        }
        else
        {
            while(arrayCardsOnTable.indexOf(resultCard) != -1)
            {
                character = randomLetter();
                number = randomNumber();
                let image = document.createElement("img");
                image.src = "imatges/"+resultCard+".png";
                arrayCardsOnTable.push(resultCard);
                cards.appendChild(image);
            }
        }
        
    }
}