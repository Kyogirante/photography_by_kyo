var now_pose_image=get_query_param("id")

document.getElementById("praise_text").innerHTML=configs.praise_texts[Math.round(Math.random() * configs.praise_texts.length - 1)];
document.getElementById("pose_image").src=images_config.get(now_pose_image)[Math.round(Math.random() * images_config.get(now_pose_image).length - 1)]

console.log(now_pose_image)

function change_function(){
    var index = Math.round(Math.random() * (configs.praise_texts.length - 1));
    console.log(index);
    document.getElementById("praise_text").innerHTML=configs.praise_texts[index];
    var length = images_config.get(now_pose_image).length
    var pose_index = Math.round(Math.random() * (length - 1))
    console.log(pose_index)
    console.log(images_config.get(now_pose_image)[pose_index])
    document.getElementById("pose_image").src=images_config.get(now_pose_image)[pose_index]
}

function get_query_param(variable) {
    //获取当前URL中的查询字符串部分（即问号后面的部分）
    var query = window.location.search.substring(1);
    //把查询字符串按照&符号分割成数组
    var vars = query.split("&");
    //遍历数组中的每个元素
    for (var i = 0; i < vars.length; i++) {
      //把当前元素按照=符号分割成键和值
      var pair = vars[i].split("=");
      //如果当前元素的键等于参数名，则返回对应的值
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    //如果没有找到匹配的参数名，则返回false
    return false;
  }
