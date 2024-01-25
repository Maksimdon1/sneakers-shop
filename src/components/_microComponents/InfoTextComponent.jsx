import React from 'react'
import '../../style/_microComponents/InfoTextComponent.scss'

export default function InfoTextComponent({label, onClickFun, BackgroundColor, Width, Margin}) {
	return (
		<div className='InfoTextComponent' style={{'backgroundColor': BackgroundColor, 'width': Width ,'margin':Margin}} >
		{label}
		</div>
	)
}
