/**
 * @author Demetrius Johnson
 */
require.paths.unshift(__dirname + '/app');
require.paths.unshift(__dirname + '/app/lib');
require.paths.unshift(__dirname + '/app/controllers');

var cluster = require('cluster')
  , app = require('server.js');

function showUsage() {
  console.error('usage: script.js port');
  console.error('  port [number 1 - 65535]');
  process.exit();
}

// get the port that the server will run on
if(process.argv.length != 3) {
  showUsage();
}

var port = parseInt(process.argv[2], 10);
if(port < 1 || port > 65535) {
  showUsage();
}

cluster(app)
  .set('workers', 1)
  .use(cluster.logger('logs'))
  .use(cluster.stats())
  .use(cluster.pidfiles('logs'))
  .listen(port);
