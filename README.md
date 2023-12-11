# 第一步，添加pose照
将拍照pose照片放在工程src/assets/目录下，**注意该目录下仅有一级目录，不允许有目录中包含目录的情况**，否则脚本扫描不出来

# 第二步，提交底片
git commit提交记录，保留原片

# 第三步，压缩图片
运行工程的batch_compresser.py脚本，压缩pose照片

# 第四步，生成目录信息
运行工程的pose_images_praser.py脚本，生产pose照片静态信息

# 第五步，打开网址
打开https://kyogirante.github.io/photography_by_kyo/网址，浏览pose照