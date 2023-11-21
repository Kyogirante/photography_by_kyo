document.getElementById("praise_text").innerHTML=configs.praise_texts[Math.round(Math.random() * configs.praise_texts.length - 1)];

function change_function(){
    var index = Math.round(Math.random() * configs.praise_texts.length - 1)
    console.log(index)
    console.log(location.pathname)
    document.getElementById("praise_text").innerHTML=configs.praise_texts[index];
}