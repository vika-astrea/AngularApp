const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(){
  const offset = helper.getOffset( config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, comment, accomplished FROM skills`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
;
  return data 
}

async function getAccomplished(){
  const offset = helper.getOffset( config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, comment, accomplished FROM skills WHERE accomplished=1`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
;
  return data 
}

async function getNeed(){
  const offset = helper.getOffset( config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, comment, accomplished FROM skills WHERE accomplished=0`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
;
  return data 
}


module.exports = {
  getMultiple, getAccomplished, getNeed
}