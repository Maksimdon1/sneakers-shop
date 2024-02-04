


export function outNum(num, element){

	const time = 60000
	const step = 5
	let l = document.querySelector('#'+ element)
	
	let n = 13500
	let t = Math.round(time/(num/step))
	let interval = setInterval(()=>{
		n = n +=  step;
		console.log(n)
		l.innerHTML = n
		console.log(t)
		t += 160000000
		if(n === num){
			l.innerHTML = n
			clearInterval(interval)
		


		}
	}, t)

}




