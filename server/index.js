const express = require('express');
require("./BD/connection");
const app = express();
const cors = require("cors");
const port = 3001;
const productRouter = require("./Routes/products");
const userRouter = require("./Routes/users");
const orderRouter = require("./Routes/orders");



app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
