import {Pool} from 'pg'

export const pool = new Pool({
    host: 'ec2-34-193-113-223.compute-1.amazonaws.com', 
    user : 'vgiamupcdbmfzb',
    password:'c0d7efac3a4ec1889fc3b8b50c2fade8de481912a6ce8541912b99341de98645',
    database: 'd59l5f7k6ndc27',
    port : 5432,
    ssl: {rejectUnauthorized:false}
})

