import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'
import { enderecos } from '../../../utils/enderecos'

const CursosPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="cursos_page">
        <div className="cursos_header">
          <LayoutHeaderPages>
            <h2>Painel de Cursos</h2>
          </LayoutHeaderPages>
        </div>
        <div className="cursos_content">
          <LayoutContentPages>
            <Link href={enderecos.viscari}>
              <a className="viscari">
                <Image src="/2-00.fw.png" alt="CURSO POWER BI" width={400} height={400} />
              </a>
            </Link>{' '}
            <Link href={enderecos.curso_auxadm}>
              <a className="curso_auxadm">
                <Image
                  src="/CRIATIVOS-CURSO-ADM-02Prancheta-1-copiar-2.png"
                  alt="CURSO AUX. ADM."
                  width={400}
                  height={400}
                />
              </a>
            </Link>{' '}
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default CursosPage
