import { useRouter } from 'next/router';
import Dashboard from './index';

const UserDashboard = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <Dashboard>Hello {username}</Dashboard>
    // <>
    //   <div>Hello {username}</div>
    // </>
  );
};

export default UserDashboard;
