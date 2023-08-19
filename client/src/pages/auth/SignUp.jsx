import Layout from "./Layout";
import Title from "../../components/title";
import TextField from "../../components/textField";
import PrimaryBtn from "../../components/primaryBtn";
import LinkTo from "../../components/linkTo";

import { useState } from "react";

export default function SignUp() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };
   fetch("https://socialapp-sn6z.onrender.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

  };

  return (
    <Layout>
      <div>
        <Title title="Inscription" />
        <form className="">
          <div className="flex space-x-4">
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              label="Nom"
              type="text"
              placeholder="Nom"
            />
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              label="Prénom"
              type="text"
              placeholder="Prénom"
            />
          </div>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
            placeholder="Email"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Mot de passe"
            type="password"
            placeholder="Mot de passe"
          />
          <TextField
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            label="Confirmer le mot de passe"
            type="password"
            placeholder="Confirmer le mot de passe"
          />
          <PrimaryBtn onClick={handleSubmit} title="S'inscrire" />
        </form>
        <LinkTo text="Déjà un compte ?" target="/signin" link="Se connecter" />
      </div>
    </Layout>
  );
}
