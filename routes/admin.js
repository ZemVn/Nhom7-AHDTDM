const express = require('express');
const passport = require('passport');
const router = express.Router();

// Chuyển hướng tới trang đăng nhập khi truy cập /admin
router.get('/admin', (req, res) => {
    res.redirect('/login'); // Khi truy cập /admin, sẽ chuyển hướng đến /login
});

// Trang đăng nhập
router.get('/login', (req, res) => {
    res.render('login', { title: 'Đăng nhập' }); // Render trang login.ejs
});

// Xử lý đăng nhập
router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin', // Đăng nhập thành công chuyển hướng về /admin
    failureRedirect: '/login', // Đăng nhập thất bại chuyển hướng về trang login
    failureFlash: true
}));

module.exports = router;
