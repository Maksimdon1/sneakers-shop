import React from 'react'
import '../../style/house.css'
import { HouseButton, SetHouseButton, Setfrequency } from '../../requests/house'
import { useQuery } from "react-query";

export default function House() {
  const data = useQuery("btnState", SetHouseButton, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });
  console.log(data);


  const [state, setState] = React.useState()
  function btn(el){
      console.log((el.target.id),(el.target.checked))
      
      const post =  HouseButton(el.target.id, el.target.checked)
      post.then((el)=>{console.log(el[0])})
   
  }
  function frequency(frequency){


    const post = Setfrequency(1, frequency)
    post.finally((el)=>{
      console.log(el)
    })
 
    
}
  React.useEffect(() => {
    setState(data)
    
  }, []);


if (data.isSuccess) {
  if(data){
  const dataarr= data.data.data[0].State


return (
  <>
  <div className="house">
  
        <div className="item">
          <div className="title">комната 1 дом </div>
          <div className="button">



            <label class="switch">
              <input type="checkbox" defaultChecked={dataarr}  id='1' onClick={(el)=>{btn(el)}}/>
              <span class="slider round"></span>
            </label>




          </div>
        <div className="frequency">
          
      <label class="custom-select">
            
            <select   name="sample" onChange={(el)=>{frequency(el.target.value)}}>
            <option value="0">0 sec</option>
              <option value="1">1 sec</option>
              <option value="3">3 sec</option>
              <option value="10">10 sec</option>
              <option value="30">30 sec</option>
              <option value="60">one min</option>
              <option value="120">two min</option>
              <option value="300">five min</option>
            </select>
          </label>
      </div>
      </div>
      
  </div>
  </>
)
  }
}
}