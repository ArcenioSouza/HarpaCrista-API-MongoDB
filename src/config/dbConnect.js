import mongoose from "mongoose";

mongoose.connect("mongodb+srv://arceniosouza:minhasenhasecreta@hinosdb.zsbcc.mongodb.net/harpa-crista");

let db = mongoose.connection;

export default db;