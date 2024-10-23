// Importamos los estilos de la aplicación y el componente TwitterFollowCard
import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard';

// Definimos una lista de usuarios con sus datos (key, name, userName, isFollowing)
const users = [
  {
    "key": 1,
    "name": "John Doe",
    "userName": "johndoe",
    "isFollowing": true
  },
  {
    "key": 2,
    "name": "Jane Smith",
    "userName": "janesmith",
    "isFollowing": false
  },
  {
    "key": 3,
    "name": "Carlos López",
    "userName": "carloslopez",
    "isFollowing": true
  },
  {
    "key": 4,
    "name": "Emily Johnson",
    "userName": "emilyj",
    "isFollowing": false
  },
  {
    "key": 5,
    "name": "Michael Brown",
    "userName": "mikebrown",
    "isFollowing": true
  }
]

// Definimos el componente principal de la aplicación
export function App() {
  return (
    <>
      {
        // Usamos map para iterar sobre la lista de usuarios
        // En cada iteración, extraemos las propiedades 'key', 'name', 'userName' e 'isFollowing'
        users.map(({ key, name, userName, isFollowing }) => (
          
          // Renderizamos un componente TwitterFollowCard por cada usuario
          // Pasamos como props el nombre de usuario 'userName' y el estado inicial 'isFollowing'
          // 'key' es necesario para que React identifique cada elemento en la lista
          // 'name' es pasado como contenido (children) del componente
          <TwitterFollowCard
            key={key} // Clave única para que React maneje eficientemente la lista
            userName={userName} // Nombre de usuario a mostrar en la tarjeta (@userName)
            initialIsFollowed={isFollowing} // Estado inicial de si seguimos o no al usuario
          >
            {name}  {/* Mostramos el nombre del usuario dentro del componente */}
          </TwitterFollowCard>
        ))
      }
    </>
  );
}
