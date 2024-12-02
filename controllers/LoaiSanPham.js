const LoaiSanPhamModel = require('../models/LoaiSanPham');

const getLoaiSanPham = async (req, res) => {
    const LoaiSanPham = await LoaiSanPhamModel.find({});
    //res.json(LoaiSanPham);
    res.render('index', {LoaiSanPham,title: 'Trang Chủ'});
}
module.exports = {
    getLoaiSanPham
}