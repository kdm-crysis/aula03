import { useState } from "react"

function App() {
  const [nome, setNome] = useState("")
  const [saudacao, setSaudacao] = useState("")

  function mudar_saudacao(e){
    setSaudacao(e.target.textContent)
  }
  return (
    <>
    <input type="text" onBlur={(e => setNome(e.target.value))} />
    <p>Olá, {nome} {saudacao} </p>
    <button onClick={mudar_saudacao}>Bom dia</button>
    <button onClick={mudar_saudacao}>Boa tarde</button>
    <button onClick={mudar_saudacao}>Boa noite</button>      
    </>
  )
}

export default App
