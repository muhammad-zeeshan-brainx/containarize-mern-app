const router = require('express').Router();
const { postController } = require('../controllers');

router.get('/', postController.getPosts);
router.post('/', postController.addPost);

module.exports = router;
