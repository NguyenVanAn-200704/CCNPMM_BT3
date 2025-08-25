const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.users;

// CREATE User
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL Users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE User
router.put("/:id", async (req, res) => {
  try {
    const updated = await User.update(req.body, { where: { id: req.params.id } });
    if (updated[0] === 1) res.json({ message: "Updated successfully" });
    else res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE User
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Deleted successfully" });
    else res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
