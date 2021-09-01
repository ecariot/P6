const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controller/sauce');

router.get('/', auth, stuffCtrl.getAllSauces);
router.post('/', auth, multer, stuffCtrl.createSauce);
router.put("/:id", auth, multer, stuffCtrl.updateSauce)
router.get('/:id', auth, stuffCtrl.getOneSauce);
router.delete("/:id", auth, stuffCtrl.deleteSauce)
router.post("/:id/like", auth, stuffCtrl.likeDislikeSauce)



module.exports = router;