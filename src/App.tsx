import { useState } from 'react'
import './App.css'
import logoImg from './assets/imglogo.png'

function App() {
  const [textPhrase, setTextPrase] = useState("");
  const [categorySelect, setCategorySelect] = useState(0)
  const allPhrases = [
    {
      id: 1,
      name: "Frases de Programação",
      phrase: [
        "Ctrl+C, Ctrl+V, Ctrl+Lucro.",
        "Reiniciar é a solução para 99% dos problemas, incluindo os da vida real.",
        "Se meu código funcionar, eu não comentei o suficiente.",
        "Git: o lugar onde os sonhos de merge se tornam pesadelos.",
        "As regras do Clube de Luta: nunca fale sobre seus scripts de automação.",
        "Programadores são como magos: transformam café em código.",
        "A vida é muito curta para escrever código ruim.",
        "Cafeína é a fonte de energia para o compilador humano.",
        "Se não está quebrado, provavelmente é a última versão.",
        "Eu poderia resolver esse problema, mas eu sou preguiçoso o suficiente para escrever um script para fazê-lo por mim.",
        "Debugar é duas vezes mais difícil que programar; portanto, se você escrever o código mais inteligentemente possível, você ainda será burro demais para depurar.",
        "Meu outro carro é um compilador.",
        "Programar é como fazer um sanduíche: muitas camadas e você sempre esquece o que está no meio.",
        "Quando meu código funciona, eu sou um programador. Quando não funciona, eu sou um 'engenheiro de testes'.",
        "A única coisa mais assustadora que um bug é o silêncio de um programador.",
        "O café é o combustível que mantém os bugs à distância.",
        "A melhor forma de acelerar um projeto é adicionar mais café.",
        "As melhores ideias vêm quando estou tomando banho ou tentando dormir. Nunca quando estou sentado em frente ao computador.",
        "Cada vez que um usuário pede uma funcionalidade urgente, um desenvolvedor ganha asas.",
        "Quem não documenta o código é condenado a reescrevê-lo.",
        "Quando o código está funcionando, não mexa nele. Quando não está, reescreva-o.",
        "Em um mundo de 0s e 1s, seja o 2.",
        "Código é como humor, se você precisa explicar, não é bom.",
        "Não é um bug, é uma feature inesperada.",
        "Seja amigável com os colegas de equipe, você pode precisar deles para corrigir seu código um dia.",
        "O software é como a entropia: está sempre aumentando.",
        "Às vezes, eu acho que o Stack Overflow é a verdadeira matriz.",
        "Mantenha a calma e apenas adicione mais uma camada de abstração.",
        "Se você é bom em resolver problemas, você está no time certo. Se é bom em evitar problemas, você é um gerente de projeto.",
        "A arte de programar é a habilidade de descrever processos complexos com simples instruções.",
        "O código de outra pessoa sempre parece melhor.",
        "O segundo melhor momento para começar um projeto é agora. O melhor momento foi ontem, quando você deveria ter começado.",
        "Achava que sabia Python até conhecer o Zen do Python.",
        "O bom programador se adapta, o ótimo adota as novas tecnologias.",
        "Nunca confie em um código que você não entende.",
        "A melhor maneira de aprender é ensinar o seu código a alguém.",
        "Nenhum código é à prova de estagiário.",
        "Quanto mais cedo você começar a codificar, mais tempo você terá para fazer café.",
        "Um programador sem café é como um HTML sem CSS: inútil.",
        "A última linha de código é sempre aquela que você acabou de escrever.",
      ]
    },
    {
      id: 2,
      name: "Dicas de Programação",
      phrase: [
        "Mantenha o código limpo e legível para facilitar a manutenção.",
        "Comente seu código para que outras pessoas possam entender facilmente.",
        "Siga os princípios do DRY (Don't Repeat Yourself) para evitar duplicação de código.",
        "Use nomes descritivos para variáveis, funções e classes.",
        "Aprenda a resolver problemas antes de se preocupar com a sintaxe.",
        "Pratique, pratique e pratique mais um pouco. A prática leva à perfeição.",
        "Domine um idioma antes de passar para o próximo.",
        "Use controle de versão para rastrear mudanças em seu código.",
        "Entenda os requisitos do projeto antes de começar a codificar.",
        "Não tenha medo de pedir ajuda ou procurar documentação.",
        "Participe da comunidade de desenvolvedores para aprender com os outros.",
        "Resolva problemas em pequenas etapas antes de abordar o projeto como um todo.",
        "Mantenha-se atualizado com as tendências e avanços da tecnologia.",
        "Aprenda a priorizar e gerenciar seu tempo de forma eficaz.",
        "Não otimize prematuramente; otimize quando for necessário.",
        "Teste seu código de forma abrangente para evitar bugs.",
        "Mantenha-se curioso e sempre procure aprender algo novo.",
        "Conheça as estruturas de dados e algoritmos fundamentais.",
        "Entenda os princípios de segurança da informação e proteja seu código.",
        "Pare regularmente para revisar e refatorar seu código.",
        "Experimente diferentes IDEs e ferramentas para encontrar as que melhor se adaptam ao seu estilo.",
        "Siga os padrões de codificação estabelecidos em sua equipe ou comunidade.",
        "Pratique a resolução de problemas em plataformas de desafios de programação.",
        "Seja paciente e persistente ao enfrentar problemas complexos.",
        "Aprenda a trabalhar em equipe e a colaborar em projetos compartilhados.",
        "Entenda os princípios do paradigma de programação que está usando (ex: orientação a objetos, funcional).",
        "Não tenha medo de falhar; os erros são oportunidades de aprendizado.",
        "Evite magia negra no código - mantenha a lógica clara e explícita.",
        "Mantenha uma atitude de aprendizado contínuo e humildade.",
        "Simplifique problemas complexos quebrando-os em partes menores.",
        "Aprenda a fazer análises de complexidade para avaliar o desempenho de seu código.",
        "Pratique a escrita de pseudocódigo para planejar suas implementações.",
        "Entenda os princípios de escalabilidade ao projetar sistemas.",
        "Evite a procrastinação; comece com algo pequeno e vá construindo a partir daí.",
        "Use frameworks e bibliotecas quando apropriado para economizar tempo e esforço.",
        "Seja consistente em seu estilo de codificação para melhorar a legibilidade.",
        "Evite código espaguete - mantenha sua lógica estruturada e organizada.",
        "Aprenda a resolver problemas de forma eficiente e elegante.",
        "Construa um portfólio para mostrar suas habilidades e projetos.",
        "Não desista - a persistência é a chave para se tornar um programador bem-sucedido."
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategorySelect(index)
  }
  function generatePhrase(){
    let randomNumber = Math.floor(Math.random() * allPhrases[categorySelect].phrase.length);
    setTextPrase(`"${allPhrases[categorySelect].phrase[randomNumber]}"`);
  }

  return (
    <div className='container'>
      <img  
        alt='Logo frases'
        src={logoImg}
        className='logo'
      />
      <h2 className='category'>Categorias</h2>
      <section className='category-area'>
        {allPhrases.map((item, index) => (
            <button 
            key={item.id}
            className='category-button'
              style={{
                borderWidth: item.name === allPhrases[categorySelect].name ? 2 : 0,
                borderColor: "#1fa4db"
              }}

              onClick={() => handleSwitchCategory(index)}
              >
              {item.name}
            </button>
        ))}
      </section>

      <button className='button-phrase' onClick={generatePhrase}>Gerar frase</button>

        {textPhrase !== '' && <p className='text-phrase'>{textPhrase}</p>}

    </div>
  )
}

export default App
