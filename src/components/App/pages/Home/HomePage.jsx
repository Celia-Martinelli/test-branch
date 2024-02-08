import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/profile">Profil</NavLink>
      <NavLink to="/profile/:user">ProfilUser</NavLink>
      <NavLink to="/rules">Réglement Intérieur</NavLink>
      <NavLink to="/events">Calendrier</NavLink>
      <NavLink to="/shopping-list">Liste Commune</NavLink>
      <NavLink to="/messaging">Messagerie</NavLink>
      <NavLink to="/vote">Sondage</NavLink>
      <NavLink to="/expenses">Gestion des Dépenses</NavLink>
      <NavLink to="/tasks">Tâches Ménagère</NavLink>
    </div>
  );
}
