export default function Touches(start, end, type){
	
		if( type === 'horizontal'){

			if(start - end >= 0){
				return 'right';
			}
			else if(start - end <= 0){
				return 'left';
			}
		
		}

	
		if(  type === 'vertical'){
			if(start - end >= 0){
				return 'bottom'
			}
			else if(start - end <= 0){

				return 'top'
			}
			
		}
	
		

	
}