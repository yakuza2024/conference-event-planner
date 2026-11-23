import { formatCurrency } from '../utils/currency.js'

function PlannerHeader({ total, onOpenSummary }) {
  return (
    <header className="topbar">
      <a className="wordmark" href="#top" onClick={(event) => event.preventDefault()}>
        <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
        <span>Gather<span className="wordmark-light">well</span></span>
      </a>
      <nav className="section-nav" aria-label="Planner sections">
        <a href="#rooms">Spaces</a>
        <a href="#add-ons">Add-ons</a>
        <a href="#meals">Catering</a>
      </nav>
      <button className="details-button" type="button" onClick={onOpenSummary}>
        <span className="receipt-icon" aria-hidden="true">▤</span>
        <span>View summary</span>
        <span className="button-total">{formatCurrency(total)}</span>
      </button>
    </header>
  )
}

export default PlannerHeader
