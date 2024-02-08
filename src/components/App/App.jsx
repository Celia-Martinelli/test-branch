import './App.scss';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import WelcomePage from './pages/Welcome/WelcomePage';
import SignUpPage from './pages/SignUp/SignUpPage';
import SignUpColocPage from './pages/SignUpColoc/SignUpColocPage';
import JoinColocPage from './pages/JoinColoc/JoinColocPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import CreateProfilPage from './pages/CreateProfil/CreateProfilPage';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';
import RulesPage from './pages/Rules/RulesPage';
import CalendarPage from './pages/Calendar/CalendarPage';
import ShoppingPage from './pages/Shopping/ShoppingPage';
import MessagePage from './pages/Message/MessagePage';
import VotePage from './pages/Vote/VotePage';
import ExpensesPage from './pages/Expense/ExpensePage';
import TaskPage from './pages/Task/TaskPage';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup-coloc" element={<SignUpColocPage />} />
      <Route path="/join-coloc" element={<JoinColocPage />} />
      <Route path="/create-profile" element={<CreateProfilPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:user" element={<ProfilePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/events" element={<CalendarPage />} />
      <Route path="/shopping-list" element={<ShoppingPage />} />
      <Route path="/messaging" element={<MessagePage />} />
      <Route path="/vote" element={<VotePage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
