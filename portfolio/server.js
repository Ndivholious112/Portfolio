const express = require('express');
const path = require('path');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const app = express();

// Serve static files from /browser
app.get('*.*', express.static(path.join(__dirname, 'dist/portfolio/browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Set up the Angular Universal engine
app.engine('html', ngExpressEngine({
  bootstrap: require('./dist/portfolio/server/main').AppServerModuleNgFactory,
  providers: [
    provideModuleMap(require('./dist/portfolio/server/main'))
  ]
}));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'dist/portfolio/browser'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});