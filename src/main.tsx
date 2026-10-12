import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ExternalLink } from 'lucide-react';
import './style.css';
import thomasBeachLaptop from './assets/thomas-beach-laptop.jpg';
import thomasProfile from './assets/thomas-portrait.jpg';
import freedomWriterLogo from './assets/freedom-writer-academy-logo.jpeg';
import copyClubLogo from './assets/the-copy-club-logo.png';
import lukasPhoto from './assets/lukas-kazimierski.webp';
import stepSubmit from './assets/step-submit.webp';
import stepAnalysis from './assets/step-analysis.webp';
import stepPriorities from './assets/step-priorities.webp';
import diagConversion from './assets/diag-conversion.webp';
import diagPositioning from './assets/diag-positioning.webp';
import diagSearch from './assets/diag-search.webp';
import symptomEnquiries from './assets/symptom-enquiries.webp';
import symptomVisitors from './assets/symptom-visitors.webp';
import symptomExplaining from './assets/symptom-explaining.webp';

const EMAIL = 'ThomasOlesch.Copywriting@web.de';
const CALENDLY = 'https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngesprach-30-minuten';
const INSTAGRAM = 'https://www.instagram.com/thomas.olesch.copywriter/';
const LINKEDIN = 'https://de.linkedin.com/in/thomas-olesch-a42627317';

const diagnostics = [
  ['01', 'Conversion & Nutzerführung', 'Versteht ein neuer Besucher schnell, dass er hier mit seinem Problem richtig ist und welcher nächste Schritt für ihn sinnvoll ist?', diagConversion, 'Abstrakter Besucherweg durch eine Website hin zum nächsten Schritt'],
  ['02', 'Copy & Positionierung', 'Erkennt sich dein Wunschkunde wieder oder muss er erst selbst herausfinden, warum dein Angebot für ihn relevant ist?', diagPositioning, 'Eine klare Botschaft hebt sich aus mehreren abstrakten Textflächen hervor'],
  ['03', 'SEO & Suchintention', 'Passt das, wonach Menschen suchen, zu dem, was sie auf deiner Seite vorfinden, oder entsteht schon beim Einstieg ein Bruch?', diagSearch, 'Lupe verbindet eine abstrakte Suchanfrage mit einer passenden Website'],
];

const steps = [
  ['01', 'Du schickst mir deine Website.', 'URL, E-Mail und ein paar kurze Informationen reichen, damit ich weiß, worauf ich achten muss.', stepSubmit, 'Abstrakte Website-Karte mit Link-Symbol und Sende-Pfeil'],
  ['02', 'Du erfährst, wo Anfragen verloren gehen können.', 'Dabei geht es um deine Hero, Positionierung, Texte, Nutzerführung, Conversion und Suchintention.', stepAnalysis, 'Lupe scannt eine abstrakte Website-Struktur'],
  ['03', 'Du bekommst deine drei wichtigsten Hebel.', 'Priorisiert und verständlich. Damit du weißt, was zuerst geändert werden sollte und welcher Hebel danach folgt.', stepPriorities, 'Drei priorisierte Empfehlungskarten mit Wegweiser'],
];

