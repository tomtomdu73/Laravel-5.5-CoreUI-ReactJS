# Laravel 5.5 + CoreUI Admin Bootstrap Template with ReactJS

A clean install of Laravel 5.5 with the CoreUI Full Bootstrap Admin Template ReactJS Version in this repo.

## Contents
Getting Started
Install from repository
Step-by-step Clean Install
1. Install Laravel
2. Add CoreUI-React repository
3. Add Dependencies
4. Add CoreUI files to Mix
5. Update CoreUI app
6. Change bootstrap import
7. Add route & view for CoreUI
8. Use the CoreUI JS
9. Fix Paths

## Getting Started
You can either download the repository directly or follow the instructions here to make your own fresh install.

### Install from repository
Download & unpack the files, navigate to the directory and run:
```
composer install
```
After it has completed, run:
```
npm install
```
Copy the example .env file:
```
cp .env.example .env
```
Generate an application key:
```
php artisan key:generate
```
Run Mix tasks:
```
npm run dev
```
View the website:
```
php artisan serve
```

### Step-by-step Clean Install
#### 1. Install Laravel with ReactJS
Inititate a new Laravel project:
```
composer create-project --prefer-dist laravel/laravel CoreUI-ReactJS
cd CoreUI-ReactJS
npm install
```
More information regarding requirements can be found [here](https://laravel.com/docs/5.5/installation)
On any fresh Laravel application, you may use the ```preset``` command with the ```react``` option to create a basic scaffold:
```
php artisan preset react
```
Next, switch to the following structure directories : *CoreUI-ReactJS/resources/assets/js*  there is one folder and two javascript files.
The folder name is components, which is react component and the second file is app.js other file is bootstrap.js
Go to the *resources/views/welcome.blade.php* file, remove the existing code and copy the following : 
```
<!-- welcome.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="example"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
```
Then run :
```
npm run dev
```
It will compile all of our assets and put bundled javascript file into the *public/js/app.js* file.
You can now see your basic ReactJS app by booting a development server
```
php artisan serve
```

#### 2. Add CoreUI-Vue repository
In *composer.json*, add a new repository after "config":
```
"repositories": [
        {
            "type": "package",
            "package": {
                "name": "mrholek/CoreUI-React",
                "version": "dev-master",
                "dist": {
                    "url": "https://github.com/mrholek/CoreUI-React/archive/master.zip",
                    "type": "zip"
                }

            }
        }
    ]
```
And then require it:
```
"require": {
    "php": ">=7.0.0",
    "fideloper/proxy": "~3.3",
    "laravel/framework": "5.5.*",
    "laravel/tinker": "~1.0",
    "mrholek/CoreUI-React": "dev-master"
},
```
Run ```composer update``` to add these packages. At this point the CoreUI files should be in ```vendor/mrholek/CoreUI-Vue/```

#### 3. Add Dependencies
In *package.json*, update your devDependencies and dependencies to have the following: 
```
  "devDependencies": {
    "axios": "^0.17",
    "babel-preset-react": "^6.23.0",
    "cross-env": "^5.1",
    "jquery": "^3.2",
    "laravel-mix": "^1.0",
    "lodash": "^4.17.4"
  },
  "dependencies": {
    "react-number-format": "^3.1.3",
    "bootstrap": "4.0.0",
    "chart.js": "2.7.1",
    "flag-icon-css": "2.9.0",
    "font-awesome": "4.7.0",
    "history": "4.7.2",
    "react": "16.2.0",
    "react-chartjs-2": "2.7.0",
    "react-dom": "16.2.0",
    "react-router-dom": "4.2.2",
    "react-transition-group": "2.2.1",
    "reactstrap": "5.0.0-alpha.4",
    "simple-line-icons": "2.4.1"
  }
```
Run ```npm update```

#### 4. Add CoreUI files to Mix
Copy the following content to your *webpack.mix.js*:
```
let mix = require('laravel-mix');

// var coreui_vendor = 'vendor/mrholek/CoreUI-React/React_Full_Project';
// mix.copyDirectory(coreui_vendor + '/public/img', 'public/public/img')
//     .copyDirectory(coreui_vendor + '/scss', 'resources/coreui/scss')
//     .copyDirectory(coreui_vendor + '/src', 'resources/coreui/src');
    
mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');     
```
Then run :
```
npm run dev
```
the coreui directory will appear in resources

#### 5. Update CoreUI app
In */resources/assets/sass/app.scss* comment out existing lines and add in our package fonts + coreui style.
```
// Fonts
//@import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600");

// Variables
//@import "variables";

// Bootstrap
//@import "~bootstrap-sass/assets/stylesheets/bootstrap";

// Fonts
@import "~font-awesome/scss/font-awesome"; // Font Awesome
@import "~simple-line-icons/scss/simple-line-icons"; // Simple Line Icons

// CoreUI Style
@import "../../coreui/scss/style";
```

#### 6. Change bootstrap import
In *resources/coreui/scss/style.scss* make sure you have this content:
```
// Override Boostrap variables
@import "bootstrap-variables";

// Import Bootstrap source files
@import "node_modules/bootstrap/scss/bootstrap";

// Override core variables
@import "core-variables";

// Import core styles
@import "core/core";

// Custom styles
@import "custom";
```


#### 7. Check route and update welcome.blade.php

Make sure you have the route welcome set in routes/web.php file:
```
Route::get('/', function () {
    return view('welcome');
});
```

In your *resources/views/welcome.blade.php*, replace all the content with this one : 
```
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel - CoreUI Example</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <!-- BODY options, add following classes to body to change options

    // Header options
    1. '.header-fixed'                  - Fixed Header

    // Sidebar options
    1. '.sidebar-fixed'                 - Fixed Sidebar
    2. '.sidebar-hidden'                - Hidden Sidebar
    3. '.sidebar-off-canvas'        - Off Canvas Sidebar
    4. '.sidebar-compact'               - Compact Sidebar Navigation (Only icons)

    // Aside options
    1. '.aside-menu-fixed'          - Fixed Aside Menu
    2. '.aside-menu-hidden'         - Hidden Aside Menu
    3. '.aside-menu-off-canvas' - Off Canvas Aside Menu

    // Footer options
    1. '.footer-fixed'                      - Fixed footer

    -->
</head>
<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
    <div id="root"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
```

#### 8. Use the CoreUI JS
In *resources/assets/js/app.js* replace the existing code by this one:
```
import React from 'react';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* Import the Main component */
require('../../coreui/src/index.js');
```

#### 9. Fix Paths
Run Mix tasks, copying over CoreUI files:
```
npm run dev
```
At this point Mix will fail, as some of the paths need to be changed.

In */resources/coreui/scss/core/_variables.scss*, change the logo paths to:
```
$navbar-brand-logo:                   url('/public/img/logo.png') !default; 
$navbar-brand-minimized-logo:         url('/public/img/logo-symbol.png') !default; 
```
Now the build should be successful with ```npm run dev``` and the CorUI dashboard should be visible in your localhost.

#### 10. Clean the URL 
To eliminate those annoying '#' symbols from the browser URL, go to /resource/coreui/src/index.js and use BrowserRouter instead of HashRouter : 
```
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </Router>
), document.getElementById('root'));
```

#### 11. Comment out the CoreUI mix copies
To avoid overwriting our changes, comment out the copies in webpack.mix.js:
```
/*
// Copy over the CoreUI Assets into separate coreui directories
var coreui_vendor = 'vendor/mrholek/CoreUI-Vue/Vue_Full_Project';
mix.copyDirectory(coreui_vendor + '/static/img', 'public/static/img')
    .copyDirectory(coreui_vendor + '/scss', 'resources/coreui/scss')
    .copyDirectory(coreui_vendor + '/src', 'resources/coreui/src');
*/
```

#### 12. Run Mix and Serve
At this point, running the following should not have any errors:
```
npm run dev
php artisan serve
```

## Authors

* **Thomas Cosialls** - *Update to ReactJS version of CoreUI* - [Thomas Cosialls](https://github.com/tomtomdu73)

## Credit

* **Derek Au** - *Thanks for his initila tuto about [CoreUI Vue version](https://github.com/derekphilipau/laravel-5.5-coreui-vue-separated/blob/master/Readme.md)* - [Derek Au](https://github.com/derekphilipau)
