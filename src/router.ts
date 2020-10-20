import express from 'express';

const router = express.Router();

router.get('/',(req, res)=>{
  return res.json({messagem:"Rota de teste!"});
})

export default router;