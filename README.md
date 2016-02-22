# Express App Template with Gulp.

A base template to use when starting new express templates.

### Setup

**Make sure you have Gulp installed** `npm install --global gulp`

```
Mkdir -p ~/express_gulp_template
$ git clone https://github.com/Jwabbles/express_gulp_template.git
$ cd ~/express_gulp_template
$ npm install
```

## Starting the application

```
nf start
```

After a few seconds this will open the application in your default browser and enable live reload. To change you default browser `add browser: 'google chrome'`, under `browserSync` inside `gulp/config.js`

## Assets

These are stored in `gulp/assets` and then complied on save to `public/assets`. Please edit the assets in the **gulp** folder.
