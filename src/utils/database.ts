import mongoose from "mongoose";
import logger from "./logger"
import "dotenv/config"
async function connect(): Promise<mongoose.Mongoose> {
  try {
    logger.info("DB: Mongodb connection succeeded");
    return mongoose.connect(process.env.DB_URI || "");
  }
  
  catch (error) {
    logger.error("DB: Mongodb connection failed:\n" + error);
    process.exit(1);
  }
}

export default connect;