const home = (req, res) => {
    res.render('home', { cadastro: false });
}



module.exports = { home };