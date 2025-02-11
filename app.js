'use strict'

const disciplinas = [
{nome:    'PWBE', cor: '#8A2BE2', icon: 'PPDM.png'},
{nome:    'PWFE', cor: '#BFEFFF', icon: 'PRO.png'},
{nome:    'PPDM', cor: '#54FF9F ', icon: 'PWBE.png'},
{nome:    'PRO', cor: '#FFD700', icon: 'PWFE.png'}

]

function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novaImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)

const personagens = [
    {nome: 'Calleri', descricao: 'Jonathan Calleri é um jogador argentino que atua como centroavante do São Paulo.', imagem: 'calleri.jpg', cor: 'rgb(255, 0, 0)'},
    {nome: 'Lucas Moura', descricao: 'Lucas Rodrigues Moura da Silva é um jogador brasileiro que atua como meia-atacante ou ponta. Atualmente joga pelo São Paulo.', imagem: 'lucas.png', cor: 'rgb(255, 0, 0)'},
    {nome: 'Luciano', descricao: 'SLuciano da Rocha Neves é um  jogador brasileiro que atua como atacante. Atualmente joga no São Paulo.', imagem: 'luciano.png', cor: 'rgb(255, 0, 0)'}
];

function criarCard(personagem) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = personagem.cor;

    // Imagem do card
    const imagem = document.createElement('img');
    imagem.src = `icon/${personagem.imagem}`;
    imagem.alt = personagem.nome;

    // Título (nome) do card
    const h2 = document.createElement('h2');
    h2.textContent = personagem.nome;

    // Descrição do card
    const p = document.createElement('p');
    p.textContent = personagem.descricao;

    // Adiciona os elementos dentro do card
    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);

    // Adiciona o card ao container
    container.appendChild(card);
}
personagens.forEach(criarCard);