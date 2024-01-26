#!/usr/bin/env node

import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import { glob } from "glob";

(async () => {
  const files = glob.sync("*.{jpg,jpeg,png}");

  await Promise.all(
    files.map(async (file) => {
      await imagemin([file], {
        destination: "./",
        plugins: [imageminWebp({ quality: 80 })],
      });

      console.log(`${file} webp was generated!`);

      await imagemin([file], {
        destination: "./",
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ],
      });

      console.log(`${file} was optimized!`);
    })
  );
})();
