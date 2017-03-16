var connection = require("../config/connection.js");

var orm = {
  selectAll: function(callback){
    var x = "SELECT * FROM burgers";

    connection.query(x, function(err,result){
        callback(result);
    });
  },

  insertOne: function(burger, callback){
    var x = "INSERT INTO burgers (burger_name) VALUE (?)";

    connection.query(x,[burger.burger_name],function(err,result){
        callback(result);
    });

  },

  updateOne: function(burger, callback){
    var x = "UPDATE burgers SET text=? WHERE id=?";

    connection.query(x, [burger.burger_name, burger.id], function(err,result){
        callback(result);
    });

  }
}
// selectAll()
// insertOne()
// updateOne()

module.exports = orm;
