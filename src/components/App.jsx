import useLocalStorage from 'hooks/use-localstorage';
import i18next from '../i18n';
import { useTranslation } from 'react-i18next';
import AboutUser from './AboutUser/AboutUser';
import Layout from './Layout/Layout';
import Profile from './Profile/Profile';

export const App = () => {
  // const { t } = useTranslation;
  // const [language, setLanguage] = useLocalStorage('language', 'en');

  // const handleLanguageChange = () => {
  //   if (language === 'en') {
  //     i18next.changeLanguage('pl');
  //     setLanguage('pl');
  //   } else if (language === 'pl') {
  //     i18next.changeLanguage('en');
  //     setLanguage('en');
  //   }
  // };
  return (
    <Layout>
      <Profile />
      <AboutUser />
    </Layout>
  );
};
