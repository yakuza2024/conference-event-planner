import ProductCard from './ProductCard.jsx'
import MealCard from './MealCard.jsx'
import { formatCurrency } from '../utils/currency.js'

function SelectionSection({ id, kicker, title, description, countLabel, items, quantities, onQuantityChange, variant }) {
  return (
    <section className="selection-section" id={id}>
      <div className="section-heading">
        <div>
          <span className="section-kicker">{kicker}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="section-count">{countLabel}</span>
      </div>
      {variant === 'meal' ? (
        <div className="meal-grid">
          {items.map((item) => (
            <MealCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] || 0}
              onQuantityChange={(value) => onQuantityChange(item.id, value)}
            />
          ))}
        </div>
      ) : (
        <div className={variant === 'room' ? 'room-grid' : 'addon-grid'}>
          {items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] || 0}
              onQuantityChange={(value) => onQuantityChange(item.id, value)}
              formatCurrency={formatCurrency}
              variant={variant}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default SelectionSection
