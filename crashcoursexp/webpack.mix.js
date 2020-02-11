const mix = require('laravel-mix'); // you need the laravel mix instance
// const MixGlob = require('laravel-mix-glob');
// const mixGlob = new MixGlob({mix}); // mix is required

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
//
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// mixGlob.sass('resources/sass/**/*.scss', 'public/css', { outputStyle: 'expanded' }, {
//     base: 'resources/sass/'
// }).js(['resources/js/**/*.{js,jsm}', '!resources/js/secondPattern/**/*'], 'public/js/', null, {
//     base: 'resources/js/'
// });
