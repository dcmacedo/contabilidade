import Link from 'next/link'
import React from 'react'

const enderecos = {
  canal: 'https://www.youtube.com/channel/UCCpOwI4cOpGyP_OmWjo243g',
}

const Metodologia = (): JSX.Element => {
  return (
    <div>
      <h1>Metodologia</h1>
      <p>
        Serão apresentados conteúdos práticos ministrados através de dicas e tutoriais em{' '}
        <strong>
          <Link href={enderecos.canal}>
            <a className="metod_videos">videos</a>
          </Link>{' '}
        </strong>
        envolvendo esta fascinante ferramenta, o Excel, e o mundo da contabilidade.
      </p>
      <p>Mostraremos exemplos de desafios do cotidiano de uma empresa, solucionados com o uso do Excel.</p>
      <p>
        Os dados apresentados serão sempre fictícios e quaisquer semelhanças com a realidade serão meras coincidências.
        Nunca utilizaremos dados reais de nenhuma empresa, em nenhuma hipótese.
      </p>
    </div>
  )
}

export default Metodologia
