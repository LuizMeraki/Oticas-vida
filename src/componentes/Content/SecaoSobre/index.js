import React from 'react';
import './style.css';

export default function SecaoSobre(){
     return (
          <section id='secao-sobre'>
               <div className='area-limite'>
                    <div className='box-titulo-secoes'>
                         <h2>Quem somos nós?</h2>
                         <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                    </div>
                    <div className='box-imagem-e-card'>
                         <figure>
                              <img src='assets/loja.png' alt='Produtos da Óticas Vida'></img>
                         </figure>
                         <div className='card-sobre-nos'>
                              <span>Nossas filiais</span>
                              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                         </div>
                         <div className='card-sobre-nos'>
                              <span>Atendimento flexível</span>
                              <p>Nossa equipe é treinada para te atender</p>
                         </div>
                         <figure>
                              <img src='assets/atendimento.png' alt='Atendente da Óticas Vida'></img>
                         </figure>
                    </div>
               </div>
          </section>
     );
}