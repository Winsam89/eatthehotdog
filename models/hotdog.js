
var hotdog = {
  selectAll: function() {
    orm.selectAll('hotdog', function(res) {
      cb(res);
    });
  },
