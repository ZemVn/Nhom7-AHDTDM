const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoaiSanPhamSchema = new Schema({
    TenLoai: {
        type: String
    }
});

const LoaiSanPhamModel = mongoose.model('LoaiSanPham', LoaiSanPhamSchema, 'LoaiSanPham');

module.exports = LoaiSanPhamModel;