import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setCurrentUser(user);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;