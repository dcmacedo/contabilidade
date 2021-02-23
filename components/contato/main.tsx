import Header from './header'

const Contato = (): JSX.Element => {
  return (
    <main className="content">
      <div className="contato_page">
        <div className="contato_header">
          <Header />
        </div>
        <div className="contato_content">
          <h3>Conteúdo de Contato</h3>
        </div>
      </div>
    </main>
  )
}

export default Contato
