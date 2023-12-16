import {useState, useEffect} from 'react'
import '../style/SearchPage.scss'
import { Link } from "react-router-dom";

export default function SearchPage() {
    const [Search, SetSearch] = useState('')
    const [SearchResutl, SetSearchResutl] = useState(require('../sneakers.json').goods)
 
    useEffect(() => {
        SetSearchResutl(
            require('../sneakers.json').goods.filter(product=>{
    
                return product.title.toLowerCase().includes(Search.toString().toLowerCase())
              })
        )
      console.log(SearchResutl.length)
    }, [Search]);
    
  return (
    <>
    <div className="seacrh-input-component">
          <div className="small-search">
            <input type="text" className='search-input' placeholder="Искать здесь..." onChange={(el) => {
                    SetSearch(el.target.value)
                  }} />

            <button>найти</button>
            <div className="search-tips">


   {(() => {
    if(SearchResutl){
   return <div>
        {SearchResutl.slice(0,5).map((product) =>
          <Link to={'/product/sneakers/' + product.unique_code}>  <div className="found-item">{(product.title).replace("Кроссовки", "")}</div></Link>
        )}
    </div>

    
      }
   
      })()}
     {(() => {

    if(!SearchResutl[0]){
      return (
        <div className="not-found">
        ничего не найдено
      </div> 
      )

    }
      })()}

















            
           
            </div>
          </div>
    </div>
    </>
  )
}
