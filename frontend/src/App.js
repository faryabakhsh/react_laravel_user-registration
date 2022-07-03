import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import MyPage from './pages/MyPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Switch>
    <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>

        <Route path='/MyPage'>
          <MyPage/>
        </Route>
        </Switch>
        </Layout>
        

   
  );
}

export default App;
