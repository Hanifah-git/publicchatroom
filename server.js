import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exapp = express();

// Use absolute path to serve static files
exapp.use(express.static(path.join(__dirname, 'dist')));

exapp.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});


















// import express from 'express';

// // => Express server setup

// const exapp = express();

// exapp.use(express.static('dist')); // Server static files from the public folder

// // staart the Express server

// exapp.listen(8000,()=>{
//     console.log('Server is running on http://localhost:8000');
// });