import { useState, useEffect } from "react";
import "../style/SearchPage.scss";
import { Link } from "react-router-dom";

export default function SearchPage() {
  
   if(!localStorage.getItem("SearchHistory")){
    localStorage.setItem("SearchHistory", JSON.stringify([]));
   }
 const [Search, SetSearch] = useState("");
 const [SearchResutl, SetSearchResutl] = useState(require("../sneakers.json").goods);
 function addToSearchHistory(title) {
  console.log(localStorage.getItem("SearchHistory"));
  if(localStorage.getItem("SearchHistory")) {
   if(!JSON.parse(localStorage.getItem("SearchHistory")).includes(title)) {
    console.log("incluudes");
    if(SearchResutl) {
     localStorage.setItem("SearchHistory", JSON.stringify([...JSON.parse(localStorage.getItem("SearchHistory")), title]));
    }
   }
  } else {
   localStorage.setItem("SearchHistory", JSON.stringify([]));
  }
 }
 useEffect(() => {
  SetSearchResutl(
   require("../sneakers.json").goods.filter((product) => {
    return product.title.toLowerCase().includes(Search.toString().toLowerCase());
   }),
  );
  console.log(SearchResutl.length);
 }, [Search]);

 return (
  <>
   <div className="seacrh-input-component">
    <div className="small-search">
     <input
      type="text"
      className="search-input"
      autoFocus="true"
      placeholder="Искать здесь..."
      onChange={(el) => {
       SetSearch(el.target.value);
      }}
     />

     <button
      onClick={() => {
       addToSearchHistory(Search);
      }}
     >
      найти
     </button>
     <div className="search-tips">
      {(() => {
       if (!Search) {
        return (
         <div>
          {JSON.parse(localStorage.getItem("SearchHistory"))
           .slice(0, 5)
           .map((product) => (
            <Link to={"/product/sneakers/"}>
             {" "}
             <div className="found-item">{product.replace("Кроссовки", "")}</div>
            </Link>
           ))}
         </div>
        );
       }
      })()}
      {(() => {
       if (SearchResutl && Search) {
        return (
         <div>
          {SearchResutl.slice(0, 5).map((product) => (
           <Link to={"/product/sneakers/" + product.unique_code}>
            {" "}
            <div className="found-item">{product.title.replace("Кроссовки", "")}</div>
           </Link>
          ))}
         </div>
        );
       }
      })()}
      {(() => {
       if (!SearchResutl[0]) {
        return <div className="not-found">ничего не найдено</div>;
       }
      })()}
     </div>
    </div>
   </div>
  </>
 );
}
