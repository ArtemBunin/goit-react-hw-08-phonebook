import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBAr.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export default function AppBAr() {
  const logIN = useSelector(getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {logIN ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
