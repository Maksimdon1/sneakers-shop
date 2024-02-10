


export function outNum(num, element){

	const time = 40000
	const step = 5
	let l = document.querySelector('#'+ element)
	
	let n = 13500
	let t = Math.round(time/(num/step))
	let interval = setInterval(()=>{
		n = n +=  step;

		l.innerHTML = n

		t  = t * 0.9

		if(n === num){
			l.innerHTML = n
			clearInterval(interval)
		


		}
	}, t)

}




