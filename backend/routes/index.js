const router = require('express').Router();

router.use('/posts', require('./postRoutes'));

module.exports = router;
