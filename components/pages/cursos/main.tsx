import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const CursosPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="cursos_page">
        <div className="cursos_header">
          <LayoutHeaderPages>
            <h2>Cursos</h2>
          </LayoutHeaderPages>
        </div>
        <div className="cursos_content">
          <LayoutContentPages>
            <article>
              <h3>Conteúdo de Cursos (em Construção)</h3>
              <p>Neste espaço você terá acesso à diversos cursos para alavancar sua vida profissional.</p>
              <p>Em breve!!!</p>
            </article>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default CursosPage
