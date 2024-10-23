import { useState } from "react"

// Componente que representa una tarjeta de seguimiento en Twitter
export function TwitterFollowCard({ userName = 'unknown', children, initialIsFollowed }) {

    // Declaramos el estado 'isFollowing' que indica si se está siguiendo a un usuario
    // Inicialmente se establece en 'initialIsFollowed', valor que se le pasa por props
    const [isFollowing, setIsFollowing] = useState(initialIsFollowed)

    // Determinamos el texto del botón basado en el estado 'isFollowing'
    const text = isFollowing ? 'Following' : 'Follow'

    // Asignamos una clase CSS al botón según el estado 'isFollowing'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following' // Clase si se está siguiendo
        : 'tw-followCard-button'               // Clase si no se está siguiendo

    // Función que se ejecuta al hacer clic en el botón
    const handleClick = () => {
        // Invertimos el estado de 'isFollowing'
        // Si era 'false', se convierte en 'true' y viceversa
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`} // URL para obtener el avatar del usuario
                    alt="avatar de midudev"
                />
                <div className="tw-followCard-info">
                    {/* Usamos 'children' para mostrar contenido adicional dentro de la tarjeta */}
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUsername">@{userName}</span>
                </div>
            </header>

            <aside>
                {/* Botón que muestra el texto y clase según el estado 'isFollowing' */}
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{ text }</span>
                    <span className="tw-followCard-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
