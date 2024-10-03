const app = require('express')();

app.get('/', (req, res) => {
    res.json({ message: 'Hello Docker v0.2!' });
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
