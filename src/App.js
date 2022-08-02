import React from 'react';
import './App.css';

// Componentes
import Header from './componentes/Header/';
import Content from './componentes/Content/';
import Footer from './componentes/Footer';


function App (){
     return (
          <body>
               <Header/>
               <Content/>
               <Footer/>
          </body>
     );
}

export default App;