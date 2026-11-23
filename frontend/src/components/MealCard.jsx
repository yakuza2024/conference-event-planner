import { formatCurrency } from '../utils/currency.js'

function MealCard({ item, quantity, onQuantityChange }) {
  return (
    <article className="meal-card">
      <img className="meal-card-image" src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
      <div className="meal-info">
        <h3>{item.name}</h3>
        <p>{item.detail}</p>
        <strong>{formatCurrency(item.price)} <span>/ person</span></strong>
      </div>
      <label className="guest-input">
        <span className="sr-only">Guests for {item.name}</span>
        <input
          type="number"
          min="0"
          step="1"
          inputMode="numeric"
          value={quantity || ''}
          placeholder="0"
          onChange={(event) => onQuantityChange(event.target.value)}
        />
        <span>guests</span>
      </label>
    </article>
  )
}

export default MealCard
