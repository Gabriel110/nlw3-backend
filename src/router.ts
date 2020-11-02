import express from 'express';
import Ophanages from './controllers/OphanegeController';
import multer from 'multer';
import uploadConf from './config/upload';

const router = express.Router();
const upload = multer(uploadConf);

router.get('/',(req, res)=>{
  return res.json({messagem:"Rota de teste!"});
})

router.post('/orphanages',upload.array('images'),Ophanages.create)
      .get('/orphanages',Ophanages.index)
      .get('/orphanages/:id',Ophanages.show)

export default router;