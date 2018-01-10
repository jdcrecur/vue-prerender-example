# vue-prerender-example
proof of concept pre-render vuejs app with ajax content and some pages not pre-rendered.

## To run
1 - Build
```
npm install
npm run build
```

2 - Run
Point apache or nginx at the dist folder and the app should run.

These routes should be pre-rendered:
```
'/'
'/about'
'/contact'
 ```

This route should not be pre-rendered:
```
/other
```

When you try to load /other from scratch what is actually happening is the `/dist/other/index.php` file loads the main `/dist/index.html`, the vue router kicks in and matches on other.. 
this then loads the non-pre-rendered view, ajax's' in the `otherdata.php` json and after 1 second injects it into the view.