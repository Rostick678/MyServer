const express = require('express');
const cors = require('cors')
const app = express()
const router = require('./routes/index')

const PORT = 7000;

app.use(express.json())
app.use(cors({origin:'*'}))
app.use('/', router)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

