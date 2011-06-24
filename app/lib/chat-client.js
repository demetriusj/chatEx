/**
 * @author Demetrius Johnson
 */

var log = console.log;
var clientList = {};

module.exports = function(io) {
  return function (socket) {

    function broadcast(cmd, msg) {
//    socket.get('nickname', function (name) {
        var data = {
          cmd:cmd,
          msg:msg,
          name:clientList[socket.id].name,
          uid:socket.id
        };
        
        if(cmd=='DEL') data.msg = 'Bye ' + data.name;
        else if(cmd=='ADD') data.msg = 'Welcome ' + data.name;
        else if(cmd=='CHAT') data.msg = data.name+': ' + msg;
        
        io.sockets.emit('chat', data);
//    });
    }
  
    socket.on('chat', function (data) {
      broadcast('SEND', data.msg);
    });
    
    socket.on('join', function (data) {
        clientList[socket.id] = data;
//      socket.set('nickname', data.name, function () {
        broadcast('ADD', false);
        socket.emit('start', clientList);
//      });
    });
  
    socket.on('disconnect', function () {
      broadcast('DEL', false);
      delete clientList[socket.id];
    });
  }
}
