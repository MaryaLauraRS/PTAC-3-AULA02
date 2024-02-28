import Link from "next/link"
import styles from "./componetes/menu.module.css"
export default function NotFound(){
    return (
        <header >
        <div className={styles.cabecalho}>
            <h2>Pagina não encontrada</h2>
            </div>
            <div>
            <Link href="/">Voltar para a página principal</Link>
        </div>
        </header>
    )
}