import Aplicacao from './aplicacao'
import Header from './header'
import Metodologia from './metodologia'
import Objetivo from './objetivo'

const AboutContent = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-2 mb-4 flex items-start justify-start">
        <Objetivo />
        <Metodologia />
        <Aplicacao />
      </div>
    </>
  )
}

export default AboutContent
