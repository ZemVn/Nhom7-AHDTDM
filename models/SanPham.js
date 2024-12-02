const mongoose = require('mongoose');
const { Schema } = mongoose;

const SanPhamSchema = new Schema({
    TenSP: {
        type: String
    },
    GiaBan: {
        type: Number
    },
    MoTa: {
        type: String
    },
    AnhBia: {
        type: String,
    },
    SoLuong: {
        type: Number,
    },
    MaLoai: {
        type: Schema.Types.ObjectId,
        ref: 'LoaiSanPham'
    },
});

const SanPhamModel = mongoose.model('SanPham', SanPhamSchema, 'SanPham');

module.exports = SanPhamModel;