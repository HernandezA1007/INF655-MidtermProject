import { auth } from '../firebase';

const LogOutButton = () => {
  const handleLogOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default LogOutButton;