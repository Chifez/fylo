import React,{useEffect,useState} from 'react'
import { useNavigate,Routes,Route } from 'react-router-dom'
import Dashmain from '../components/dashmain'
import SideBar from '../components/SideBar'
import Settings from './settings'
import Updatepassword from '../components/updatepassword'
import Changename from '../components/changename'
import Settingspages from '../components/settingsPages'

const Dashboard = ({name,setName,logOut,user,email,
    setEmail,
    password,
    setPassword,error,setError}) => {
    const [upload, setUpload] = useState([])

    const navigate = useNavigate();

    useEffect(() =>{
        if(user){
            navigate('/dashboard')
        }else{
            navigate('/signin')
        }
    })
  
  return (
      <div className='h-screen grid grid-flow-col grid-cols-5 w-screen'>
          <Routes>
              <Route path='/' element={<SideBar name={name}  logOut={logOut}/>}>
                    <Route index element={<Dashmain upload={upload} setUpload={setUpload} />} />
                    <Route path='/settings/*' element ={<Settings
                      />}> 
                      
                        <Route index element={<Settingspages />} />

                        <Route path='name' element={<Changename  
                        setName={setName} 
                        name={name}  />} />

                        <Route path= 'password' element={<Updatepassword
                        email ={email}
                        setEmail ={setEmail}
                        password ={password}
                        setPassword ={setPassword}
                        error={error}
                        setError={setError}
                        />} />

                    </Route>

              </Route>
          </Routes>    
      </div>
  )
}
export default Dashboard