import Map from  './componetes/Map';
export default function Localizacao(){
    return( <html lang="pt-br">
           <body>
               <Map/>
               {children} 
               <h1>Página de Localizacao!</h1>
           </body>
       </html> );
}
