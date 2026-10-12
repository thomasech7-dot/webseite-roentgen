import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ExternalLink, ScanLine, ShieldCheck, Sparkles } from 'lucide-react';
import './style.css';
import logo from './assets/thomas-logo.webp';
import thomasStudio from './assets/thomas-studio.webp';
import thomasPortrait from './assets/thomas-portrait-home.webp';
import thomasNatur from './assets/thomas-natur.webp';
import thomasWalk from './assets/thomas-spaziergang.webp';
import thomasLight from './assets/thomas-licht.webp';
import thomasStrand from './assets/thomas-strand-home.webp';
import lukasLogo from './assets/lukas-logo.webp';
import freedomWriterLogo from './assets/freedom-writer-academy-logo.png';
import copyClubLogo from './assets/copy-club-logo-home.png';

const EMAIL = 'ThomasOlesch.Copywriting@web.de';
const CALENDLY = 'https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngesprach-30-minuten';
const INSTAGRAM = 'https://www.instagram.com/thomas.olesch.copywriter/';
const LINKEDIN = 'https://de.linkedin.com/in/thomas-olesch-a42627317';

const diagnosticCards = [
  {
    number: '01',
    title: 'Versteht man dein Angebot sofort?',
    text: 'Ich prüfe, ob ein fremder Besucher innerhalb weniger Sekunden erkennt, für wen dein Angebot ist und warum es zu seiner Situation passt.',
    image: thomasLight,
  },
  {
    number: '02',
    title: 'Führt die Seite sauber zur Anfrage?',
    text: 'Ich schaue auf Reihenfolge, Orientierung, Einwände und CTA. Gute Websites nehmen Menschen an die Hand, ohne sie zu überreden.',
    image: thomasNatur,
  },
  {
    number: '03',
    title: 'Passt die Seite zur Suchintention?',
    text: 'Ich prüfe, ob Google-Besucher und echte Menschen dieselbe Antwort finden: Was bekomme ich hier, für wen ist es und was mache ich jetzt?',
    image: thomasWalk,
  },
];

const steps = [
  ['01', 'Du schickst mir deine Website.', 'URL, Angebot und Zielgruppe reichen, damit ich weiß, worauf ich beim Röntgen achten muss.'],
  ['02', 'Ich prüfe die wichtigsten Brüche.', 'Hero, Positionierung, Nutzerführung, Copy, SEO-Struktur und der Weg bis zur Anfrage.'],
  ['03', 'Du bekommst drei klare Hebel.', 'Priorisiert, verständlich und so formuliert, dass du direkt weißt, was zuerst verändert werden sollte.'],
];

function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="/" aria-label="Website-Röntgen Startseite">
        <img src={logo} alt="" />
        <span><strong>Website-Röntgen</strong><small>Thomas Olesch · Copywriting & Webdesign</small></span>
      </a>
      <nav className="headerNav" aria-label="Hauptnavigation">
        <a href="/#röntgen">Analyse</a>
        <a href="/#ablauf">Ablauf</a>
        <a href="/#ueber-mich">Über mich</a>
        <a href="/#analyse">Anfragen</a>
      </nav>
      <a className="btn small" href="/#analyse">Kostenlos prüfen <ArrowRight /></a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Thomas Olesch</strong><br />
        Copywriting & Webdesign aus Hildesheim<br />
        <span className="copyright">© 2026 Thomas Olesch</span>
      </div>
      <nav>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}

function Section({ eye, title, intro, children, alt = false, id, className = '' }: { eye: string; title: string; intro?: string; children?: React.ReactNode; alt?: boolean; id?: string; className?: string }) {
  return (
    <section id={id} className={`${alt ? 'alt' : ''} ${className}`}>
      <div className="wrap">
        <p className="eye">{eye}</p>
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-label="Thomas Olesch Website-Röntgen">
      <img className="heroPhoto" src={thomasStudio} alt="Thomas Olesch vor dunklem Hintergrund" />
      <div className="signalCard top">
        <ScanLine />
        <span>Hero, Angebot, CTA</span>
      </div>
      <div className="signalCard bottom">
        <Sparkles />
        <span>3 priorisierte Hebel</span>
      </div>
    </div>
  );
}

