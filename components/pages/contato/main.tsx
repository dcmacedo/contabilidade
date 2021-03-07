// import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Grid from '@material-ui/core/Grid'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'

// // import { useForm, SubmitHandler } from 'react-hook-form'

// import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
// import LayoutContentPages from '../../layout/LayoutContentPages'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(0),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.success.dark,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: theme.palette.success.dark,
//   },
// }))

// const ContatoPage = (): JSX.Element => {
//   const classes = useStyles()

//   return (
//     <main className="content">
//       <div className="contato_page">
//         <div className="contato_header">
//           <LayoutHeaderPages>
//             <Typography component="h1" variant="h5">
//               Preencha para entrar na Lista
//             </Typography>
//           </LayoutHeaderPages>
//         </div>
//         <div className="contato_content">
//           <LayoutContentPages>
//             <Container component="main" maxWidth="xs">
//               <CssBaseline />
//               <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                   <LockOutlinedIcon />
//                 </Avatar>
//                 <form className={classes.form} noValidate>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         autoComplete="fname"
//                         name="firstName"
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="firstName"
//                         label="Nome"
//                         autoFocus
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="lastName"
//                         label="Sobrenome"
//                         name="lastName"
//                         autoComplete="lname"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email"
//                         name="email"
//                         autoComplete="email"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <FormControlLabel
//                         control={<Checkbox value="allowExtraEmails" color="primary" />}
//                         label="Aceito receber informações, promoções e atualizações por email."
//                       />
//                     </Grid>
//                   </Grid>
//                   <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
//                     Enviar
//                   </Button>
//                 </form>
//               </div>
//             </Container>
//           </LayoutContentPages>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default ContatoPage

import LayoutHeaderPages from '../../layout/LayoutHeaderPages'
import LayoutContentPages from '../../layout/LayoutContentPages'

const PlanPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="contato_page">
        <div className="contato_header">
          <LayoutHeaderPages>
            <h2>Contato</h2>
          </LayoutHeaderPages>
        </div>
        <div className="contato_content">
          <LayoutContentPages>
            <article>
              <h3>Conteúdo de Contatos (em Construção)</h3>
              <p>Neste espaço você poderá se cadastrar para receber novidades por email</p>
              <p>Em breve!!!</p>
            </article>
          </LayoutContentPages>
        </div>
      </div>
    </main>
  )
}

export default PlanPage
