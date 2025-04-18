import express from "express";

import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/pins", pinRouter);
app.use("/api/comments", commentRouter);
app.use("/api/boards", boardRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
