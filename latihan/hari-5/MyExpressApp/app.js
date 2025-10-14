const express = require("express");
const app = express();
const port = 3000;

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {
    let result 
    let {title} = req.query

    
    movies.forEach((movie) => {
        result += movie.title
    });

    res.send(result);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Route movie
app.get('/movie' , getMovies);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


