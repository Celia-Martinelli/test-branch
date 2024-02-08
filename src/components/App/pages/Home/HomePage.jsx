import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div>
      <FontAwesomeIcon icon={faEyeSlash} />
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
