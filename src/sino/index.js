import React, { useEffect,  useRef,  useState } from 'react';
import sino from '../sino.png'
import './index.css'




const MenuSino = () => {

    const Menus = [
        {id: 1, mesa: 10, Pedido: "Suco de laranja"},
        {id: 2, mesa: 20, Pedido: "Cerveja"},
        {id: 3, mesa: 30, Pedido: "Porção batata"},
        {id: 4, mesa: 50, Pedido: "Porção batata"},
        {id: 5, mesa: 30, Pedido: "doce"},
        {id: 5, mesa: 40, Pedido: "fruta"}
         ]

     const [open, setOpen] = useState(false);
    // const [telaMenu, setTelaMenu] = useState("");

    // useEffect(() => {
    //     itemVendido()
    // },[])


    // const itemVendido = () => {
    //     setTelaMenu(Menus)
    // }

   
    const menuRef = useRef();
    const imgRef  = useRef();  

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    })
    //relative
    //h-20 w-20 object-cover border-4 border-gray-400 rounded-full  cursor-pointer
    //bg-white p-4 w-52 shadow-lg absolute -left-14 top-24
    //p-2 text-lg cursor-pointer rounded hover:bg-blue-100

    return <div className="container">
                <div className='box'> 
                    <h2>TESTE: SINO COM MENU FLUTUANTE</h2>
                    <img
                    ref={imgRef}
                    onClick={() => setOpen(!open)} 
                    src={sino} 
                    alt="sino"
                    className="img" 
                    />
                    {open && (
                        <div
                                ref= {menuRef}
                                className="menu">
                                <ul>
                                    {Menus.map((menu) => (
                                            <li 
                                            onClick={() => setOpen(false)}
                                            className='text' key={menu.id}><strong>MESA:</strong> {menu.mesa} <strong>PEDIDO:</strong> {menu.Pedido}</li>
                                        ))}
                                </ul>
                            </div>

                    )}
                
                </div>
        </div>
}

export default MenuSino