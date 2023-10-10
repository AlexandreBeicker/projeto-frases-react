import { useState } from 'react'
import './App.css'
import logoImg from './assets/imglogo.png'

function App() {
  const [textPhrase, setTextPrase] = useState("");
  const [categorySelect, setCategorySelect] = useState(0)
  const allPhrases = [
    {
      id: 1,
      name: "Motivação",
      phrase: [
        'Não importa o que você decidiu, o que importa é que isso te faça feliz.',
        'Todos os dias você se supera de alguma forma e isso já é o suficiente.',
        'Algumas vezes, coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.',
        'Se a caminhada está difícil, é porque você está no caminho certo. Não desista até conquistar aquilo que você merece!',
        'Não tenha medo de mudar, tenha medo de daqui um ano estar reclamando dos mesmos problemas.',
        'Você é mais corajoso do que pensa, mais forte do que parece e mais esperto do que acredita.',
        'Não é sobre quantas vezes você foi rejeitado, caiu e teve que levantar. É sobre quantas vezes você fica em pé, levanta a cabeça e segue em frente.',
      ]
    },
    {
      id: 2,
      name: "Bem estar",
      phrase: [
        'O bem-estar na vida obtém-se com o aperfeiçoamento da convivência entre os homens.',
        'Sempre que pensar em mim, sorria, pois também estarei pensando em você!',
        'Amizade: se estiver tudo bem, eu estarei contigo. Se estiver tudo mal, eu estarei contigo também.',
        'Talvez a melhor decoração natalina seja o sorriso daqueles que nos amam e prezam pelo nosso bem-estar.',
        'Hoje as emoções são tantas que mal cabem em meu coração! Por isso, jamais poderia deixar de desejar um feliz aniversário com todo carinho e intensidade. Posso estar atrasado, mas não me esqueço de você! Muitas felicidades.',
        'Se estiver tudo bem, eu estarei contigo. Se estiver tudo mal, eu estarei contigo também! Feliz aniversário, amiga amada e querida. Muitas felicidades!',
        'Esqueça o que não conseguiu hoje e foque nas coisas maravilhosas que o amanhã tem para você! Boa noite, concentre-se apenas no seu descanso e bem-estar.',
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
