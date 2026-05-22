import { useEffect, useState } from "react";

const rooms = [
  { id: "ROOM 00", label: "INDEX", targetId: "room-00-cover" },
  { id: "ROOM 01", label: "ABOUT", targetId: "room-01-about" },
  { id: "ROOM 03", label: "WORK", targetId: "room-03-catalogue" },
];

export function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeRoom, setActiveRoom] = useState("ROOM 00");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRoomClick = (room: (typeof rooms)[number]) => {
    setActiveRoom(room.id);
    document.getElementById(room.targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactClick = () => {
    document.getElementById("site-contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`museum-navbar${scrolled ? " is-scrolled" : ""}`} aria-label="Portfolio sections">
      <div className="museum-navbar__inner">
        <div className="museum-navbar__left">
          <div className="museum-navbar__brand">
            <span className="museum-navbar__brand-label">Exhibition</span>
            <span className="museum-navbar__brand-title">The White Cube</span>
          </div>

          <div className="museum-navbar__vr" aria-hidden="true" />

          <div className="museum-navbar__rooms">
            {rooms.map((room) => {
              const isActive = activeRoom === room.id;

              return (
                <button
                  key={room.id}
                  type="button"
                  className={`museum-navbar__room-btn${isActive ? " is-active" : ""}`}
                  onClick={() => handleRoomClick(room)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="museum-navbar__room-id">{room.id}</span>
                  <span className="museum-navbar__room-label-text">{room.label}</span>
                  <span className="museum-navbar__room-indicator" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="museum-navbar__right">
          <span className="museum-navbar__contact-label">Contact</span>
          <div className="museum-navbar__vr" aria-hidden="true" />
          <button
            type="button"
            className="museum-navbar__contact-icon"
            onClick={handleContactClick}
            aria-label="Go to contact links"
          >
            @
          </button>
        </div>
      </div>
    </nav>
  );
}
