
let counter = 3;

function upvote(){
    counter = counter + 1;
    document.getElementById("votes").innerHTML = counter + " " + "votes";
}

function downvote(){
    counter = counter - 1;
    document.getElementById("votes").innerHTML = counter + " " + "votes";
}

let orderList = document.getElementById("orders");

function newOrder(){
    let marinara = document.createElement("li");
marinara.innerHTML = "1 x Marinara Pizza";
orderList.appendChild(marinara);
}

let readyList = document.getElementById("ready");

function readyOrder(){
    let margherita = document.getElementById("margherita");
orderList.removeChild(margherita);
readyList.appendChild(margherita);

}