function LeadForm() {
  return (
    <form action={`https://formsubmit.co/${EMAIL}`} method="POST">
      <input type="hidden" name="_subject" value="Neue Website-Röntgen Anfrage" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://webseite-roentgen.vercel.app/danke" />
      <div className="cols">
        <label>Website *<input name="website" type="text" inputMode="url" required placeholder="www.deine-website.de" /></label>
        <label>E-Mail *<input name="email" type="email" required placeholder="du@unternehmen.de" /></label>
        <label>Name *<input name="name" autoComplete="name" required /></label>
        <label>Was soll deine Website erreichen? *<select name="ziel" required defaultValue=""><option value="" disabled>Bitte wählen</option><option>Mehr Anfragen</option><option>Mehr Termine</option><option>Mehr Verkäufe</option><option>Mehr Sichtbarkeit</option><option>Mehr Vertrauen</option></select></label>
      </div>
      <label>Was bietest du an? *<textarea name="angebot" required placeholder="Kurz und konkret: Angebot, Leistung oder Produkt." /></label>
      <label>Für wen ist dein Angebot gedacht? *<textarea name="zielgruppe" required placeholder="Welche Menschen oder Unternehmen sollen sich angesprochen fühlen?" /></label>
      <label>Was passiert aktuell zu wenig? *<select name="aktuelles_problem" required defaultValue=""><option value="" disabled>Bitte wählen</option><option>Zu wenige passende Anfragen</option><option>Besucher melden sich nicht</option><option>Mein Angebot wird nicht verstanden</option><option>Google bringt nicht die richtigen Menschen</option><option>Ich weiß es nicht genau</option></select></label>
      <label>Wonach würden deine Kunden suchen, wenn sie dein Angebot brauchen?<input name="suchanfrage" placeholder="z. B. Personal Trainer Hildesheim, Landingpage erstellen lassen" /></label>
      <label>Was nervt dich aktuell am meisten an deiner Website?<textarea name="problem" /></label>
      <p className="privacy">Mit dem Absenden werden deine Angaben zur Bearbeitung deiner Anfrage übertragen. Details findest du in der <a href="/datenschutz">Datenschutzerklärung</a>.</p>
      <button className="btn submit">Kostenlosen Röntgen-Check anfordern <ArrowRight /></button>
    </form>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="heroIn">
            <div className="heroCopy">
              <p className="eye">Kostenloses Website-Röntgen</p>
              <h1>Sieht gut aus. Aber verkauft deine Website auch klar genug?</h1>
              <p className="lead">Ich prüfe deine Website aus Sicht eines echten Besuchers: Wo entsteht Vertrauen, wo bleibt dein Angebot zu unklar und an welcher Stelle verliert die Seite wahrscheinlich passende Anfragen?</p>
              <div className="heroActions">
                <a className="btn" href="#analyse">Website kostenlos prüfen lassen <ArrowDown /></a>
                <a className="textLink" href="#röntgen">Was wird geprüft?</a>
              </div>
              <div className="trustRow">
                <span><Check /> Persönlich geprüft</span>
                <span><Check /> Keine Standardliste</span>
                <span><Check /> Drei klare Hebel</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section id="kundenstimmen" alt eye="Beleg aus der Praxis" title="Wenn deine Website Menschen erreichen soll, muss sie ihre Fragen schneller beantworten.">
          <div className="proofGrid">
            <article className="quoteCard">
              <span className="quoteMark">“</span>
              <blockquote>Ich bin wirklich beeindruckt, wie individuell Sie sich in meine unternehmerischen Ziele und mein Geschäftsmodell hineingedacht haben. Ihre Anregungen zur Optimierung meiner Webseite sind konkret und nachvollziehbar.</blockquote>
              <cite>Claudia Kirsch<span>Unternehmensberatung · Rückmeldung zur Website-Analyse</span></cite>
            </article>
            <article className="projectCard">
              <div className="logoPane"><img src={lukasLogo} alt="Lukas Kazimierski Personal Trainer Logo" /></div>
              <div className="projectBody">
                <p className="projectEyebrow">Projekt-Einblick</p>
                <h3>Lukas Kazimierski</h3>
                <p>Im Mittelpunkt stand die Frage, wie ein Besucher schneller erkennt, warum Training, Positionierung und nächster Schritt für ihn relevant sind.</p>
                <a href="https://www.lukas-kazimierski.de" target="_blank" rel="noreferrer">Projekt ansehen <ExternalLink /></a>
              </div>
            </article>
          </div>
        </Section>

        <Section id="röntgen" eye="Was ich prüfe" title="Ich suche nicht nach hübschen Details. Ich suche nach den Stellen, an denen Anfragen verloren gehen.">
          <div className="bento">
            <article className="largePane">
              <img src={thomasPortrait} alt="Thomas Olesch Portrait" />
              <div>
                <ShieldCheck />
                <h3>Der Blick von außen</h3>
                <p>Du kennst dein Angebot zu gut. Deshalb wirken viele Aussagen für dich logisch, für neue Besucher aber noch nicht klar genug. Genau diese Lücke macht das Röntgen sichtbar.</p>
              </div>
            </article>
            {diagnosticCards.map((card) => (
              <article className="miniPane" key={card.number}>
                <img src={card.image} alt="" />
                <b>{card.number}</b>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="ablauf" alt eye="Ablauf" title="In drei Schritten bekommst du Klarheit statt Bauchgefühl.">
          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="ueber-mich" eye="Wer deine Website röntgt" title="Thomas Olesch" intro="Copywriter und Webdesigner aus Hildesheim. Ich verbinde Website-Texte, Nutzerführung, SEO-Struktur und einen ruhigen Blick auf das, was Besucher wirklich verstehen müssen.">
          <div className="profileCard">
            <div className="profileGallery">
              <img src={thomasStrand} alt="Thomas Olesch draußen am Wasser" />
              <img src={thomasStudio} alt="Thomas Olesch Studio-Portrait" />
            </div>
            <div className="profileBody">
              <p>Beim Website-Röntgen bekommst du keine wilde Liste mit 30 Kleinigkeiten. Du bekommst eine klare Einschätzung, wo deine Seite aktuell Reibung erzeugt und welche drei Punkte zuerst Wirkung bringen.</p>
              <p>Wenn danach eine Überarbeitung sinnvoll ist, können wir aus dem Befund eine neue Struktur, bessere Texte oder eine komplette Website entwickeln.</p>
              <div className="credentials" aria-label="Ausbildung und Netzwerk">
                <a className="credential" href="https://www.freedom-writer.de/" target="_blank" rel="noreferrer"><img src={freedomWriterLogo} alt="Freedom Writer Academy Logo" /><span><strong>Freedom Writer Academy</strong><small>Ausgebildet bei Philipp Follmer</small></span><ExternalLink /></a>
                <a className="credential" href="https://the-copy-club.com/" target="_blank" rel="noreferrer"><img src={copyClubLogo} alt="The Copy Club Logo" /><span><strong>The Copy Club</strong><small>Aktives Community-Mitglied</small></span><ExternalLink /></a>
              </div>
            </div>
          </div>
        </Section>

        <section className="ribbon">
          <div className="wrap ribbonIn">
            <div>
              <p className="eye">Und danach?</p>
              <h2>Erst kommt der Befund. Dann entscheidest du, was sinnvoll ist.</h2>
              <p className="intro">Du kannst die wichtigsten Punkte selbst umsetzen oder wir entwickeln daraus eine neue Website, bessere Leistungsseiten, SEO-Struktur, E-Mail-Marketing oder eine klarere Conversion-Strecke.</p>
            </div>
            <a className="btn outline" href="#analyse">Analyse starten <ArrowRight /></a>
          </div>
        </section>

        <section id="analyse" className="alt">
          <div className="wrap formGrid">
            <div>
              <p className="eye">Dein kostenloses Website-Röntgen</p>
              <h2>Schick mir die Seite, bei der du gerade nicht verstehst, warum zu wenig zurückkommt.</h2>
              <p className="intro">Du gibst mir kurz Kontext. Ich schaue mir deine Seite persönlich an und schicke dir anschließend meine wichtigsten Befunde.</p>
              <div className="checks">
                <p><Check /> Persönlich von Thomas geprüft</p>
                <p><Check /> Drei klare, priorisierte Hebel</p>
                <p><Check /> Verständlich statt Technik-Blabla</p>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>

        <section>
          <div className="wrap talk">
            <div>
              <p className="eye">Lieber im Gespräch?</p>
              <h2>Du willst es direkt besprechen?</h2>
              <p className="intro">Dann buch dir ein kostenloses 30-minütiges Kennenlerngespräch und wir schauen gemeinsam auf deine aktuelle Website.</p>
              <a className="textLink" target="_blank" rel="noreferrer" href={CALENDLY}>{CALENDLY}</a>
            </div>
            <a className="btn outline" target="_blank" rel="noreferrer" href={CALENDLY}>Kostenloses Erstgespräch <ExternalLink /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Legal({ privacy = false }: { privacy?: boolean }) {
  return (
    <>
      <main className="legal">
        <a className="backLink" href="/">← Zurück zur Startseite</a>
        <p className="eye">Rechtliches</p>
        <h1>{privacy ? 'Datenschutzerklärung' : 'Impressum'}</h1>
        {privacy ? (
          <>
            <h2>1. Verantwortlicher</h2>
            <p>Thomas Olesch – Copywriting<br />Thomas Olesch<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <h2>2. Hosting</h2>
            <p>Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Geräteinformationen verarbeitet werden.</p>
            <h2>3. Website-Röntgen und E-Mail-Übertragung</h2>
            <p>Wenn du das Formular absendest, verarbeite ich deine URL, E-Mail-Adresse sowie deine Angaben, um deine Anfrage zu prüfen, den Befund zu erstellen und dich dazu zu kontaktieren. Die Übertragung wird technisch durch FormSubmit unterstützt und als E-Mail weitergeleitet.</p>
            <h2>4. Calendly und externe Links</h2>
            <p>Links zu Calendly, Instagram und LinkedIn führen zu externen Anbietern. Eine Verbindung entsteht erst, wenn du den jeweiligen Link aktiv anklickst.</p>
            <h2>5. Deine Rechte</h2>
            <p>Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.</p>
            <p className="notice">Hinweis: Diese Datenschutzerklärung ersetzt keine individuelle Rechtsberatung.</p>
          </>
        ) : (
          <>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p><strong>Thomas Olesch – Copywriting</strong><br />Thomas Olesch<br />Freiberuflicher Texter & Copywriter<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland</p>
            <p><strong>Kontakt</strong><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <h2>Haftung für Inhalte und Links</h2>
            <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden.</p>
            <h2>Urheberrecht</h2>
            <p>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

function Thanks() {
  return (
    <>
      <Header />
      <main>
        <section className="hero thanksHero">
          <div className="heroIn single">
            <div>
              <p className="eye">Anfrage angekommen</p>
              <h1>Danke. Ich schaue mir deine Website persönlich an.</h1>
              <p className="lead">Deine Angaben wurden übertragen. Wenn alles passt, melde ich mich per E-Mail mit den nächsten Schritten zu deinem Website-Röntgen.</p>
              <a className="btn" href="/">Zurück zur Startseite <ArrowRight /></a>
            </div>
            <HeroVisual />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const path = location.pathname;
createRoot(document.getElementById('root')!).render(path === '/impressum' ? <Legal /> : path === '/datenschutz' ? <Legal privacy /> : path === '/danke' ? <Thanks /> : <Home />);
