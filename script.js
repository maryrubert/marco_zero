const arrayPostagens = [
  {
    titulo: "Recife",
    data: "07/10/2015",
    texto: "Recife antigo vale a pena conhecer. Praia do forte, Ilha de Itamaracá, Boa viagem, Olinda... E principalmente Porto de Galinhas!!"
  },

  {
    titulo: "'Horrorosa. Só serve como ponto de apoio para se deslocar para outras cidades'",
    data: "06/10/2015",
    texto: "A cidade é simplesmente horrorosa. São quilômetros e quilômetros de pichação. Nas praias, não se entra, porque há o risco de ser devorado por tubarões. Muito esgoto, muita falta de infraestrutura para o turismo. Shoppings velhos que são iguais a outros quinhentos mil shoppings existentes em qualquer lugar do Brasil. Construções precárias, sujeira e insegurança. Uma cidade não vive só de igrejas ou de monumentos históricos, pontos turísticos qualquer cidade tem, mas em Recife, em especial, nem isso basta. Uma das poucas coisas boas é o aeroporto, que possui uma infraestrutura razoável e preços interessantes para quem quer se deslocar até a Europa (há voos Recife -> Lisboa). Quer ver algo interessante? Vá até Porto de Galinhas."

  },

  {
    titulo: "'Boas Atrações!!'",
    data: "25/09/2015",
    texto: "Fiquei 02 dias, Praia de Boa Viagem ótima, com segurança, quiosques, infraestrutura excelente, caminhada, quiosques bons, feirinha noturna com grande movimento e comprar aquela lembrança. Custo baixo para o local e sua atrações."

  },
  {
    titulo: "'Muito bom'",
    data: "05/09/2015",
    texto: "Recife é a melhor capital do nordeste. Tem os melhores hotéis, o melhor porto, aeroporto internacional com vôos para todos os lugares, clima agradável o ano todo, com vasta cultura, muitas opções de lazer, de praias, museus e diversos passeios, para ir com ou sem crianças. Ótimos restaurantes, shoopings, um polo médico muito avançado. Estive por várias vezes e sempre retorno."

  },
]


//InnerHtml
//const article = document.querySelector("article")
//console.log(article.innerHTML)

//InnerText
//const article = document.querySelector("article")
//console.log(article.innerText)


//Criar o elemento
const article = document.createElement("article")
const article2 = document.createElement("article")
const article3 = document.createElement("article")

//Popular o elemento

article.innerHTML = `<h3>${arrayPostagens[1].titulo}</h3>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[1].texto}</p>`

article2.innerHTML = `<h3>${arrayPostagens[2].titulo}</h3>
<div class="data">${arrayPostagens[2].data}</div>
<p>${arrayPostagens[2].texto}</p>`

article3.innerHTML = `<h3>${arrayPostagens[3].titulo}</h3>
<div class="data">${arrayPostagens[3].data}</div>
<p>${arrayPostagens[3].texto}</p>`


//Adicionar elemento na DOM

const main = document.querySelector("main")
main.appendChild(article)
main.appendChild(article2)
main.appendChild(article3)