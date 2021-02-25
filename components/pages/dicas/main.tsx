import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'
import Dicas_Content from './content'

const Dicas = (): JSX.Element => {
  return (
    <main className="content">
      <div className="dicas_page">
        <div className="dicas_header">
          <LayoutHeaderPages>
            <h2>Atalhos de Teclado para agilizar seu dia-a-dia no Excel</h2>
          </LayoutHeaderPages>
        </div>
        <div className="dicas_content">
          <LayoutContentPages>
            <Dicas_Content />
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default Dicas
