const users = require("./users");

module.exports = (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (!user) return res.status(401).send("Invalid login");
  res.json(user);
};

