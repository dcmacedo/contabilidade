import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const PlanPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="plan_page">
        <div className="plan_header">
          <LayoutHeaderPages>
            <h2>Planilhas</h2>
          </LayoutHeaderPages>
        </div>
        <div className="plan_content">
          <LayoutContentPages>
            <article>
              <h3>Conteúdo de Planilhas (em Construção)</h3>
              <p>Neste espaço você poderá efetuar o download de diversas planilhas incríveis!</p>
              <p>Em breve!!!</p>
            </article>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default PlanPage
