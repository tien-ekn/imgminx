# imgminx

Simple, one-line command to optimize images (.jpeg and .png) in the current directory and generate WebP format for them. No configuration. No hassle. Only require NodeJs.

## Usage

You can use this package via NPX. In your terminal, simply go to the directory where your images live and run the following command:

```bash
npx imgminx
```

## How it works

This script uses `imagemin` with `imagemin-mozjpeg`, `imagemin-pngquant` and `imagemin-webp` plugins to reduce size of `jpeg` and `png` images, overriding the files in place, and generate a `webp` version for each of the them.