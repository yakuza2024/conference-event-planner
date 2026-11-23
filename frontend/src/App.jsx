import LandingPage from './pages/LandingPage.jsx'
import PlannerHeader from './components/PlannerHeader.jsx'
import SelectionSection from './components/SelectionSection.jsx'
import EstimateCard from './components/EstimateCard.jsx'
import SummaryDialog from './components/SummaryDialog.jsx'
import { rooms, addons, meals } from './data/catalog.js'
import { useEventPlanner } from './hooks/useEventPlanner.js'
import './App.css'

function App() {
  const planner = useEventPlanner()
  const {
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
  } = planner

  if (!started) return <LandingPage onStart={() => setStarted(true)} />

  return (
    <div className="planner">
      <PlannerHeader total={total} onOpenSummary={() => setDetailsOpen(true)} />

      <main className="planner-main">
        <div className="planner-intro" id="top">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR EVENT, YOUR WAY</div>
          <h1>Make room for<br /><em>something great.</em></h1>
          <p>Build your perfect event, one thoughtful detail at a time.</p>
        </div>

        <div className="planner-layout">
          <div className="selection-sections">
            <SelectionSection
              id="rooms"
              kicker="01 / THE SETTING"
              title="Choose your spaces"
              description="Find the right room for every kind of gathering."
              countLabel="05 options"
              items={rooms}
              quantities={quantities}
              onQuantityChange={setQuantity}
              variant="room"
            />
            <SelectionSection
              id="add-ons"
              kicker="02 / THE DETAILS"
              title="Set the scene"
              description="All the little extras that make a big difference."
              countLabel="05 options"
              items={addons}
              quantities={quantities}
              onQuantityChange={setQuantity}
              variant="addon"
            />
            <SelectionSection
              id="meals"
              kicker="03 / A SEAT AT THE TABLE"
              title="Make it delicious"
              description="Choose your menus and tell us how many guests to serve."
              countLabel="04 menus"
              items={meals}
              quantities={quantities}
              onQuantityChange={setQuantity}
              variant="meal"
            />
          </div>
          <EstimateCard
            total={total}
            selectedCount={selectedCount}
            onOpenSummary={() => setDetailsOpen(true)}
          />
        </div>
      </main>
      <SummaryDialog
        open={detailsOpen}
        lineItems={lineItems}
        mealIds={mealIds}
        total={total}
        onClose={() => setDetailsOpen(false)}
      />
    </div>
  )
}

export default App
