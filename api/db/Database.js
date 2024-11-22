const mongoose = require("mongoose");
let instance = null

class Database {

  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
      console.log("Database instance created");
    }

    return instance;
  }

  async connect(options) {

    try {
      console.log("Trying to connect to DB...");
      let db = await mongoose.connect(options.CONNECTION_STRING);

      this.mongoConnection = db;
      console.log("DB Connected successfully!");
    } catch (err) {
      console.error( "DB Connection Error",err.message);
      process.exit(1);
    }

  }


}

module.exports = Database;