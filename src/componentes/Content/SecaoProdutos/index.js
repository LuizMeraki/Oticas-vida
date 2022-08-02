import React from 'react';
import './style.css';

export default function SecaoProdutos(){
     return(
          <section id='secao-produtos'>
               <div className='area-limite'>
                    <div className='box-titulo-secoes'>
                         <h2>Nossos produtos</h2>
                         <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                         <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                    </div>
                    <div className='box-card-produtos'>
                         <div className='card-produto'>
                              <div className='titulo-card-produto'>
                                   <span>Óculos de grau</span>
                              </div>
                              <figure>
                                   <img src='assets/oculos01.png' alt='Óculos da Óticas Vida'></img>
                              </figure>
                              <div className='valor-card-produto'>
                                   <span>R$ 500,00</span>
                              </div>
                         </div>
                         <div className='card-produto'>
                              <div className='titulo-card-produto'>
                                   <span>Óculos transition</span>
                              </div>
                              <figure>
                                   <img src='assets/oculos02.png' alt='Óculos da Óticas Vida'></img>
                              </figure>
                              <div className='valor-card-produto'>
                                   <span>R$ 750,00</span>
                              </div>
                         </div>
                         <div className='card-produto'>
                              <div className='titulo-card-produto'>
                                   <span>Óculos de sol</span>
                              </div>
                              <figure>
                                   <img src='assets/oculos03.png' alt='Óculos da Óticas Vida'></img>
                              </figure>
                              <div className='valor-card-produto'>
                                   <span>R$ 700,00</span>
                              </div>
                         </div>
                         <div className='card-produto'>
                              <div className='titulo-card-produto'>
                                   <span>Óculos infantil</span>
                              </div>
                              <figure>
                                   <img src='assets/oculos04.png' alt='Óculos da Óticas Vida'></img>
                              </figure>
                              <div className='valor-card-produto'>
                                   <span>R$ 500,00</span>
                              </div>
                         </div>
                    </div>
                    <ListaBeneficios/>
               </div>
          </section>
     );
}

export function ListaBeneficios(){
     return (
          <div className='box-ul-lista'>
               <p>Todos os nossos produtos incluem:</p>
               <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
               </ul>
          </div>
     );
}