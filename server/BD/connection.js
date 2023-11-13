const mongoose = require("mongoose");
const dbURL = "mongodb+srv://amira:amira@cluster0.xteo0vi.mongodb.net/ecommerceapp";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => {
    console.error(error.message);
  });