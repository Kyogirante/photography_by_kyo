#!/bin/env python
# -*- encoding=utf8 -*

import os

from images_info_writer import write_info_to_file

target_dir = "src/assets"


def is_target_dir(dir_path):
    return os.path.isdir(dir_path)


def is_target_image(file_path: str):
    return file_path.endswith('.jpg') or file_path.endswith('.png') or file_path.endswith('.jpeg')


def list_dir(target_path_name):
    result_map = {}

    for dir_name in os.listdir(target_path_name):
        dir_path = os.path.join(target_path_name, dir_name)
        if is_target_dir(dir_path):
            dir_images_list = []
            for file_path in os.listdir(dir_path):
                if is_target_image(file_path):
                    dir_images_list.append(os.path.join(dir_path, file_path))
            if len(dir_images_list) != 0:
                result_map[dir_name] = dir_images_list
    return result_map


if __name__ == "__main__":
    target_files_map = list_dir(target_dir)
    print(target_files_map)
    write_info_to_file(target_files_map)

