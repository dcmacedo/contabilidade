const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container mt-16 mb-16 p-2 mx-auto flex items-center justify-center">
          <div className="box-content h-auto w-screen p-4 border-0 shadow-md">
            <p className="align-middle text-center text-3xl font-sans font-semibold text-green-900">
              Você vai aprender <strong>Excel</strong> na prática <br />
              sem complicações
            </p>
            <p className="align-middle text-center text-base font-sans font-semibold text-green-900">
              <br />
              Nós ajudamos você a construir <br /> planilhas memoráveis
            </p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
