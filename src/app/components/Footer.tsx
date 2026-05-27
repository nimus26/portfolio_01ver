type ContactLink = {
  type: string;
  href?: string;
  display: string;
};

const contacts: ContactLink[] = [
  { type: "Email", href: "mailto:nimus0917@gmail.com", display: "nimus0917@gmail.com" },
  // TODO: Replace with verified public profile URLs before publishing.
  { type: "LinkedIn", display: "LinkedIn URL pending" },
  { type: "GitHub", display: "GitHub URL pending" },
];

export function SiteFooter() {
  return (
    <footer id="site-contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__contact">
          <span className="site-footer__contact-label">Contact</span>
          <ul className="site-footer__contact-list">
            {contacts.map((contact) => (
              <li key={contact.type} className="site-footer__contact-item">
                <span className="site-footer__contact-type">{contact.type}</span>
                {contact.href ? (
                  <a href={contact.href} className="site-footer__contact-link">
                    {contact.display}
                  </a>
                ) : (
                  <span className="site-footer__contact-link site-footer__contact-link--pending">
                    {contact.display}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* TODO: Link to a real resume PDF when the asset is added. */}
        <span className="site-footer__resume-btn site-footer__resume-btn--disabled" aria-disabled="true">
          <span>Resume PDF pending</span>
          <span className="site-footer__resume-arrow" aria-hidden="true">
            v
          </span>
        </span>
      </div>

      <div className="site-footer__copy">
        <span className="site-footer__copy-text">(c) 2026 Kim Sumin - UIUX Portfolio Exhibition</span>
        <span className="site-footer__copy-text">Sumin Archive - Seoul, KR</span>
      </div>
    </footer>
  );
}
