import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import { OrderContents } from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"


function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder();

  return (
    <>
      <Header/>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="px-5">
          <h2 className="text-4xl font-black py-3">Menu</h2>
          
          <div className="mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 
            ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                /> 
              </>
            )
            : (
              <p className="text-center">La order esta vacia</p>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
