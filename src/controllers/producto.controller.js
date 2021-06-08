import { response } from 'express';
import {pool} from '../database'


export const readAllProductos = async(req , res ) => {
    try {
        const response = await pool.query('select * from producto');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}


export const readProducto = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from producto where idproducto=$1' ,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const delProducto = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto=$1', [id]);
        return res.status(200).json(
        `El producto ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const updateProducto = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nomprod, precio , stock , idusuario} = req.body;
        await pool.query('update producto set nomprod=$1, precio=$2 , stock=$3 , idusuario=$4 where idproducto=$5', [nomprod, precio , stock , idusuario]);
        return res.status(200).json(
            `El producto  ${ id } ha sido modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createProducto = async(req, res)=>{
    try {
        const{ nomprod, precio, stock , idusuario} = req.body;
        await pool.query('insert into producto(nomprod, precio, stock, idusuario) values($1,$2, $3, $4)', [nomprod, precio , stock , idusuario ]);
        return res.status(200).json(
            `El producto  ${ nomprod } ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}