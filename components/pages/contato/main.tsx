import React from 'react'
import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const ContatoPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="contato_page">
        <div className="contato_header">
          <LayoutHeaderPages />
        </div>
        <div className="contato_content">
          <LayoutContentPages>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5e1M-uZEHI0L-CY2zyTsV47WYbzawRd1u8KEGvshzTzy3ew/viewform?embedded=true" width="640" height="730">Carregando…</iframe>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default ContatoPage
