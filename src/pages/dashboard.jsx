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
    setPassword,error,setError,changeProfile}) => {
    const [upload, setUpload] = useState(null)
    const[uploadList,setUploadList] = useState([{}])


    const uploadFile =()=>{
        if (upload === null) return;
        else{
            console.log(upload.name)
            const list = upload
            setUploadList([...uploadList, {list}]);
    }
    }
    const navigate = useNavigate();

    // useEffect(()=>{
        
    // },[upload])

    useEffect(() =>{
        if(user){
            navigate('/dashboard')
        }
        console.log(user)
    },[user])
  
  return (
      <div className='h-screen grid grid-flow-col grid-cols-5 w-screen'>
          <Routes>
              <Route path='/' element={<SideBar name={name}  logOut={logOut} changeProfile={changeProfile}/>}>
                    <Route index element={<Dashmain upload={upload} setUpload={setUpload} uploadList={uploadList} setUploadList={setUploadList}uploadFile={uploadFile}/>} />
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