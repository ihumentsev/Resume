import AboutUser from './AboutUser/AboutUser';
import Layout from './Layout/Layout';
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <Layout>
      <Profile />
      <AboutUser />
    </Layout>
  );
};
