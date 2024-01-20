import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/_microComponents/defaultButton.scss'

export default function DefaultButton({label, onClickFun, onLoading, LinkTo, BackgroundColor, Width, Margin}) {
	

	return (
		< div className='default-custom-button-div' style={{'width': '100%'}}>
			{LinkTo ? (
			
			<>
			<Link to={LinkTo} style={{ 'width': Width,'margin':Margin }} >
			<button className='default-custom-button' style={{'backgroundColor': BackgroundColor}} >{label}</button>  			 {/* onClick={onClickFun} */}
			</Link>
				
			</>
			): (
			<>
			<button className='default-custom-button'  onClick={onClickFun}  style={{'backgroundColor': BackgroundColor, 'width': Width ,'margin':Margin}} >{label}</button>
			</>
			)}
		</div>
	)
}
