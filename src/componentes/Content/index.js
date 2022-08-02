import React from 'react';
import './style.css'

// Componentes
import SecaoBanner from './SecaoBanner/';
import SecaoProdutos from './SecaoProdutos/';
import SecaoSobre from './SecaoSobre/';
import SecaoContatos from './SecaoContatos/';


export default function Content(){
     return(
          <main>
               <SecaoBanner/>
               <SecaoProdutos/>
               <SecaoSobre/>
               <SecaoContatos/>
          </main>
     );
}