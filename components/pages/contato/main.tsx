import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const ContatoPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="contato_page">
        <div className="contato_header">
          <LayoutHeaderPages>
            <h2>Contato</h2>
          </LayoutHeaderPages>
        </div>
        <div className="contato_content">
          <LayoutContentPages>
            {/* <form>
              <h2>Preencha para entrar na Lista</h2>

              <div className="input">
                <input required type="text" />
                <label htmlFor="Nome">Nome </label>
                <span className="error"></span>
              </div>

              <div className="input">
                <input required type="email" />
                <label htmlFor="Email">Email </label>
                <span className="error"></span>
              </div>

              <button type="submit">Enviar</button>
            </form> */}
            <h2>Página de Contatos</h2>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default ContatoPage
