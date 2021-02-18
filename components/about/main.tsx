import Aplicacao from './aplicacao'
import Header from './header'
import Metodologia from './metodologia'
import Objetivo from './objetivo'

const AboutContent = (): JSX.Element => {
  return (
    <main className="content">
      <div className="about">
        <div className="header_about">
          <Header />
        </div>
        <div className="objetivo">
          <Objetivo />
        </div>
        <div className="metodologia">
          <Metodologia />
        </div>
        <div className="aplicacao">
          <Aplicacao />
        </div>
      </div>
    </main>
  )
}

export default AboutContent
