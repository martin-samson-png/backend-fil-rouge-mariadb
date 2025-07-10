require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./users/users.model");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/backend-fil-rouge";

const seedUsers = [
  {
    name: "Alice Dupont",
    email: "alice@example.com",
    password: "alice123",
    role: "admin",
  },
  {
    name: "Bob Martin",
    email: "bob@example.com",
    password: "bob123",
    role: "modérateur",
  },
  {
    name: "Charlie Invité",
    email: "charlie@example.com",
    password: "charlie123",
    role: "invité",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connecté à MongoDB");

    await User.deleteMany();
    console.log("🧹 Utilisateurs existants supprimés");

    const inserted = await User.insertMany(seedUsers);
    console.log(`🌱 ${inserted.length} utilisateurs insérés :`);
    inserted.forEach((u) => console.log(`- ${u.name} (${u.role})`));

    process.exit();
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err.message);
    process.exit(1);
  }
}

seed();
