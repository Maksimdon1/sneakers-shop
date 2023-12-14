import { useEffect , useState} from 'react'
import "../../style/user-pages/edit.scss"
import { getNewAccessToken } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../login';

export default function Edit() {

  const dispatch = useDispatch()
  const data = useSelector(
		state => state.userLogin
	)
  const [changed, SetChanged] = useState({})
  const [Ischanged, SetIschanged] = useState()

  useEffect(() => {
    
    if(localStorage.getItem('userInfo') && !data.userInfo){
      dispatch(getNewAccessToken())

  
    }
  }, []);
  function updateValues({value, key}){
    if(value.target.defaultValue !==  value.target.value ){

      let updated =  changed
      updated[key] =   value.target.value
      SetIschanged(true)

  

      SetChanged(updated )
    }
    if(value.target.defaultValue ===  value.target.value){
      console.log(value.target.defaultValue)
      let updated =  changed
      delete updated[key]

      if(!Object.keys(updated).length){
      SetIschanged(false)


      }

      SetChanged(updated )
    }


  }

  if(data.userInfo){

  return (

    <div className='edit-page'>
      
      <form id='myForm' onSubmit={(el)=>{(el.preventDefault())}} autoSave='true'
        >
        <div className="input-container">
            <label>Имя</label>
            <input type="text" name="gmail"  id='input' autoSave='true'  onChange={(el=>{updateValues({'key': 'Name', 'value': el}) })}   defaultValue={data.userInfo.Name} required  placeholder='ivano@gmail.com' />
  
     
          </div>
          <div className="input-container">
            <label>Фамилия</label>
            <input type="text" name="gmail"  id='input' autoSave='true'   onChange={(el=>{updateValues({'key': 'Syrname', 'value': el }) })} defaultValue={data.userInfo.Surname}  required  placeholder='ivano@gmail.com' />
  
     
          </div>
      
        <div className="input-container">
          <label>Почта</label>
          <input type="text" name="gmail" defaultValue={data.userInfo.Email}    onChange={(el=>{updateValues({'key': 'Mail', 'value': el }) })}  id='input' autoSave='true'    autoComplete={'email'}/>

   
        </div>
        <div className="input-container">
          <label>Пароль</label>
          <input type="text" id='password' autoSave='true'  name="password"  onChange={(el=>{updateValues({'key': 'Password', 'value': el }) })} autoComplete='current-password' />
          {/* <div className="checkbox">
    <input className="custom-checkbox" type="checkbox" id="show-pass"  onClick={(el)=>{}}/>
    <label for="show-pass">Показать пароль</label>
  </div> */}
         
        </div>
        <div className="button-container">
          {
            Ischanged ? ( <div className={'save-btn active'} onClick={()=>{}}>сохранить</div>) : ( <div className={'save-btn'} onClick={()=>{}}>сохранить</div>)

          }
         
        </div> 
   </form>
      
    </div>
  )
}
  else{
    setTimeout(function(){
      
        return <Login type='login'/>
      
    },500);
  
}
}
