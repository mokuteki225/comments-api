const Comment = require('../models/comment');

class commentsController {

    async getCommentById(req, res) {
        let comment = await Comment.findAll({
            where: {
                id: req.body.id
            }
        });
        res.json(comment);
    }

    async postNewComment(req, res) {
        let newComment = await Comment.create({
            author: req.body.author,
            text: req.body.text
        });
        res.json(newComment);
    }

    async updateCommentById(req, res) {
        let updated = await Comment.update({text: req.body.text}, {
            where: {
                id: req.body.id
            }
        });
        if (updated) {
            res.send("Comment under id " + req.body.id + " has been updated");
        } else {
            res.send("An error occured");
        }
    }

    async deleteCommentById(req, res) {
        let deleted = await Comment.destroy({
            where: {
                id: req.body.id
            }
        });
        if (deleted) {
            res.send("Comment under id " + req.body.id + " has been deleted");
        } else {
            res.send("There is no comments under id " + req.body.id);
        }
    }
}

module.exports = new commentsController();