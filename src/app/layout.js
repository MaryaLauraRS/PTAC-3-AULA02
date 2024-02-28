import Menu from "./componetes/Menu";
import Footer from "./componetes/Footer"

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