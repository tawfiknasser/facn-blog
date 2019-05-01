const queries = require('../../database/queries/sql');

exports.post = (req, res) => {
    let id = req.body.like;
    queries.updateLikes(id, (err, result) => {
        if (err) console.log("i'm here");
        res.redirect('/posts');
    })
}

// exports.post = (req, res) => {
//     let id = req.body.id;
//     let title = req.body.title;
//     let desc = req.body.desc;
//     queries.addNewPost(id, title, desc, likes, (err, result) => {
//         if (err) console.log("ERROROROR");
//         res.redirect('/posts');
//     })
// }