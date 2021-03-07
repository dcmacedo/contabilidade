import React from 'react'
import { useState, FormEvent } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'

import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const ContatoPage = (): JSX.Element => {
  const [email, setEmail] = useState('')

  function handleSignUpToNewsLetter(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/subscribe', { email })
    // console.log(email)
  }

  return (
    <main className="content">
      <div className="contato_page">
        <div className="contato_header">
          <LayoutHeaderPages>
            <Typography component="h1" variant="h5">
              Preencha para entrar na Lista
            </Typography>
          </LayoutHeaderPages>
        </div>
        <div className="contato_content">
          <LayoutContentPages>
            <form onSubmit={handleSignUpToNewsLetter}>
              <label>Nome</label>
              <input type="text" placeholder="Primeiro Nome" autoFocus autoComplete="true" />
              <label>Sobrenome</label>
              <input type="text" placeholder="Segundo Nome" autoComplete="true" />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@email.com.br"
                autoComplete="true"
              />
              <br />
              <input type="button" value="Enviar" />
            </form>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default ContatoPage
