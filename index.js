import path from 'path';
import express from 'express';

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));
app.use('/', require('./src/server/app'));

app.set('port', process.env.PORT || 3000);

function runner() {
  console.log('The main server is running at http://localhost:' + this.address().port);
}
app.listen(app.get('port'), runner);
