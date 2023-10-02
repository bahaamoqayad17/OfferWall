const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../Models/User");

const App = require("./../models/App") 
const Transaction = require("./../models/Transaction") 
const Messages = require("./../models/Messages") 
const Setting = require("./../models/Setting") 
const Payment = require("./../models/Payment") 
const Wallet = require("./../models/Wallet")

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const apps = JSON.parse(fs.readFileSync(__dirname+"/apps.json", "utf-8")); 
const transactions = JSON.parse(fs.readFileSync(__dirname+"/transactions.json", "utf-8")); 
const messages = JSON.parse(fs.readFileSync(__dirname+"/messages.json", "utf-8")); 
const settings = JSON.parse(fs.readFileSync(__dirname+"/settings.json", "utf-8")); 
const payments = JSON.parse(fs.readFileSync(__dirname+"/payments.json", "utf-8")); 
const wallets = JSON.parse(fs.readFileSync(__dirname+"/wallets.json", "utf-8"));
const users = JSON.parse(fs.readFileSync(__dirname+"/users.json", "utf-8"));


// IMPORT DATA INTO DB
const importData = async () => {
  try {
await App.create(apps) 
await Transaction.create(transactions) 
await Messages.create(messages) 
await Setting.create(settings) 
await Payment.create(payments) 
await Wallet.create(wallets)
    await User.create(users, { validateBeforeSave: false });
    console.log("Data Successfully Inserted !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    
await App.deleteMany() 
await Transaction.deleteMany() 
await Messages.deleteMany() 
await Setting.deleteMany() 
await Payment.deleteMany() 
await Wallet.deleteMany()
    await User.deleteMany();
    console.log("Data Successfully Deleted !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--seed") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
