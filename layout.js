import Menu from "./src/app/componetes/menu";
import Footer from "./src/app/componetes/Footer"

export const metadata = {
    title: "create nex app",
    description : "generanted by create next app"
};

export default function RootLayout({children}){
     return ( 
        <html lang="pt-br">
            <body>
                <Menu/>
                {children}
                <Footer/>
            </body>
        </html>
        );
     };