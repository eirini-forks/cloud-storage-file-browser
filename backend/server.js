const express = require("express");
const path = require("path");
const app = express();

app.get("/api/config", (req, res) => {
  res.json({
      apiEndpoint: JSON.parse(process.env.VCAP_SERVICES).storage[0].credentials.apiEndpoint,
      bucketUrl: JSON.parse(process.env.VCAP_SERVICES).storage[0].credentials.bucketUrl
  });
});

// Serve React build
app.use(express.static(path.join(__dirname, './build')));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT || 3000);
