const query = `CREATE TABLE satuan_produk(
    id BIGSERIAL NOT NULL,
    satuan varchar(255) NOT NULL,
    deskripsi varchar(255),
    toko_id int,
    CONSTRAINT PK_satuan_produk PRIMARY KEY (id),
    CONSTRAINT FK_toko FOREIGN KEY (toko_id) REFERENCES toko(id)
)`;

const satuanProdukTable = {
    up:  async (db)=>{
		try{
				const res = await db.query(query);
				console.log('Success: '+res.command+' satuan produk table');
                return res;
		}catch(err){
				console.log(err.message);
                return err.message;

		}
    }
} 

module.exports=satuanProdukTable;