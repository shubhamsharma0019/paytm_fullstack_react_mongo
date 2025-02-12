const express = require("express");
const cors = require('cors');
const rootRouter = require('./routes/index');
const rootaccountRouter = require("./routes/index")
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1',rootRouter);
app.use('/api/v1',rootaccountRouter)

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});
