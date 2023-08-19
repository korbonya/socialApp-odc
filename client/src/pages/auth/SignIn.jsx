import Layout from "./Layout"
import Title from "../../components/title"
import TextField from "../../components/textField"
import PrimaryBtn from "../../components/primaryBtn"
import LinkTo from "../../components/linkTo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { email, password }
    if(email && password !== ""){
      fetch("https://socialapp-sn6z.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.token){
            localStorage.setItem('user', JSON.stringify(data)) 
            navigate('/')
          }
        })
    } else {
      alert("Veuillez remplir tous les champs")
    }
  }


  return (
    <Layout>
      <div>
        <Title title="Connexion" />
        <form className="flex flex-col space-y-4">
            <TextField onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="Email" />
            <TextField onChange={(e) => setPassword(e.target.value)} label="Mot de passe" type="password" placeholder="Mot de passe" />
            <PrimaryBtn onClick={handleSubmit} title="Se connecter" />
          </form>
          <LinkTo text="Pas encore de compte ?" target="/signup" link="S'inscrire" />
      </div>
    </Layout>
  )
}
