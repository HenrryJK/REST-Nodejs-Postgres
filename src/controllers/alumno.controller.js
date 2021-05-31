import { response } from 'express';
import {pool} from '../database'
// estamos exportante una constante o funcion por eso utilizamos el async y el await
export const getAlumno = async(req , res ) => {
    try {
        const response = await pool.query('select * from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}