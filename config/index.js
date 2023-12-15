require("dotenv").config();
const { Pool } = require("pg");

 const database ='tasks_npec';

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${database}`;
const pool = new Pool({
  connectionString,
  /*
    SSL is not supported in development
    */
  ssl: true
  
});

pool.connect().then((err,res)=>{
if(err){

  console.log(err)
}
else(
  console.log(res)
)

})


module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
