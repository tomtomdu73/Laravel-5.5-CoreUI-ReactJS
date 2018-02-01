let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var coreui_vendor = 'vendor/mrholek/CoreUI-React/React_Full_Project';
mix.copyDirectory(coreui_vendor + '/public/img', 'public/public/img')
    .copyDirectory(coreui_vendor + '/scss', 'resources/coreui/scss')
    .copyDirectory(coreui_vendor + '/src', 'resources/coreui/src');
    
mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');  