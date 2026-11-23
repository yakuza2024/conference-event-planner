import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catalog, meals } from '../data/catalog.js'
import { setItemQuantity } from '../store/eventSlice.js'

export function useEventPlanner() {
  const dispatch = useDispatch()
  const quantities = useSelector((state) => state.event.quantities)
  const [started, setStarted] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const setQuantity = (id, value) => {
    dispatch(setItemQuantity({ id, quantity: value }))
  }

  const lineItems = useMemo(() => (
    catalog
      .map((item) => ({
        ...item,
        quantity: quantities[item.id] || 0,
        subtotal: (quantities[item.id] || 0) * item.price,
      }))
      .filter((item) => item.quantity > 0)
  ), [quantities])

  const total = lineItems.reduce((sum, item) => sum + item.subtotal, 0)
  const selectedCount = lineItems.reduce((sum, item) => sum + item.quantity, 0)
  const mealIds = useMemo(() => new Set(meals.map((meal) => meal.id)), [])

  useEffect(() => {
    if (!detailsOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setDetailsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [detailsOpen])

  return {
    started,
    setStarted,
    detailsOpen,
    setDetailsOpen,
    quantities,
    setQuantity,
    lineItems,
    total,
    selectedCount,
    mealIds,
  }
}
