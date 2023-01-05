const app = require('./app');


const sequelize = require('./db/dbPool');

sequelize.authenticate().then(() => console.log('Database connected')).catch((err) => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Server listening to PORT ${process.env.PORT}`);
})