import {useEffect, useState} from 'react'
import '../../style/Test/SaveUP.scss'

export default function SaveUp() {
	const [Balance, SetBalance] = useState(0)

	const data = {
		'target': 10000,
		'payments':[
			{
				'value':100
			},{
				'value':200
			},{
				'value':300
			}
		]
	}
function count(){
	let total = 0
	for (let i = 0; i < data.payments.length; i ++){

		total += data.payments[i].value
	
	
	
	}
	SetBalance(total)  
}
	useEffect(() => {
		count()
	}, []);


	return (
		<div className='savings'>
			<div className="target">{data.target}/{Balance}</div>
			<button className='changeTarget' >Изменить цель</button>

			<div class="circle-container">
			<div className="progress">
				<span style={{width:`${data.target/Balance}%`}}></span>
			</div>

  

  
</div>

</div>

	)
}
