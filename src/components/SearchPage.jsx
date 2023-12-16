import {useState, useEffect} from 'react'
import '../style/SearchPage.scss'

export default function SearchPage() {
    const [Search, SetSearch] = useState('')
    const [SearchResutl, SetSearchResutl] = useState(require('../sneakers.json').goods)
 
    useEffect(() => {
        SetSearchResutl(
            require('../sneakers.json').goods.filter(product=>{
    
                return product.title.toLowerCase().includes(Search.toString().toLowerCase())
              })
        )
      
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
                {SetSearchResutl.length ?  (
            <>
                    {SearchResutl.slice(0,5).map((product) =>
                                        <div className="found-item">{(product.title).replace("Кроссовки", "")}</div>
                     )}
           </>
           ):(
            <>
            
                <div className="not-found">
                ничего не найдено
               </div> 
            </>
            )
        }
    
                
            
           
            </div>
          </div>
    </div>
    </>
  )
}
