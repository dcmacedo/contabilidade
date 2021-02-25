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
            <h3>Conteúdo de Contato</h3>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default ContatoPage
