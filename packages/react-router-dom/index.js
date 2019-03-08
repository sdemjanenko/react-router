"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/mki-react-router-dom.min.js");
} else {
  module.exports = require("./cjs/mki-react-router-dom.js");
}
