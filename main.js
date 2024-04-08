const getColor =()=>{
    const randomColor=Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomColor.toString(16);
    // console.log(randomCode)
    document.body.style.backgroundColor=randomCode;
    document.getElementById("random-code").innerText=randomCode;
    // navigator.clipboard.writeText(randomCode)
}
document.getElementById("color").addEventListener(
    "click",
    getColor
)
//initial call.
getColor();