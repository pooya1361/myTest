import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('../setup');
const React = require('react');
const Router = require('react-router');
const routes = require('../routes');

if (typeof window !== 'undefined') {
  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler params={state.params}/>, document.getElementById('app'));
  });
}
