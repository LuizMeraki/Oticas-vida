import React from 'react';
import './style.css'

export default function Header(){
     return (
          <header>
               <div className='menu area-limite'>
                    <figure>
                         <img src='assets/logo.png' alt='Logo Óticas Vida'></img>
                    </figure>
                    <nav>
                         <a href='#secao-produtos'>produtos</a>
                         <a href='#secao-sobre'>sobre</a>
                         <a href='#secao-contatos'>contato</a>
                    </nav>
               </div>
          </header>
     );
}