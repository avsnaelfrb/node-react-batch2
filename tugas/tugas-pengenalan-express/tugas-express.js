const express = require('express')
const app = express()
const port = 3000

const pi = 3.14

function volumeTabung(r, t){
    return pi * r *  r * t;
}

function luasAlasTabung(r){
    return pi * r * r;
}

function kelilingAlasTabung(r){
    return 2 * pi * r;
}

app.get('/lingkar-tabung', (req, res) => {

})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});