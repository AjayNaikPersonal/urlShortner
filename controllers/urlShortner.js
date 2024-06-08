const urlShortner = require('../models/urlShortner')
const UrlShortner = require('../models/urlShortner')
const shortid = require('shortid');

const getShortenUrls = async (req,res)=>{
    try {
        const urls = await urlShortner.find({});
        return urls 
    } catch (error) {
        console.log(error)
        return {}
    } 
}

const CreateShortner =async (req,res) =>{
    try {
        const shortId = shortid.generate();
        console.log(shortId);
        const newUrl = new urlShortner({
            fullUrl: req.body.fullUrl,
            shortUrl: shortId
        });

        // Validate fullUrl
        if (!newUrl.fullUrl) {
            return res.status(400).json({ message: 'Invalid URL error' });
        }

        await newUrl.save();
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error', error });
    }
}

const visitShortenRoute = async (req,res)=>{
    try {
        const url = await urlShortner.findOne({shortUrl : req.params.id});
        res.redirect(url.fullUrl)  
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error', error });
    }
    
}


module.exports = {getShortenUrls,CreateShortner,visitShortenRoute};