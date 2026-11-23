function ProductCard({ item, quantity, onQuantityChange, formatCurrency, variant }) {
  return (
    <article className={`product-card product-card-${variant}`}>
      <div className="product-card-top">
        <span className="product-number">{item.icon}</span>
        <span className="product-price">{formatCurrency(item.price)} <span>/ each</span></span>
      </div>
      <div className="product-card-image">
        <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
      </div>
      <h3>{item.name}</h3>
      <p className="product-description">{item.detail}</p>
      {variant === 'room' && (
        <p className="product-capacity"><span aria-hidden="true">♧</span> Seats up to {item.capacity}</p>
      )}
      <div className="product-card-bottom">
        <div className="quantity-control" aria-label={`${item.name} quantity`}>
          <button
            type="button"
            aria-label={`Remove one ${item.name}`}
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity === 0}
          >−</button>
          <span aria-live="polite">{quantity}</span>
          <button
            type="button"
            aria-label={`Add one ${item.name}`}
            onClick={() => onQuantityChange(quantity + 1)}
          >+</button>
        </div>
        {quantity > 0 && <span className="line-price">{formatCurrency(item.price * quantity)}</span>}
      </div>
    </article>
  )
}

export default ProductCard
