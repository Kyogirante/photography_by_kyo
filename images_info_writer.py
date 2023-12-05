#!/bin/env python
# -*- encoding=utf8 -*
import os

def get_result_file():
    python_file_dir = os.path.dirname(os.path.realpath(__file__))
    return os.path.join(python_file_dir, "images_configs.js")


def write_info_to_file(files_map):
    result_f = open(get_result_file(), "w")
    result_f.write("var images_config = new Map([" + "\n")

    result_dir_contents = []
    first_dir = 1
    for dir_name, file_paths in files_map.items():
        if len(file_paths) != 0:
            if not first_dir:
                result_f.write(",\n")
            else:
                first_dir = 0
            result_f.write("    [" + "'" + dir_name + "'" + ", " + "[" + "\n")
            result_dir_contents.append(dir_name)
            first_line = 1
            for file_path in file_paths:
                if not first_line:
                    result_f.write(",\n")
                else:
                    first_line = 0
                result_f.write("        " + "\'" + file_path + "\'")
            result_f.write("\n    ]]")
    result_f.write("\n])\n")
    print(result_dir_contents)

    result_f.write("\n")

    result_f.write("var images_combo_config = [\n")
    first_content = 1
    for result_dir_content in result_dir_contents:
        if not first_content:
            result_f.write(",\n")
        else:
            first_content = 0
        result_f.write("    " + "\'" + result_dir_content + "\'")
    result_f.write("\n]")
    result_f.close()
