const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })// ส่วนนี้เป็น Option ถ้าไม่ใส่จะ warning ว่าการ connect mongodb ด้วย url แบบ string ในอนาคตจะ depreacated แล้ว (ซึ่งไม่ใส่ก็ได้ แต่จะมี warning แค่นั้น)
const PORT = process.env.PORT || 5000 ;
const bodyParser = require('body-parser')

// body parser middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/book',require('./router/api/test1'))



app.listen(PORT, () => {
  console.log(`Start server at port ${PORT}.`)
})