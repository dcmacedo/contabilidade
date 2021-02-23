import PlanContent from './content'
import Header from './header'

const PlanPage = (): JSX.Element => {
  return (
    <main className="content">
      <div className="plan_page">
        <div className="plan_header">
          <Header />
        </div>
        <div className="plan_content">
          <PlanContent />
        </div>
      </div>
    </main>
  )
}

export default PlanPage
