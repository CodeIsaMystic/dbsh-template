<div align="center">


<a href="#">
  <img
    height="60"
    width="240"
    alt="dbsh-logo"
    src="app/assets/img/icons/logo-dbsh--light.svg"
  />
</a>


<p>A simple page's template introducing a personal trainer, could be useful to any professional activity, introducing a local professional having a window open to the web. This is a single page application but can easily be upgraded to multi-pages, with more functionalities...</p>

<br />

<a href="#">
  <img
    height="634"
    width="928"
    alt="screen of dbsh single page"
    src="app/project-mockup/screen-dbsh.png"
  />
</a>

<br />

<h1 align="left">D.B.S.H Template</h1>

</div>

## Getting Started

The D.B.S.H is a frontend project, built in HTML5/CSS3 and Native Javascript, this simplified template was made on the purpose to practice and develop some professionals code in a professionnal mode and environment. 
This project was thought with a potential client who does not needed so much applications for his website but after all a simple window to the web, just like a portfolio. Getting some more contacts, to store on a database, this frontend theme could be linked to a combo "PHP/SQL" backend but maybe, more efficiently it could be handled with javascript in a JAM Stack app with node, express and a database.


[Visit the website here](https://dbsh69.netlify.app/)


### Developing

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

```shell
git clone https://github.com/CodeIsaMystic/DB-sportsandevents
cd name-of-your-app-folder
npm install
```

You can now run the frontend on your `localhost`.

```shell
npm run dev
```



## Design & CSS

### B.E.M Methodology and Atomic Design

The B.E.M Methodology, the S.M.A.CSS files architecture and some notions of moder web design was used here on this project. It was a nice way to learn and practice those techniques with this project not so large...


### Style Guide

<div align="center">

  <img
    height="1591"
    width="680"
    alt="image content exposing the main styles guide"
    src="app/project-mockup/dbsh-style-guide.png"
  />

<br />

</div>



## Dependencies, Plugins & Loaders

### Webpack, Babel, PostCSS...

I used on this project some of the most populars node packages to my workflow, you can easily have a look on package.json file. All the configuration, settings and scripts are defined on the webpack.config.js

#### Webpack: 
  A static module bundler for modern JavaScript applications. Processing your application, it internally 
  builds a dependency graph which maps every module your project needs and generates one or more bundles.

    Core Concepts:
      . Entry
      . Output
      . Loaders
      . Plugins
      . Mode
      . Browser Compatibility




  NPM Packages:

    . webpack-cli: the command line interface.

    . webpack-dev-server : used to quickly develop an application. See the development guide to get started. 

    . html-webpack-plugin : that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

    . clean-webpack-plugin : this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.





#### Babel:
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible
  version of JavaScript in current and older browsers or environments. 

    . @babel/core :  Babel compiler core.

    . @babel/preset-env : A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 
      This both makes your life easier and JavaScript bundles smaller!

    . babel-loader : This package allows transpiling JavaScript files using Babel and webpack.



#### PostCSS:
  A tool for transforming CSS with Javascript.
    
    . postcss-loader : loader to process Css using postCSS.

    . postcss-mixins : plugin for mixins.

    . postcss-nested : plugin to unwrap nested rules like how Sass does it.

    . postcss-simple-vars : plugin for Sass-like variables.

    . postcss-hexrgba : plugin that adds shorthand hex methods to rgba() values.

    . postcss-imports : this plugin can consume local files, node modules or web_modules. 

    . autoprefixer : A plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. Write your CSS rules without vendor prefixes...


### Additionals plugins & loader
  1. Mini CSS extract plugin:

    Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
    (It builds on top of a new webpack v4 feature and requires webpack 4 to work)

  2. CSS nano:
    
    cssnano takes your nicely formatted CSS and runs it through many focused optimisations, to ensure that 
    the final result is as small as possible for a production environment.

  3. Style Loader:
    
    Injects CSS styles to the DOM.
  
  4. Fs Extra:
   
    Adds file system methods that aren't included in the native fs module and adds promise support to the 
    fs methods. It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.

  5. Lodash: 
   
    makes JavaScript easier by working with arrays, numbers, objects, strings, etc.

  6. LazySizes: 
    
    a fast, SEO-friendly and self-initializing lazyloader for images (including responsive images picture/srcset), iframes, scripts/widgets and much more. It also prioritizes resources by differentiating between crucial in view and near view elements to make perceived performance even faster.



## Javascript

  1. The Object Oriented Programming (OOP) paradigm:



  2. Babel, "The Javascript Compiler":

  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible
   version of JavaScript in current and older browsers or environments. 
   Here are the main things Babel can do for you:

    . Transform syntax
    . Polyfill features that are missing in your target environment 
    . Source code transformations 
    . And more!..


  3. Lodash : makes JavaScript easier by working with arrays, numbers, objects, strings, etc.
    
    . Iterating arrays, objects, & strings
    . Manipulating & testing values
    . Creating composite functions


     1. Debounce : 
     Creates a debounced function that delays invoking func until after wait milliseconds 
     have elapsed since the last time the debounced function was invoked. The debounced function comes 
     with a cancel method to cancel delayed func invocations and a flush method to immediately invoke 
     them. Provide options to indicate whether func should be invoked on the leading and/or trailing 
     edge of the wait timeout. The func is invoked with the last arguments provided to the debounced 
     function. Subsequent calls to the debounced function return the result of the last func invocation.

     (Crée une fonction "debounce" qui retarde l'appel de la fonction jusqu'à ce que les millisecondes 
     d'attente se soient écoulées depuis la dernière fois que la fonction "debounce" a été appelée. La 
     fonction debounce est fournie avec une méthode cancel pour annuler les appels de fonction retardés 
     et une méthode flush pour les invoquer immédiatement. Fournissez des options pour indiquer si la 
     fonction doit être appelée sur le bord avant et / ou arrière du délai d'attente. La fonction est 
     invoquée avec les derniers arguments fournis à la fonction debounce. Les appels suivants à la 
     fonction debounce renvoient le résultat du dernier appel de func.)

     2. Throttle : 
     Creates a throttled function that only invokes func at most once per every wait 
     milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations 
     and a flush method to immediately invoke them. Provide options to indicate whether func should be 
     invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last 
     arguments provided to the throttled function. Subsequent calls to the throttled function return 
     the result of the last func invocation.

     (Crée une fonction limitée qui n'appelle la fonction au plus qu'une fois toutes les millisecondes 
     d'attente. La fonction "étranglée" est fournie avec une méthode d'annulation pour annuler les 
     appels de fonction retardés et une méthode de vidage pour les appeler immédiatement. Fournissez 
     des options pour indiquer si la fonction doit être appelée sur le bord avant et / ou arrière du 
     délai d'attente. La fonction est appelée avec les derniers arguments fournis à la fonction étranglée. 
     Les appels suivants à la fonction limitée renvoient le résultat du dernier appel de fonction.)