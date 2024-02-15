const express = require('express');
const app = express();

// Sample data
const posts = [
    { id: 1, title: 'First post', content: 'Content of the first post.' },
    { id: 2, title: 'Second post', content: 'Content of the second post.' },
    { id: 3, title: 'Third post', content: 'Content of the third post.' }
];

// Route to get a specific post by ID
app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});