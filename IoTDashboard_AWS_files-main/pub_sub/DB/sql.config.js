const mysql= require('mysql2')
const dotenv = require('dotenv');
dotenv.config({
  path: "IoTDashboard_AWS_files-main\pub_sub\.env",
});
const sqlDatabase = () => {
  // Create a connection to the database using IP address

  console.log("env config" , process.env.SQL_DATABASE)
  const connection = mysql.createConnection({
    // host: "localhost", // e.g., '192.168.1.100'
    // user: "root", // e.g., 'root'
    // password: "....",
    // database: "...",

    //m2a
    // host: process.env.SQL_HOST,
    // user: process.env.SQL_USER, // e.g., 'root'
    // password: process.env.SQL_PASSWORD,
    // database: process.env.SQL_DATABASE,

    //all credentials will be here
    
  });



  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("SQL_Connected to the sql database");
  });

  return connection;
};

module.exports = sqlDatabase;