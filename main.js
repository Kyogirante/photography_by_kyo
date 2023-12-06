document.getElementById("praise_text").innerHTML=configs.praise_texts[Math.round(Math.random() * configs.praise_texts.length - 1)];
document.getElementById("post_image").src=images_config.get(now_post_image)[Math.round(Math.random() * images_config.get(now_post_image).length - 1)]

function change_function(){
    var index = Math.round(Math.random() * (configs.praise_texts.length - 1));
    console.log(index);
    document.getElementById("praise_text").innerHTML=configs.praise_texts[index];
    var length = images_config.get(now_post_image).length
    var post_index = Math.round(Math.random() * (length - 1))
    console.log(post_index)
    console.log(images_config.get(now_post_image)[post_index])
    document.getElementById("post_image").src=images_config.get(now_post_image)[post_index]
}
