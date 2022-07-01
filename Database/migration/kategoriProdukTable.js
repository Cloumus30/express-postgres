const query =  `CREATE TABLE kategori_produk(
    id BIGSERIAL NOT NULL,
    kategori varchar(255) NOT NULL,
    deksripsi varchar(255),
    toko_id int,
    CONSTRAINT PK_kategori_produk PRIMARY KEY (id),
    CONSTRAINT FK_toko FOREIGN KEY (toko_id) REFERENCES toko(id)
)`;

const kategoriProdukTable = {
    up:  async (db)=>{
		try{
				const res = await db.query(query);
				console.log('Success: '+res.command+' kategori produk table');
                return res;
		}catch(err){
				console.log(err.message);
                return err.message;

		}
    }
} 

module.exports=kategoriProdukTable;