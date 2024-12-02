const SanPhamModel = require('../models/SanPham');
const LoaiSanPhamModel = require("../models/LoaiSanPham");


const getSanPham = async (req, res) => {
    const {id} = req.params;
    const SanPham = await SanPhamModel.find({MaLoai: id});
    res.render('getsanpham', {SanPham,title: 'Sản Phẩm'});
}

const getChiTietSanPham  = async  (req, res) => {
    const {id} = req.params;
    const SanPham = await SanPhamModel.findById(id);
    res.render('chitietsanpham', {SanPham,title: 'Chi Tiết Sản Phẩm'});
}

const getAllSanPham = async (req, res) => {
    const SanPham = await SanPhamModel.find({});
    res.render('AllSanPham', {SanPham,title: 'Sản Phẩm'});
}

const getAllSanPham1 = async (req, res) => {
    const SanPham = await SanPhamModel.find({});
    res.render('quanlysanpham', {SanPham,title: 'Quản Lý Sản Phẩm'});
}

const deleteSanPham = async (req, res) => {
    const {id} = req.params;
    const SanPham = await SanPhamModel.findByIdAndDelete(id);
    res.redirect('/quanlysanpham');
}

const editSanPham = async (req, res) => {
    const {id} = req.params;
    const SanPham = await SanPhamModel.findById(id);
    const LoaiSanPham = await LoaiSanPhamModel.find({});
    res.render('suaSanPham', {SanPham, LoaiSanPham,title: 'Sửa Sản Phẩm'});
}

const updateSanPham = async (req, res) => {
    const {id} = req.params;
    const {TenSP,GiaBan,MoTa,AnhBia,SoLuong,MaLoai} = req.body;
    const SanPham = await SanPhamModel.findByIdAndUpdate(id,{TenSP,GiaBan,MoTa,AnhBia,SoLuong,MaLoai});
    res.redirect('/quanlysanpham');
}

const themSanPham = async (req, res) => {
    const LoaiSanPham = await LoaiSanPhamModel.find({});
    res.render('themSanPham', { LoaiSanPham, title: 'Thêm Sản Phẩm'});
}

const createSanPham = async (req, res) => {
    const {TenSP,GiaBan,MoTa,AnhBia,SoLuong,MaLoai} = req.body;
    const SanPham = await SanPhamModel.create({TenSP,GiaBan,MoTa,AnhBia,SoLuong,MaLoai});
    res.redirect('/quanlysanpham');
}

module.exports = {
    getSanPham, getChiTietSanPham, getAllSanPham, getAllSanPham1, deleteSanPham, editSanPham, updateSanPham, themSanPham, createSanPham
}