import { Acao } from "./obj";
import { Romance } from "./obj";
import { Filme } from "./obj";

const listaDeFilmes : Filme[] = [
    new Romance('Titanic', 1988, 'Romance'),
    new Acao('Maverick', 2022, 'Ação')
]

const recomendar = (genero:string) => {
    const resultado = listaDeFilmes.filter(filme => filme.genero === genero)
    console.log(resultado)
}

listaDeFilmes.forEach(listaDeFilmes =>{
    listaDeFilmes.exibirDetalhes();
})


recomendar("Romance");