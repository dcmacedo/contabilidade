import React from 'react'
import Link from 'next/link'
import { enderecos } from '../../../utils/enderecos'
import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const AboutContent = (): JSX.Element => {
  return (
    <main className="content">
      <div className="about">
        <div className="header_about">
          <LayoutHeaderPages>
            <h2>
              Você vai aprender <strong>Excel</strong> na prática <br />
              sem complicações
            </h2>
            <h4>
              Nós ajudamos você a construir <br /> planilhas memoráveis
            </h4>
          </LayoutHeaderPages>
        </div>
        <div className="objetivo">
          <LayoutContentPages>
            <h1>Objetivo</h1>
            <p>
              Nosso grande objetivo é produzir conteúdos que solucionem problemas do dia-a-dia de profissionais,
              estudantes e todos àqueles que tenham dificuldades com planilhas eletrônicas e assuntos contábeis.
            </p>
            <p>
              Os conteúdos aqui apresentados serão elaborados utilizando a ferramenta de planilhas eletrônicas Microsoft
              Excel.
            </p>
          </LayoutContentPages>
        </div>
        <div className="metodologia">
          <LayoutContentPages>
            <h1>Metodologia</h1>
            <p>
              Serão apresentados conteúdos práticos ministrados através de dicas e tutoriais em{' '}
              <strong>
                <Link href={enderecos.canal}>
                  <a className="metod_videos">vídeos</a>
                </Link>{' '}
              </strong>
              envolvendo esta fascinante ferramenta, o Excel, e o mundo da contabilidade.
            </p>
            <p>Mostraremos exemplos de desafios do cotidiano de uma empresa, solucionados com o uso do Excel.</p>
            <p>
              Os dados apresentados serão sempre fictícios e quaisquer semelhanças com a realidade serão meras
              coincidências. Nunca utilizaremos dados reais de nenhuma empresa, em nenhuma hipótese.
            </p>
          </LayoutContentPages>
        </div>
        <div className="aplicacao">
          <LayoutContentPages>
            <h1>Aplicação</h1>
            <p>
              A contabilidade abrange diversas áreas da economia global, assim sendo, utilizaremos apenas conceitos
              gerais e que são aplicáveis a quaisquer ramos de atividade empresarial.
            </p>
            <p>As planilhas eletrônicas elaboradas utilizando o Excel serão disponibilizadas futuramente.</p>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default AboutContent
