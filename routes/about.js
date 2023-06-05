// Import dependencies
const express = require('express');
const router = express.Router();

router.get('/about', function(req, res){
    const developers = [
        {
          firstname: 'Dima',
          lastname: 'Voronov',
          id: 321241119,
          email: 'dimaiscool95@gmail.com'
        },
        {
          firstname: 'Ronen',
          lastname: 'Levy',
          id: 34534544,
          email: 'tal@gmail.com'
        }
      ];

  res.json(developers);
});

module.exports = router;