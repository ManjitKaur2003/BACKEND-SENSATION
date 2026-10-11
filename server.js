import app from "./app.js";
import { db } from "./config/db.js";

//  db:
db();

//  localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`local host running at port ${PORT}`);
});
