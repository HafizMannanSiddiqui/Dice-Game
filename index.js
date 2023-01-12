var val = Math.floor(Math.random() * 5) + 1;

var random_img = "dice" + val + ".png";

var image_source = "images/" + random_img;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", image_source);

var val1 = Math.floor(Math.random() * 5) + 1;

var random_img = "dice" + val1 + ".png";

var image_source = "images/" + random_img;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", image_source);

if (val > val1){
    document.querySelector("h2").innerHTML = "Player1 wins🏁";
}
else if(val < val1)
{
    document.querySelector("h2").innerHTML = "Player2 wins🏁";
}
else {
    document.querySelector("h2").innerHTML = "Draw🤝";
}

