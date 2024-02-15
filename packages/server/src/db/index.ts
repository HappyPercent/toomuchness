import { Pool } from 'pg';

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
};

const pool = new Pool(config);

export default {
    query: (text: string, params?: string[]) => pool.query(text, params),
};
