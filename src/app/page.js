const url = "https://back-end-ifms-flame.vercel.app/campi";

export default async function Home() {

  const resposta = await fetch(url,{
    method: "GET",
    cache: "no-cache"
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
      <div class="card">
        <div class="card-text"> 
             <h2>{campus.nome_campus}</h2>
        </div>
        </div>
      )}
    </main>
  )
}