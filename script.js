
function changeColor() {
    const x=document.querySelector(".image1");
    const y=document.querySelector(".image2");
    var a=Math.floor((Math.random() * 6) + 1);
    var b=Math.floor((Math.random() * 6) + 1);
    var s1="dice"+a+".png";
    var s2="dice"+b+".png";
    x.src=s1;
    y.src=s2;
    const z=document.querySelector("#heading");
    if(a>b)
    z.innerHTML="Player 1 wins";
    else if(a<b)
    z.innerHTML="Player 2 wins";
    else 
    z.innerHTML="Draw";

}