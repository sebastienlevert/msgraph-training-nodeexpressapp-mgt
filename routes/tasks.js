// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var express = require('express');
var router = express.Router();

/* GET /calendar */
// <GetRouteSnippet>
router.get('/',
  async function(req, res) {
      let params = {
        active: { tasks: true }
      };
      res.render('tasks', params);
    }
  //}
);
// </GetRouteSnippet>

module.exports = router;