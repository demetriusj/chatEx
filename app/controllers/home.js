/**
 * @author Demetrius Johnson
 */

module.exports = {
  Index: function(req, res, next) {
    res.render('home/index', {
      locals: {
        connectSocket: req.headers['host']
      },
      layout:false
    });
  }
}
