const query = `CREATE TABLE produk (
    id BIGSERIAL NOT NULL,
    nama varchar(255) NOT NULL,
    harga_jual int,
    harga_beli int,
    deksripsi text,
    kode varchar(255),
    is_publish boolean,
    satuan_id int,
    kategori_id int,
    toko_id int,
    CONSTRAINT PK_product PRIMARY KEY (id),
    CONSTRAINT FK_satuan_produk FOREIGN KEY (satuan_id) REFERENCES satuan_produk(id),
    CONSTRAINT FK_kategori_produk FOREIGN KEY (kategori_id) REFERENCES kategori_produk(id),
    CONSTRAINT FK_toko_produk FOREIGN KEY (toko_id) REFERENCES toko(id)
)`;

const productTable = {
    up: async (db) =>{
        try {
            const res = await db.query(query);
            console.log('Success: '+res.command+' produk table');
            return res;
        } catch (err) {
            console.log(err.message);
             return err.message;
        }
    }
}

module.exports=productTable;