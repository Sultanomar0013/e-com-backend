require('dotenv/config');
const app = require('./app');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("CONNEECTED TO MONGODB!LETS PARTY!"))
.catch(() => console.log("CONNECTION FAILED!CALM DOWN!"));


const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`APP RUNNING ON PORT ${port}!YEAH BOYYEEE!`);
});