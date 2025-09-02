const express = require("express");
const app = express();

const vcapServices = JSON.parse(process.env.VCAP_SERVICES || "{}");
const myServiceCreds = vcapServices["my-service-name"]?.[0]?.credentials;

app.get("/api/config", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
      apiEndpoint: JSON.parse(process.env.VCAP_SERVICES).storage[0].credentials.apiEndpoint,
      bucketUrl: JSON.parse(process.env.VCAP_SERVICES).storage[0].credentials.bucketUrl
  });
});

app.listen(process.env.PORT || 3000);
