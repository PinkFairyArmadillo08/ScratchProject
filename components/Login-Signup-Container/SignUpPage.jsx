import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [login, setLogin] = useState({ userName: '', password: '' }); //ENTRY FORM INFO FOR LOGIN

  const navigate = useNavigate();
  //Updating the inputs from userName and password stored as states
  const populate = (event) => {
    console.log(event.target.value);
    reqs[0] =
      login.password.length > 8 && login.password.length < 16 ? 'green' : 'red';
    console.log(reqs);
    setLogin(Object.assign(login, { [event.target.id]: event.target.value }));
  };

  //48-57 is numerals; 65-90 is A to Z; 97-122 is a-z
  function passCheck(password) {
    const temp = new Set();
    for (let i = 0; i < password.length; i++) {
      const ascii = password.charCodeAt[i];
      if (ascii >= 48 && ascii <= 57) temp.add('a');
      else if (ascii >= 65 && ascii <= 90) temp.add('b');
      else if (ascii >= 97 && ascii <= 122) temp.add('c');
      if (temp.length == 3) return 'green';
    }
    return 'red';
  }

  let reqs = ['red', 'red'];
  useEffect(() => {
    console.log('kkk');
    reqs[0] =
      login.password.length > 8 && login.password.length < 16 ? 'green' : 'red';
    reqs[1] = passCheck(login.password);
    console.log(reqs);
  }, [login]);

  return (
    <div className="SignUp">
      <h1>Signing Up</h1>
      <p></p>
      <input id="userName" type="text" onChange={(e) => populate(e)} />
      <ul>
        <li style={{ color: login.password.length > 8 && login.password.length < 16 ? 'green' : 'red' }}>
          Must be between 8 and 32 characters long.
        </li>
        <li style={{ color: reqs[1] }}>
          Must include at least one number, special character and letter.
        </li>
      </ul>
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => populate(e)}
      />
      <button onClick={() => navigate('/')}>Cancel</button>
      <button onClick={() => navigate('/')}>Create Account</button>
    </div>
  );
};

export default SignUpPage;
