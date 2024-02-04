import {useState} from 'react'

export default function FilterBy() {
	return (
		<div className="filter-by">
			<div className="title">По популярности</div>
			<div className="radio">
				<input type="radio" name="favorite_pet" value="Cats" checked />
				Cats
				<input type="radio" name="favorite_pet" value="Dogs" id="dogs" />
				Cats
			</div>
		</div>
	);
}
