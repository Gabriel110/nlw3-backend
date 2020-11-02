import express  from 'express'; 
import router from './router';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import erroHandler from './errors/handler';
import cors from 'cors';

const port = 3333 || process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(erroHandler);
app.use(cors());
app.listen(port,()=>{
  console.log(`Api rodando na porta:${port}`);
})

export default app;