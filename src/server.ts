import express  from 'express'; 
import router from './router';

const port = 3333 || process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router);

app.listen(port,()=>{
  console.log(`Api rodando na porta:${port}`);
})

export default app;