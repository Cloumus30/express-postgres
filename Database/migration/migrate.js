const db = require('../../dbConnect');
const accountTable = require('./accountTable');

accountTable.up(db);