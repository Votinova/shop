
import { useContext} from "react";
import { ShopContext } from "../../context/context";

export const FormSearch = () => {
  
  const { setSearchTerm }= useContext(ShopContext);
  return (
   <form className='formSearch' >
    <label className="label">
      Поиск
    </label>
    <input title='search' type="text" onChange={(event) => setSearchTerm(event.target.value)} className="input">
    </input>
   </form>
  )
}
