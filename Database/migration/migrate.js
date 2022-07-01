const db = require('../../dbConnect');
const accountTable = require('./accountTable');
const tokoTable = require('./tokoTable');


accountTable.up(db);
tokoTable.up(db);

