import React from 'react'
// import Link from 'next/link'
import Link from '@material-ui/core/Link'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { enderecos } from '../../../utils/enderecos'

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      <Link href="/">
        {'Copyright © '}
        <a target="_blank">Contabilidade e Excel</a> {new Date().getFullYear()}{' '}
      </Link>{' '}
    </Typography>
  )
}

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <Box mt={0} className="copyright">
        <Copyright />
      </Box>
      <Link href={enderecos.github}>
        <a target="_blank"> Desenvolvido por Danilo C. Macedo</a>
      </Link>
    </footer>
  )
}

export default Footer
