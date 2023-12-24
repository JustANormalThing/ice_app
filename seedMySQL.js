var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE ices;'
var seedQuery = 'INSERT INTO ices (id,title, nick, avatar, about) VALUES (1,"Лед", "ice_", "/images/ice2.jpg", "Как мы видим на этой картинке лед.."),  (2,"Лед_Кубик", "ice_cubes", "/images/ice_.jpg", "Мы видим лед но уже в кубичейской форме"),  (3,"Лед2", "ice2", "/images/ice2.jpg", "Лед сделан из воды");'

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'sqluser',
    password : 'password',
    database: 'ice_'
    });
    connection.connect()
    console.log("Running SQL seed...")
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })
    