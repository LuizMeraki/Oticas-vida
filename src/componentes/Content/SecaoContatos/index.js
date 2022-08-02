import React from 'react';
import './style.css';

export default function SecaoContatos(){
     return (
          <section id='secao-contatos'>
               <div className='area-limite'>
                    <div className='box-titulo-secoes'>
                         <h2>Fale conosco</h2>
                         <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                    </div>
                    <div className='box-contatos-e-redes'>
                         <div className='box-contato'>
                              <span>Contato</span>
                              <div className='box-informacoes'>
                                   <figure>
                                        <img src='assets/local.png' alt='Ícone Localização'></img>
                                        <figcaption>Nova Iguaçu, RJ</figcaption>
                                   </figure>
                                   <figure>
                                        <img src='assets/telefone.png' alt='Ícone Telefone'></img>
                                        <figcaption>(21) 9 9999-9999</figcaption>
                                   </figure>
                                   <figure>
                                        <img src='assets/email.png' alt='Ícone E-mail'></img>
                                        <figcaption>contato@oticavida.com</figcaption>
                                   </figure>
                              </div>
                         </div>
                         <div className='box-redes-sociais'>
                              <span>Nossas Redes Sociais</span>
                              <div className='box-informacoes'>
                                   <figure>
                                        <img src='assets/fb.png' alt='Ícone Facebook'></img>
                                        <figcaption>/OticaVida</figcaption>
                                   </figure>
                                   <figure>
                                        <img src='assets/ig.png' alt='Ícone Instagram'></img>
                                        <figcaption>@oticavidarj</figcaption>
                                   </figure>
                                   <figure>
                                        <img src='assets/tt.png' alt='Ícone Twitter'></img>
                                        <figcaption>@oticavidarj</figcaption>
                                   </figure>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}