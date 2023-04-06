const db = require('../model/db');

module.exports.index = async(req,res) => {
    const data = await db.query(`SELECT * FROM data`);
    const result = data.rows;
    res.render(`index`, { result });
}