#!/bin/env python
# -*- encoding=utf8 -*

import os

target_dir = "src/assets"
compress_command = "sips -Z 1200 {}"


def is_target_dir(dir_path):
    return os.path.isdir(dir_path)


def is_target_image(file_path: str):
    return file_path.lower().endswith('.jpg') or file_path.lower().endswith('.png') or file_path.lower().endswith('.jpeg')


def list_dir(target_path_name):
    image_path_list = []
    for dir_name in os.listdir(target_path_name):
        dir_path = os.path.join(target_path_name, dir_name)
        if is_target_dir(dir_path):
            for file_path in os.listdir(dir_path):
                if is_target_image(file_path):
                    image_path_list.append(os.path.join(dir_path, file_path))
    return image_path_list


if __name__ == "__main__":
    image_path_list = list_dir(target_dir)
    print(image_path_list)
    for image_path in image_path_list:
        print("compress: " + image_path)
        os.popen(compress_command.format(image_path))

    print("done: " + str(len(image_path_list)))
