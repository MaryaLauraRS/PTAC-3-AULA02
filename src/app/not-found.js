import Link from "next/link"

export default function NotFound(){
    return (
        <div>
            <h2>Pagina não encontrada</h2>
            <Link href="/">Voltar para a página principal</Link>
        </div>
    )
}