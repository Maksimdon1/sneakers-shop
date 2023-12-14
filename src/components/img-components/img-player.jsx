import './img-palayer.scss'
export default function ImgPlayer({path, close}) {
    
  return (
    <div className='team-player'>
      <div className="close-btn" onClick={()=>{close()}}>
        <img src={require("../../static-img/svg/close-svgrepo-com.svg").default} alt="" srcset="" />
      </div>
      <div className="user-img">
        <img src={require("../../static-img/team/programmer.jfif")} alt="" srcset="" />
        </div>
    </div>
  )
}