function Header() {
  return (
    <header>
      <a className="brand" href="/">
        <span className="brandMark">TO</span>
        <span className="brandCopy"><strong>Website-Röntgen</strong><small>Thomas Olesch · Conversion Copywriting</small></span>
      </a>
      <nav className="headerNav" aria-label="Hauptnavigation">
        <a href="/#problem">Vorteile</a>
        <a href="/#ablauf">Ablauf</a>
        <a href="/#kundenstimmen">Kundenstimmen</a>
        <a href="/#ueber-mich">Über mich</a>
      </nav>
      <a className="btn small" href="/#analyse">Kostenlose Analyse anfordern <ArrowRight /></a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Thomas Olesch – Copywriting</strong><br />
        Conversion Copywriter<br />
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
  return <section id={id} className={`${alt ? 'alt' : ''} ${className}`}><div className="wrap"><p className="eye">{eye}</p><h2>{title}</h2>{intro && <p className="intro">{intro}</p>}{children}</div></section>;
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-label="Thomas Olesch Website-Röntgen Visual">
      <div className="photoFrame">
        <img src={thomasBeachLaptop} alt="Thomas Olesch am Strand mit seinem Laptop" />
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
        <label>Website *<input name="website" type="text" inputMode="url" required placeholder="www.deine-website.de oder deine-website.de" /></label>
        <label>E-Mail *<input name="email" type="email" required placeholder="du@unternehmen.de" /></label>
        <label>Name *<input name="name" autoComplete="name" required /></label>
        <label>Was soll deine Website vor allem erreichen? *<select name="ziel" required defaultValue=""><option value="" disabled>Bitte wählen</option><option>Mehr Anfragen</option><option>Mehr Termine</option><option>Mehr Verkäufe</option><option>Mehr Sichtbarkeit</option><option>Mehr Vertrauen</option></select></label>
      </div>
      <label>Was bietest du an? *<textarea name="angebot" required placeholder="Kurz und konkret: Angebot, Leistung oder Produkt." /></label>
      <label>Für wen ist dein Angebot gedacht? *<textarea name="zielgruppe" required placeholder="Welche Menschen oder Unternehmen sollen sich angesprochen fühlen?" /></label>
      <label>Was passiert aktuell zu wenig? *<select name="aktuelles_problem" required defaultValue=""><option value="" disabled>Bitte wählen</option><option>Zu wenige passende Anfragen</option><option>Besucher melden sich nicht</option><option>Mein Angebot wird nicht verstanden</option><option>Google bringt nicht die richtigen Menschen</option><option>Ich weiß es nicht genau</option></select></label>
      <label>Wonach würden deine Kunden suchen, wenn sie dein Angebot brauchen?<input name="suchanfrage" placeholder="z. B. Steuerberater für GmbH, Personal Trainer Hildesheim, Landingpage erstellen lassen" /></label>
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
            <div>
              <p className="eye">Zu wenige passende Anfragen?</p>
              <h1>Deine Website kann gut aussehen und trotzdem jeden Tag <em>Anfragen verlieren.</em></h1>
              <p className="lead">Wenn Besucher nicht erkennen, warum dein Angebot für ihre Situation relevant ist oder was sie als Nächstes tun sollen, gehen sie womöglich wieder, ohne sich zu melden. Beim kostenlosen Website-Röntgen erkennst du, ob es an der Nutzerführung, deinen Texten oder der Suchintention liegt. Du erhältst drei priorisierte Hebel.</p>
              <a className="btn" href="#analyse">Kostenloses Website-Röntgen anfordern <ArrowDown /></a>
              <small>Kostenlos. Persönlich geprüft. Drei priorisierte Hebel.</small>
            </div>
            <HeroVisual />
          </div>
        </section>

<Section id="kundenstimmen" alt eye="Was andere am Röntgen-Blick sehen" title="Zu wenige passende Anfragen, obwohl Menschen deine Website besuchen? Hier siehst du, worauf ich beim Röntgen schaue.">
          <div className="proofGrid">
            <article className="quoteCard"><span className="quoteMark">“</span><h3>Claudia Kirsch</h3><p className="role">Unternehmensberatung</p><blockquote><p>„Ich bin wirklich beeindruckt, wie individuell Sie sich in meine unternehmerischen Ziele und mein Geschäftsmodell hineingedacht haben.</p><p>Ihre Anregungen zur Optimierung meiner Webseite sind konkret und nachvollziehbar. Sie haben mich überzeugt, wie wichtig die Berücksichtigung der Userperspektive und eine klare SEO-Struktur für die Sichtbarkeit und mehr Anfragen über die Homepage sind. Vielen Dank!“</p></blockquote></article>
            <article className="projectCard"><img src={lukasPhoto} alt="Lukas Kazimierski" /><div className="projectBody"><p className="projectEyebrow">Projekt-Einblick</p><h3>Lukas Kazimierski</h3><p className="role">Personal Trainer</p><p>Gute Leistung allein bringt noch keine Anfrage, wenn der Besucher nicht schnell versteht, warum sie gerade für ihn relevant ist. Im Mittelpunkt stand die Positionierung und die Frage, wie seine Leistung klarer kommuniziert wird.</p><a href="https://www.lukas-kazimierski.de" target="_blank" rel="noreferrer">Projekt ansehen <ExternalLink /></a></div></article>
          </div>
        </Section>

        <Section id="problem" className="problemSection" eye="Deine Website ist selten das eigentliche Problem" title="Besucher springen ab, wenn dein Angebot ihr Problem nicht klar trifft." intro="Sie kommen nicht als neutrale Leser, sondern mit Fragen, Druck und Zweifeln. Wenn deine Seite diesen Urschmerz nicht aufgreift, bleibt dein Angebot unscharf: Bin ich hier richtig? Versteht dieser Anbieter meine Situation? Führt mich der nächste Schritt wirklich weiter? Dann behandelst du nur Symptome - mehr Traffic, mehr Content, mehr Erklärungen - obwohl der Bruch in Relevanz, Orientierung und dem Weg zur Anfrage entsteht.">
          <div className="grid3">
            <article className="card"><img className="problemImage" src={symptomEnquiries} alt="Besucher kommen auf eine Website, doch die Anfrage-Ablage bleibt leer" /><b>01</b><h3>„Bin ich hier überhaupt richtig?“</h3><p>Wenn Besucher ihr konkretes Problem nicht wiedererkennen, bleibt dein Angebot für sie allgemein. Sie lesen weiter, aber innerlich sind sie noch nicht bei dir.</p></article>
            <article className="card"><img className="problemImage" src={symptomVisitors} alt="Ein Besucher sieht sich eine Website an, ohne den Kontakt aufzunehmen" /><b>02</b><h3>„Was bringt mir das in meiner Situation?“</h3><p>Viele Seiten erklären Leistungen, Methoden oder Abläufe. Der Besucher sucht aber Orientierung: Was ändert sich für ihn, wenn er den nächsten Schritt macht?</p></article>
            <article className="card"><img className="problemImage" src={symptomExplaining} alt="Ein Unternehmer erklärt sein Angebot wiederholt verschiedenen Menschen" /><b>03</b><h3>„Warum sollte ich jetzt handeln?“</h3><p>Wenn Vertrauen, Klarheit oder Richtung fehlen, wirkt der CTA wie ein Sprung. Dann wird verglichen, vertagt oder weggeklickt, statt eine Anfrage zu stellen.</p></article>
          </div>
        </Section>

        <Section alt eye="Zu wenige passende Anfragen?" title="Deine Website wird besucht. Doch passende Anfragen bleiben aus." intro="Vielleicht erklärst du dein Angebot im Gespräch immer wieder, weil auf deiner Website nicht schnell klar wird, für wen es gedacht ist und warum es zur Situation deiner Zielgruppe passt. Du bekommst eine Einschätzung zu drei möglichen Hürden: Conversion & Nutzerführung, Copy & Positionierung sowie SEO & Suchintention.">
          <div className="grid3 diag">{diagnostics.map((x) => <article className="card" key={x[0]}><img className="diagImage" src={x[3]} alt={x[4]} /><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

        <Section id="ablauf" eye="So funktioniert das Röntgen" title="In drei Schritten weißt du, wo du ansetzen solltest.">
          <div className="grid3 steps">{steps.map((x) => <article key={x[0]}><img className="stepImage" src={x[3]} alt={x[4]} /><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

                <Section id="ueber-mich" eye="Wer deine Website röntgt" title="Thomas Olesch" intro="Conversion Copywriter">
          <div className="profileCard"><img src={thomasProfile} alt="Thomas Olesch" className="profileImg" /><div className="profileBody"><p>Du bekommst zu wenige passende Anfragen, obwohl Menschen deine Website besuchen. Im Gespräch erklärst du dein Angebot oft noch einmal von vorn, weil auf der Seite nicht klar wird, warum es zum Problem deines Gegenübers passt.</p><p>Wenn du zu wenige passende Anfragen bekommst, obwohl Menschen deine Website besuchen, bleibt eine entscheidende Frage: Erkennen sie schnell genug, warum dein Angebot zu ihrer Situation passt?</p><p>Beim Website-Röntgen bekommst du eine persönliche Prüfung deiner Positionierung, deiner Texte und des Wegs von der Google-Suche auf deine Website. Danach kennst du die drei Hebel, bei denen du zuerst ansetzen solltest.</p><div className="credentials" aria-label="Ausbildung und Copywriting-Community"><a className="credential" href="https://www.freedom-writer.de/" target="_blank" rel="noreferrer"><img className="credentialLogo" src={freedomWriterLogo} alt="Freedom Writer Academy Logo" /><span><strong>Freedom Writer Academy</strong><small>Ausgebildet bei Philipp Follmer</small></span><ExternalLink /></a><a className="credential" href="https://www.the-copy-club.com/" target="_blank" rel="noreferrer"><img className="credentialLogo" src={copyClubLogo} alt="The Copy Club Logo" /><span><strong>The Copy Club</strong><small>Aktives Community-Mitglied · Markus Bocionek</small></span><ExternalLink /></a></div></div></div>
        </Section>

        <section><div className="wrap"><p className="eye">Und danach?</p><h2>Du bekommst zuerst Klarheit. Was du daraus machst, entscheidest du.</h2><p className="intro">Der Website-Röntgen ist kostenlos. Ich zeige dir deine drei wichtigsten Hebel und sage dir auch, was du selbst verändern kannst. Wenn wir dabei feststellen, dass du Unterstützung brauchst, können wir danach gemeinsam an der Umsetzung arbeiten – zum Beispiel an deiner Positionierung, deinen Website- oder Landingpage-Texten, SEO, E-Mail-Marketing oder der gesamten Conversion-Strecke. Erst kommt der Befund. Dann entscheiden wir, was überhaupt sinnvoll ist.</p></div></section>

        <section id="analyse" className="alt"><div className="wrap formGrid"><div><p className="eye">Dein kostenloses Website-Röntgen</p><h2>Schick mir die Seite, bei der du gerade nicht verstehst, warum zu wenig zurückkommt.</h2><p className="intro">Du gibst mir kurz Kontext. Ich schaue mir deine Seite persönlich an und schicke dir anschließend meine wichtigsten Befunde.</p><div className="checks"><p><Check /> Persönlich von Thomas geprüft</p><p><Check /> Drei klare, priorisierte Hebel</p><p><Check /> Kein automatischer Standard-Output</p></div></div><LeadForm /></div></section>

        <section><div className="wrap talk"><div><p className="eye">Lieber im Gespräch?</p><h2>Du willst es lieber direkt besprechen?</h2><p className="intro">Wenn du deine Website und deine aktuelle Situation lieber direkt besprechen möchtest, kannst du dir ein kostenloses 30-minütiges Kennenlerngespräch buchen.</p><a className="textLink" target="_blank" rel="noreferrer" href={CALENDLY}>{CALENDLY}</a></div><a className="btn outline" target="_blank" rel="noreferrer" href={CALENDLY}>Kostenloses Erstgespräch <ExternalLink /></a></div></section>
      </main><Footer />
    </>
  );
}

function Legal({ privacy = false }: { privacy?: boolean }) {
  return (
    <><main className="legal"><a href="/">← Zurück zur Startseite</a><p className="eye">Rechtliches</p><h1>{privacy ? 'Datenschutzerklärung' : 'Impressum'}</h1>{privacy ? (<><h2>1. Verantwortlicher</h2><p>Thomas Olesch – Copywriting<br />Thomas Olesch<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><h2>2. Hosting</h2><p>Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Geräteinformationen verarbeitet werden.</p><h2>3. Website-Röntgen und E-Mail-Übertragung</h2><p>Wenn du das Formular absendest, verarbeite ich deine URL, E-Mail-Adresse sowie deine Angaben, um deine Anfrage zu prüfen, den Befund zu erstellen und dich dazu zu kontaktieren. Die Übertragung wird technisch durch FormSubmit unterstützt und als E-Mail weitergeleitet.</p><h2>4. Calendly und externe Links</h2><p>Links zu Calendly und Instagram führen zu externen Anbietern. Eine Verbindung entsteht erst, wenn du den jeweiligen Link aktiv anklickst.</p><h2>5. Deine Rechte</h2><p>Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.</p><p className="notice">Hinweis: Diese Datenschutzerklärung ersetzt keine individuelle Rechtsberatung.</p></>) : (<><h2>Angaben gemäß § 5 DDG</h2><p><strong>Thomas Olesch – Copywriting</strong><br />Thomas Olesch<br />Freiberuflicher Texter & Copywriter<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland</p><p><strong>Kontakt</strong><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><h2>Haftung für Inhalte und Links</h2><p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden.</p><h2>Urheberrecht</h2><p>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p></>)}</main><Footer /></>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const path = location.pathname;
createRoot(document.getElementById('root')!).render(path === '/impressum' ? <Legal /> : path === '/datenschutz' ? <Legal privacy /> : path === '/danke' ? <Thanks /> : <Home />);
