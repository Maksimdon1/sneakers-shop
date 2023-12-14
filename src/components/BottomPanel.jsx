import React from 'react'
import  '../style/BottomPanel.scss';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function BottomPanel(props) {
    console.log(props.params)
    
    useEffect(() => {
     
    }, []);

  return (
    <>

<div className="bottom-info-panel">
<div className="line"></div>
<div className="information">
    <div className="title">{props.params.title}</div>
    <div className="description">{props.params.description}</div>
    {props.params.url ? (
          <>
        <Link to={props.params.url}>
            <div className="button">Изменить</div>
        </Link>
          </>
          ) : (
            <> 
            
            </> 
          )}
</div>
</div>
</>
  )
}
