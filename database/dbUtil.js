var db = require('../database/db');

var pool = function(sql,params,callback){
     //连接池
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        //链接
        connection.query(sql,[params],function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);

            connection.release(); //release
        });
    });
}

module.exports.pool = pool;