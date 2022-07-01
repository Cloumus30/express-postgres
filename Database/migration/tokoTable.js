const query = `CREATE TABLE toko (
    id BIGSERIAL NOT NULL,
    name varchar(255) NOT NULL,
    alamat varchar(255),
    account_id int,
    CONSTRAINT PK_toko PRIMARY KEY (id),
    CONSTRAINT FK_toko FOREIGN KEY (account_id) REFERENCES accounts(id)
)`;

const tokoTable = {
    up:  async (db)=>{
		try{
				const res = await db.query(query);
				console.log('Success: '+res.command+' toko table');
		}catch(err){
				console.log(err.message);
                return err.message;

		}
    }
} 

module.exports=tokoTable;
