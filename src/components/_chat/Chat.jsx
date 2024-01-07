import React from 'react'
import '../../style/chat.css'

export default function Chat() {
	console.log(navigator)

    // Create blob link to download
   function download(){
    const link = document.createElement('a');
    link.href = require('../../static-img/flor2/0.png');
    link.setAttribute(
      'download',
      `FileName.jpg`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
		}
		const list = [
			{'title': 'Поддержка', 'last-mess': 'Хорошего дня , до свидания','img':'support-male-svgrepo-com.svg', 'time':'18:44'},
			{'title': 'Каналы', 'last-mess': 'Хорошего дня , до свидания','img':'megaphone-svgrepo-com.svg', 'time':'18:44'},
			{'title': 'Обращения', 'last-mess': 'Хорошего дня , до свидания','img':'document-scanner-svgrepo-com.svg', 'time':'18:44'},

		]

	return (
				<>
						<div className="chat">
								<div className="header"><div className="title">Чаты</div><div className="bell"><img src={require('../../static-img/svg/bell-svgrepo-com.svg').default} alt="" srcset="" /><span>4</span></div></div>
							
								<div className="main-chat-header">
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/support-male-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Поддержка</div></div>
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/megaphone-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Каналы</div></div>
									<div className="icon-item"><div className="icon"><img src={require('../../static-img/svg/document-scanner-svgrepo-com.svg').default} alt="" srcset="" /></div><div className="title">Обращения</div></div>

						
						
								</div>

								<div className="secondary-chats">
									{
										list.map((el)=>(
											<div className="item"><div className="icon"><img src={require(`../../static-img/svg/${el.img}`)} alt="" srcset="" /></div><div className="text"><div className="title">{el.title}</div><div className="last-message">{el['last-mess']}</div></div><div className="time">{el.time}</div></div>

										))
									}
								

								</div>
						</div>


				</>
	)
}
