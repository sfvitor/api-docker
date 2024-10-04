const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

class Admin extends Model {}
Admin.init({
    name: DataTypes.STRING,
}, { sequelize, modelName: 'admin' });

sequelize.sync();

const app = require('express')();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello Docker v0.4!' });
});

app.get('/admin', async (req, res) => {
    const [admin] = await Admin.findAll();
    res.json({ data: admin?.name });
});

app.post('/admin/:name', async (req, res) => {
    const { name } = req.params;
    const [admin] = await Admin.findAll();
    (!admin
        ? await Admin.create({ name })
        : await admin.update({ name })
    );
    res.json({ data: name });
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
