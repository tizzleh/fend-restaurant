 # Use a simple shell loop, to process each of the images.
 # https://www.imagemagick.org/Usage/basics/#convert
  mkdir thumbnails
  for f in *.jpg
  do   convert $f -thumbnail 200 200/200-$f
  done
