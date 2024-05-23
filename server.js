const app = require('./app');
const cors = require('cors');
const connectDb = require('./config/db');
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // تحديد الموقع الذي يُسمح له بالوصول
    optionsSuccessStatus: 200 // برمز الحالة الناجحة المرسلة بعد الطلب الـ preflight
  };
  
  app.use(cors(corsOptions));
  
connectDb();

app.listen(8009, () => {
    console.log("Server is ruuning on port 7009!");
})