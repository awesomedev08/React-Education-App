// server.js

// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import router from './routes';


// // and create our instances
const app = express();




// // set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.API_PORT || 3001;

// connect with mongoose --> why ?
mongoose.connect('mongodb://storatus:storatus12@ds247670.mlab.com:47670/expense-manager');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("We are connected"); });








//What is bodyParser --> I need to clarify this
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));





// router.get('/comments', (req, res) => {
//   Comment.find((err, comments) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: comments });
//   });
// });
//
// router.post('/comments', (req, res) => {
//   const comment = new Comment();
//   // body parser lets us use the req.body
//   const { author, text } = req.body;
//   if (!author || !text) {
//     // we should throw an error. we can do this check on the front end
//     return res.json({
//       success: false,
//       error: 'You must provide an author and comment'
//     });
//   }
//   comment.author = author;
//   comment.text = text;
//   comment.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });
//
// router.put('/comments/:commentId', (req, res) => {
//   console.log(req.params);
//   const { commentId } = req.params;
//   if (!commentId) {
//     return res.json({ success: false, error: 'No comment id provided' });
//   }
//   Comment.findById(commentId, (error, comment) => {
//     if (error) return res.json({ success: false, error });
//     const { author, text } = req.body;
//     if (author) comment.author = author;
//     if (text) comment.text = text;
//     comment.save(error => {
//       if (error) return res.json({ success: false, error });
//       return res.json({ success: true });
//     });
//   });
// });
//
// router.delete('/comments/:commentId', (req, res) => {
//   const { commentId } = req.params;
//   if (!commentId) {
//     return res.json({ success: false, error: 'No comment id provided' });
//   }
//   Comment.remove({ _id: commentId }, (error, comment) => {
//     if (error) return res.json({ success: false, error });
//     return res.json({ success: true });
//   });
// });
//


// // Use our router configuration when we call /api
app.use('/api', router);
app.listen(port, () => console.log(`Listening on port ${port}`));
