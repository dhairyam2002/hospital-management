const app = require('./app');


app.listen(process.env.PORT, () => {
    console.log(`Server listening to PORT ${process.env.PORT}`);
})