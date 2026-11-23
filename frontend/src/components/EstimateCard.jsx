import { formatCurrency } from '../utils/currency.js'

function EstimateCard({ total, selectedCount, onOpenSummary }) {
  return (
    <aside className="estimate-card" aria-live="polite">
      <span className="estimate-label">YOUR ESTIMATE</span>
      <span className="estimate-total">{formatCurrency(total)}</span>
      <span className="estimate-caption">Based on your selections</span>
      <div className="estimate-divider" />
      <div className="estimate-row">
        <span>Selected items</span>
        <strong>{selectedCount}</strong>
      </div>
      <button type="button" className="estimate-link" onClick={onOpenSummary}>
        See your breakdown <span aria-hidden="true">↗</span>
      </button>
      <p className="estimate-note">Your event is coming together beautifully.</p>
    </aside>
  )
}

export default EstimateCard
