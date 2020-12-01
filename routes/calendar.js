// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var express = require('express');
var router = express.Router();

/* GET /calendar */
// <GetRouteSnippet>
router.get('/',
  async function(req, res) {
      let params = {
        active: { calendar: true }
      };
      res.render('calendar', params);
    }
  //}
);
// </GetRouteSnippet>

module.exports = router;