import mysql from "mysql2/promise";

const getPool = () => {
  try {
    const pool = mysql.createPool({
      host: process.env.MARIA_HOST,
      user: process.env.MARIA_USER,
      password: process.env.MARIA_PASSWORD,
      database: process.env.MARIA_DB,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    return pool;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default getPool;
