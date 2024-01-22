import React from 'react'

export default function VideoComponent({id}) {
	return (
		<>
			<video width="100%" height="auto" id={id} controls preload="auto">
      {/* <source src='http://techslides.com/demos/sample-videos/small.ogv' type='video/ogg' /> */}
      <source src={require("../../static-img/React App - Google Chrome 2022-10-23 10-57-27.mp4")}  type='video/mp4' />
    </video>
		</>
	)
}
