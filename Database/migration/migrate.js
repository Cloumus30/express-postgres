const db = require('../../dbConnect');
const accountTable = require('./accountTable');
const tokoTable = require('./tokoTable');
const kategoriProdukTable = require('./kategoriProdukTable');
const satuanProdukTable = require('./satuanProdukTable');
const productTable = require('./productTable');
const stokProdukTable = require('./stokProdukTable');

 async function migrate(){
    const akun = await accountTable.up(db);
    const toko = await tokoTable.up(db);
    const kategoriProduk = await kategoriProdukTable.up(db);
    const satuanProduk = await satuanProdukTable.up(db);
    const produk = await productTable.up(db);
    const stokProduk = await stokProdukTable.up(db);
}

migrate();

