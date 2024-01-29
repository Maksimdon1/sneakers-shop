import { useCallback, useEffect, useState } from "react";

export default function Copy(string) {

	let result = ''

		navigator.clipboard
			.writeText(string)
			.then(() => {
				result = 'copied'
				
			})
			.catch((err) => {
				console.error(err);
					result = "error";
			});
			return result;


}


	
		
	
