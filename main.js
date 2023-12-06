// 获取需要添加按钮的父元素
var parent = document.getElementById("button_container");

buttonArray = []

// 循环创建多个按钮
for (var i = 0; i < images_combo_config.length; i++) {
    // 创建新的按钮元素
    var newButton = document.createElement("button");

    // 设置按钮的文本内容和属性
    var button_id = images_combo_config[i];
    newButton.innerHTML = button_id;
    newButton.setAttribute("id", button_id);
    newButton.setAttribute("style", "width: 400px; height: 50px; background-color: #2768f0; border: 0px;color: white; font-weight: bold; display: block; margin:20px auto;")
    newButton.addEventListener("click", function(event) {
        change_post(event.target.id)
    })
    // 将按钮添加到数组中
    buttonArray.push(newButton);
}

// 将按钮数组添加到父元素中
for (var j = 0; j < buttonArray.length; j++) {
  parent.appendChild(buttonArray[j]);
}

function change_post(id){
    console.log("click " + id)
    window.location.href='post.html?id=' + id
}
