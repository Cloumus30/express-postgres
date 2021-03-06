const query = `CREATE TABLE accounts (
    id BIGSERIAL NOT NULL,
    name varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    address varchar(255),
    CONSTRAINT PK_accounts PRIMARY KEY (id),
    CONSTRAINT UC_accounts UNIQUE(username,email)
)`;
const  accountTable = {
    up: async (db)=>{
		try{
				const res = await db.query(query);
				console.log('Success: '+res.command+' accounts table');
		}catch(err){
				console.log(err.message);
                return err.message;

		}
    }
} 

module.exports=accountTable;
