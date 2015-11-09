import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const React = require('react');
require('../setup');

const Html = require('./html');

function App(req, res) {
  const html = React.renderToStaticMarkup(<Html title="yepstr"/>);
  res.send('<!DOCTYPE html>' + html);
}

export default App;
