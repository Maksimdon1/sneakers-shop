import React from 'react'
import '../../style/chat.css'

export default function Chat() {
	return (
				<>
						<div className="chat">
								<div className="header"><div className="title">Чаты</div><div className="bell"><img src={require('../../static-img/svg/bell-svgrepo-com.svg').default} alt="" srcset="" /><span>4</span></div></div>
								<div className="main-chat-header">
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/support-male-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Поддержка</div></div>
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/megaphone-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Каналы</div></div>
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/document-scanner-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Обращения</div></div>

						
						
								</div>
						</div>


				</>
	)
}
