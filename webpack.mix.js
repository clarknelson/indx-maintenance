let mix = require('laravel-mix');

mix.js('src/scripts/homeVideo.js', 'web/js');
mix.js('src/scripts/global.js', 'web/js');
mix.sass('src/styles/global.scss', 'web/styles');