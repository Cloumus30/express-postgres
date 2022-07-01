const query = `CREATE TABLE stok_produk (
    id BIGSERIAL NOT NULL,
    stok int,
    toko_id int,
    produk_id int,
    CONSTRAINT PK_stok_produk PRIMARY KEY (id),
    CONSTRAINT FK_toko FOREIGN KEY (toko_id) REFERENCES toko(id),
    CONSTRAINT FK_produk FOREIGN KEY (produk_id) REFERENCES produk(id)
)`;


const stokProdukTable = {
    up:  async (db)=>{
		try{
				const res = await db.query(query);
				console.log('Success: '+res.command+' stok_produk table');
                return res;
		}catch(err){
				console.log(err.message);
                return err.message;

		}
    }
} 

module.exports=stokProdukTable;
