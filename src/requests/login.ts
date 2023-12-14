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







  export async function LoginRequests({queryKey}) {
    const [_key, { Login, Password }] = queryKey;
  
    try {
      
      // 👇️ const data: CreateUserResponse
      const data = await axios.post(
        'https://mains-h5w5.onrender.com/api/login',
        {
          'Login': Login, // 'alina'   'maksim'
          // 'Email': 'MurkMaksim2009!!!@mail.coms' , // "Murka2009!!!@mail.com"    'MurkMaksim2009!!!@mail.coms'
          'Password':  Password, //'Murka2009!!!'
   
        },
        {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
        },
      );
  
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
  