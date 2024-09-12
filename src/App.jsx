import './App.css'
import Uppercase from './components/uppercase/UppercaseText.jsx'
import Button from './components/button/button.jsx'

function App() {
  return (
    <>
      <Uppercase text='Esse parágrafo esta colorido e com todas as letras maiúsculas' color='blue'/>
      <Button label='Baixar CV'/>
    </>
  )
}

export default App
