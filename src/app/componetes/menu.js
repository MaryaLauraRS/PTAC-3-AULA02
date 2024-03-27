import Link from "next/link"
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <Image 
            width={85}
            height={85}
            src={"https://www.ifms.edu.br/marcaifms.png"}/>
            
            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/registro">
                        <li>Registar</li>
                    </Link>
                    <Link href="/localizacao">
                    <li>Localizacao</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}