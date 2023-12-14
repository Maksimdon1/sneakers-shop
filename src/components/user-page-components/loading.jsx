import React from 'react'

export default function LoadingUser() {
  return (
    <>
    <div className='loading'>
        <img src={require("../../static-img/svg/growing animation.gif")} alt="" srcset="" />
        <img src={require("../../static-img/svg/close-svgrepo-com.svg")} alt="" srcset="" />
    </div>
    {/* <div className="loading">
<       div class="center">
        <div class="ring"></div>
        <span>loading...</span>
    </div>
</div> */}
       
</>

    
  )
}
