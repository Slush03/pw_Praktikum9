const express = require("express");
const cors = require("cors"); // Tambahkan ini
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Tambahkan ini

const companyProfile = {
  name: "PT GIT Solution",
  description: "Solusi Teknologi Terbaik untuk Bisnis Anda",
  services: ["Pengembangan Software", "Konsultasi IT", "Manajemen Proyek"],
};

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Company Profile API");
});

app.get("/profile", (req, res) => {
  res.status(200).json(companyProfile);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
