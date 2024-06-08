const express = require('express');
const  {CreateShortner,getShortenUrls,visitShortenRoute} = require('../controllers/urlShortner')

const router = express.Router();


router.route('/').post(CreateShortner).get(getShortenUrls);
router.route('/:id').get(visitShortenRoute);


module.exports = router