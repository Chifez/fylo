import React from 'react'

const Signup = () => {
  return (
    <form action="submit">
        <div>
            <label htmlFor="firstname">firstname</label>
            <input type="text" name="firstname" nplaceholder='firstname' required />
        </div>

        <div>
            <label htmlFor="lastname">lastname</label>
            <input type="text" name ="lastname" placeholder='lastname' />
        </div>

        <div>
            <label htmlFor="gender">gender</label>
            <select name="gender" id="gender">
                <option value="">gender</option>
                <option value="gender">male</option>
                <option value="gender">female</option>
            </select>
        </div>

        <div>
            <label htmlFor="age">age</label>
            <input type="date" name="age" placeholder='age'/>
        </div>

        <div>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder='firstname' required />
        </div>

        <div>
            <input type="password" placeholder='firstname' required />
            <img src="" alt="" />
        </div>
        <button>sign up</button>
    </form>
  )
}

export default Signup