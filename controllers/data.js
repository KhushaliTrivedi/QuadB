const db = require('../model/db');

module.exports.index = async(req,res) => {
    const data = await db.query(`SELECT * FROM data`).catch(err => {console.log(err)});
    const result = data.rows;
    res.render(`index`, { result });
}
