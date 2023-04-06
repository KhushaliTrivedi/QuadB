const db = require('../model/db');

module.exports.index = async(req,res) => {
    try{
    const data = await db.query(`SELECT * FROM data`);
    const result = data.rows;
    }catch(err){
        next(err);
    }
    res.render(`index`, { result });
}
