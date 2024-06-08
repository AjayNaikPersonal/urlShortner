const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const urlRouter = require('./routes/urlShortner')
const {getShortenUrls} = require('./controllers/urlShortner')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    const urls = await getShortenUrls();
    // urls.forEach(url => {
    //     console.log(url.fullUrl, url.shortUrl,url.clicks)
    // });
    res.render('index', { urls }); 
});

app.use('/api/v1',urlRouter)

const PORT = 3000


const start = async () =>{
    try {
        console.log('running,,,');
        await connectDB();
        console.log("db connected...")
        app.listen(PORT, console.log(`server is running on port ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

start();