const express = require("express");
const app = express();
const morgan = require("morgan");
const GlobalErrorHandler = require("./Controllers/ErrorHandler");
const cors = require("cors");
const AppError = require("./utils/AppError");
const path = require("path");
const AppRouter = require("./Routes/AppRouter");
const TransactionRouter = require("./Routes/TransactionRouter");
const MessagesRouter = require("./Routes/MessagesRouter");
const SettingRouter = require("./Routes/SettingRouter");
const PaymentRouter = require("./Routes/PaymentRouter");
const WalletRouter = require("./Routes/WalletRouter");
const UserRouter = require("./Routes/UserRouter");
const AuthRouter = require("./Routes/AuthRouter");

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,POST,DELETE",
  })
);
app.use(morgan("combined"));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/apps", AppRouter);
app.use("/api/transactions", TransactionRouter);
app.use("/api/messages", MessagesRouter);
app.use("/api/settings", SettingRouter);
app.use("/api/payments", PaymentRouter);
app.use("/api/wallets", WalletRouter);
app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);

app.all("*", (req, res, next) => {
  next(new AppError("Can't find " + req.originalUrl + " on this server", 404));
});

app.use(GlobalErrorHandler);

module.exports = app;
