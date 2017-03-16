var orm = require("../config/orm.js");

var burger = {

  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  insertOne: function(burger, cb){
    orm.insertOne("burgers",function(res){
      cb(res);
    });
  },

  updateOne: function(burger, cb){
    orm.updateOne("burgers",function(res){
      cb(res);
    });
  }

}


module.exports = burger;
