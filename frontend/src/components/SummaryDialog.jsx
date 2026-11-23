import { formatCurrency } from '../utils/currency.js'

function SummaryDialog({ open, lineItems, mealIds, total, onClose }) {
  if (!open) return null

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="summary-dialog" role="dialog" aria-modal="true" aria-labelledby="summary-title">
        <div className="dialog-heading">
          <div>
            <span className="section-kicker">THE BIG PICTURE</span>
            <h2 id="summary-title">Your event summary</h2>
            <p>A clear look at everything you’ve planned.</p>
          </div>
          <button className="close-button" type="button" aria-label="Close summary" onClick={onClose}>×</button>
        </div>
        {lineItems.length === 0 ? (
          <div className="empty-summary">
            <span aria-hidden="true">✳</span>
            <h3>A good plan starts anywhere.</h3>
            <p>Add a space, an extra, or a meal to see your estimate here.</p>
          </div>
        ) : (
          <div className="summary-table-wrap">
            <table className="summary-table">
              <thead>
                <tr><th scope="col">Selection</th><th scope="col">Unit cost</th><th scope="col">Qty.</th><th scope="col">Subtotal</th></tr>
              </thead>
              <tbody>
                {lineItems.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.name}</th>
                    <td>{formatCurrency(item.price)}{mealIds.has(item.id) && <span className="table-unit"> / person</span>}</td>
                    <td>{item.quantity}</td>
                    <td>{formatCurrency(item.subtotal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="summary-total">
          <span>Total estimate</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
        <button type="button" className="dialog-done" onClick={onClose}>Back to planning <span aria-hidden="true">→</span></button>
      </section>
    </div>
  )
}

export default SummaryDialog
