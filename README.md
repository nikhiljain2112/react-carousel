##React carousel

###Getting started


Steps:

If you don't have Grunt installed globally on your system run:

```
npm install -g grunt-cli
```

Once grunt's installed run

```
npm install
grunt server
```

if this doesn't work, run

```
npm install
grunt server --force
```

####grunt server

This is the only task needed. What does it do? Launches a http server @ localhost:9000 Runs a watch task with the following functions & livereload

app/sass/*.scss: Compass
app/assets/js/*.js: browserify with transform [reactify, {es6: true}]