const pg = require('pg');
const db = pg.createPool({
    host : 'localhost',
    user : 'postgres',
    password : '890kim@jp',
    database : 'planner',
    port: 5432
});

module.exports = db;