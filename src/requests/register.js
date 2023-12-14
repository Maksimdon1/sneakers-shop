import axios from 'axios';


// type User = {
//     Id: number,
//     Login: string,
//     Email: string,
//     Phone: string,
//     Password: string,
//     Name: string,
//     Surname: string,
//     Token: string,
//     SysLevel: number,
//     DateLoggedIn: string,
//     DateCreated: string
// }







  export async function RegisterRequests({queryKey}) {
    const [_key, { Login, Password }] = queryKey;
  
    try {
      
      let info = ({
        'Login': Login,
        'Email': 'MurkMaksim2009!!!@mail.coms',
        'Password': Password,
        'Name': 'Maksim',
        'Surname': 'Kozyrev',
        'Token': '372rgeg7fgg4e2gfyecyqw',
        'SysLevel': '1',
        'EntranceId': '2',
        'EntranceState': '1',
        'Phone': '+7(925)-641-65-25' 
      });
      
    
      const data = await axios.post(
        'https://mains-h5w5.onrender.com/api/login',
        {
            'Login': Login,
            'Email': 'MurkMaksim2009!!!@mail.coms',
            'Password': Password,
            'Name': 'Maksim',
            'Surname': 'Kozyrev',
            'Token': '372rgeg7fgg4e2gfyecyqw',
            'SysLevel': '1',
            'EntranceId': '2',
            'EntranceState': '1',
            'Phone': '+7(925)-641-65-25' 
          },
        {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
        },
      );
  
  
      return data;

      
    
    }
    catch (error) {

    }
      
  }
  
  

  


