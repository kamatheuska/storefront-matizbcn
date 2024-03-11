#!/bin/bash

# Specify the folder path
folder_path="./tmp"
# Check if the folder exists
if [ -d "$folder_path" ]; then
    # List all filenames in the folder and output them
    echo "Filenames in $folder_path:"
    for file in "$folder_path"/*; do
        # Extract only the filename from the full path
        filename=$(basename "$file")

        # Remove "?v=" and numbers at the end of the filename
        new_filename=$(echo "$filename" | sed 's/\?v=[0-9]*$//')

        # Rename the file
        mv "$file" "$folder_path/$new_filename"
        echo "Renamed: $filename -> $new_filename"
    done
else
    echo "Error: Folder $folder_path does not exist."
fi