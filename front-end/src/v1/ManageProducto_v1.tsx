import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, BrowserRouter, Routes, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Productos_v1 from './Producto_v1';

interface IState { producto?: Supermercado.Producto }

declare module Supermercado {

    export interface Producto {
        idproducto: number;
        nombre: string;
        preciounidad: number;
        stock: number;
    }

}

export default function ManageProducto_v1() {
    let idP: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    let nombreP: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    let precioP: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    let stockP: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    let navigate = useNavigate();
    const [stProducto, setStProducto] = useState<IState>({});
    const { id } = useParams();

    useEffect(() => {
        const getProducto = async (idproducto: string | undefined) => {
            let rutaDeProducto = "http://localhost:8080/api/v1/productos/";
            let { data } = await axios.get(rutaDeProducto + idproducto);
            let producto: Supermercado.Producto = data;
            console.log(producto);
            setStProducto({ producto });
        }
        getProducto(id);
    },
        [id]
    )
    return (
        <>
            <div>
                <h3>Product details: </h3>
                <h4>Id: {stProducto.producto?.idproducto} || Name: {stProducto.producto?.nombre} || Unit price: {stProducto.producto?.preciounidad} || Stock: {stProducto.producto?.stock}</h4>
            </div>
        </>
    );
}