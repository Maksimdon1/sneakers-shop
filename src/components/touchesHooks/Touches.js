export default function Touches(start, end, type){
	
		if( type === 'horizontal'){

			if(start - end >= window.innerWidth * 0.15){
				console.log(window.innerWidth * 0.2, start - end)
				return 'right';
			}
			else if(start - end <= window.innerWidth * -0.15){
				return 'left';
			}
		
		}

	
		if(  type === 'vertical'){
			if(start - end >= window.innerWidth * 0.15){
				return 'bottom'
			}
			else if(start - end <= window.innerWidth * 0.15){

				return 'top'
			}
			
		}
	
		

	
}