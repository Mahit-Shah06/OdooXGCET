const express = require("express");
const cors = require("cors");

const auth = require("./auth");
const attendance = require("./attendance");
const leaves = require("./leaves");
const payroll = require("./payroll");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", auth);

app.post("/attendance", attendance.log);
app.get("/attendance", attendance.list);

app.post("/leave", leaves.apply);
app.post("/leave/:i/approve", leaves.approve);
app.get("/leaves", leaves.list);

app.get("/payroll/:id", payroll);

app.listen(3000, () => console.log("HRMS running"));

