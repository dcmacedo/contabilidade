import Dicas_Content from './content'
import Header from './header'

const Dicas = (): JSX.Element => {
  return (
    <main className="content">
      <div className="dicas_page">
        <div className="dicas_header">
          <Header />
        </div>
        <div className="dicas_content">
          <Dicas_Content />
        </div>
      </div>
    </main>
  )
}

export default Dicas
