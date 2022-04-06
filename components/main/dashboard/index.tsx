import MarketCap from './MarketCap'
import Distribution from './Distribution'
import Ads from './Ads'
import ChartsWrapper from './ChartsWrapper'

const Index = () => {
  return (
    <div className="scrolltype h-full overflow-auto pr-2">
      <div className="grid grid-cols-12 gap-4">
        <MarketCap />
        <Distribution />
        <Ads />
      </div>
      <div className="chart-wrapper min-h-[50%] grid grid-cols-1 py-6">
        <div className="col-span-1">
          <ChartsWrapper />
        </div>
      </div>
    </div>
  )
}

export default Index
