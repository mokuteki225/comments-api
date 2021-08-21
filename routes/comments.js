const express = require('express');
const router = express.Router();
const commentController= require('../controllers/commentsController');
const jsonParser = express.json();

router.use(jsonParser);

router.get('/', commentController.getCommentById);

router.post('/', commentController.postNewComment);

router.delete('/', commentController.deleteCommentById);

router.patch('/', commentController.updateCommentById);

module.exports = router;