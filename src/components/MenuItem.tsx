import type { MenuItem } from "../types/types"
import { formatCurrency } from "../helpers/helpers"


type MenuItemProps = {
     item: MenuItem
     addItem: (item: MenuItem) => void
}

const MenuItem = ({item, addItem}: MenuItemProps) => {
  return (
    <button
        className="border-2 border-teal-200 w-full p-3 flex justify-between hover:bg-teal-100 mb-3"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}

export default MenuItem
