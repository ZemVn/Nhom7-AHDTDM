const LoaiSanPhamControllers = require('../controllers/LoaiSanPham');
const SanPhamControllers = require('../controllers/SanPham');

var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', LoaiSanPhamControllers.getLoaiSanPham)

router.get( '/LoaiSanPham/:id', SanPhamControllers.getSanPham)

router.get( '/SanPham/:id', SanPhamControllers.getChiTietSanPham)

router.get( '/AllSanPham', SanPhamControllers.getAllSanPham)

router.get( '/quanlysanpham', SanPhamControllers.getAllSanPham1)

router.get( '/xoaSanPham/:id', SanPhamControllers.deleteSanPham)

router.get( '/suaSanPham/:id', SanPhamControllers.editSanPham)

router.post( '/suaSanPham/:id', SanPhamControllers.updateSanPham)

router.get( '/themSanPham', SanPhamControllers.themSanPham)

router.post( '/themSanPham', SanPhamControllers.createSanPham)

router.get( '/admin', (req, res) => {
    res.render('admin')
})

router.get('/gioithieu', (req, res) => {
    res.render('gioithieu')
})

router.get('/UuDai', (req, res) => {
    res.render('UuDai')
})

router.get('/LienHe', (req, res) => {
    res.render('LienHe')
})

module.exports = router;
