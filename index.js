// RangeError ERR_HTTP_INVALID_STATUS_CODE Invalid status code

import express from 'express';

// 👇️ uncomment this if you use CommonJS require() syntax
// const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const statusCode = 200;

  if (statusCode >= 100 && statusCode < 600) {
    res.status(statusCode).send('<h2>bobbyhadz.com</h2>');
  } else {
    res.status(500);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
