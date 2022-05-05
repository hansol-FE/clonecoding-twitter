import {useState} from "react"

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const{ target : {name,value} } = e;
    
    if(name === "email"){
      setEmail(value);
    }else if(name === "password"){
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return(
   <div>
     <form onSubmit={onSubmit}>
       <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
       <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
       <input type="submit" value="Log In" />
     </form>
     <div>
       <button>Continue with Google</button>
       <button>Continue with Github</button>
     </div>
   </div>
  )
}

export default Auth;