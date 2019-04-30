const data = require('../../data.json');

// console.log(data);

exports.get = (req, res) => {
  res.render("posts",{
    data: data
  });
};

/*
app.get('/populations', (req, res) => {
  res.render("populations",{
    title: 'Countries populations',
    username: 'Obaydah',
    countries: countryData
  });
})
*/