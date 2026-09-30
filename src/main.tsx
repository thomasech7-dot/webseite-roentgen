import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ExternalLink } from 'lucide-react';
import './style.css';
import thomasBeachLaptop from './assets/thomas-beach-laptop.jpg';
import thomasProfile from './assets/thomas-portrait.jpg';
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
const CALENDLY = 'https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngespraech-30-minuten';
const INSTAGRAM = 'https://www.instagram.com/thomas.olesch.copywriter/';
const LINKEDIN = 'https://de.linkedin.com/in/thomas-olesch-a42627317';

const diagnostics = [
  ['01', 'Conversion & Nutzerführung', 'Versteht ein neuer Besucher schnell, dass er hier mit seinem Problem richtig ist und welcher nächste Schritt für ihn sinnvoll ist?', diagConversion, 'Abstrakter Besucherweg durch eine Website hin zum nächsten Schritt'],
  ['02', 'Copy & Positionierung', 'Erkennt sich dein Wunschkunde wieder oder muss er erst selbst herausfinden, warum dein Angebot für ihn relevant ist?', diagPositioning, 'Eine klare Botschaft hebt sich aus mehreren abstrakten Textflächen hervor'],
  ['03', 'SEO & Suchintention', 'Passt das, wonach Menschen suchen, zu dem, was sie auf deiner Seite vorfinden, oder entsteht schon beim Einstieg ein Bruch?', diagSearch, 'Lupe verbindet eine abstrakte Suchanfrage mit einer passenden Website'],
];

const steps = [
  ['01', 'Du schickst mir deine Website.', 'URL, E-Mail und ein paar kurze Informationen reichen, damit ich weiß, worauf ich achten muss.', stepSubmit, 'Abstrakte Website-Karte mit Link-Symbol und Sende-Pfeil'],
  ['02', 'Ich schaue dort hin, wo Anfragen verloren gehen können.', 'Hero, Positionierung, Copy, Nutzerführung, Conversion und Suchintention.', stepAnalysis, 'Lupe scannt eine abstrakte Website-Struktur'],
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
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
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
  const [status, setStatus] = useState('idle');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const f = new FormData(e.currentTarget);
      f.append('_subject', `Webseite-Röntgen Anfrage von ${f.get('website')}`);
      f.append('_template', 'table');
      f.append('_captcha', 'false');
      const r = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, { method: 'POST', body: f, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error('send failed');
      e.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="cols">
        <label>Website *<input name="website" type="url" required placeholder="https://deine-website.de" /></label>
        <label>E-Mail *<input name="email" type="email" required placeholder="du@unternehmen.de" /></label>
        <label>Name<input name="name" autoComplete="name" /></label>
        <label>Was soll deine Website vor allem erreichen? *<select name="ziel" required defaultValue=""><option value="" disabled>Bitte wählen</option><option>Mehr Anfragen</option><option>Mehr Termine</option><option>Mehr Verkäufe</option><option>Mehr Sichtbarkeit</option><option>Mehr Vertrauen</option></select></label>
      </div>
      <label>Wen möchtest du erreichen? *<textarea name="zielgruppe" required /></label>
      <label>Wonach sollen deine Wunschkunden bei Google suchen?<input name="suchanfrage" /></label>
      <label>Was nervt dich aktuell am meisten an deiner Website?<textarea name="problem" /></label>
      <p className="privacy">Mit dem Absenden werden deine Angaben zur Bearbeitung deiner Anfrage übertragen. Details findest du in der <a href="/datenschutz">Datenschutzerklärung</a>.</p>
      <button className="btn submit" disabled={status === 'sending'}>{status === 'sending' ? 'Wird gesendet …' : 'Kostenlosen Röntgen-Check anfordern'} <ArrowRight /></button>
      {status === 'success' && <p className="success">Danke! Deine Anfrage ist angekommen. Ich melde mich per E-Mail.</p>}
      {status === 'error' && <p className="error">Das hat leider nicht geklappt. Bitte versuche es erneut oder schreib direkt per E-Mail.</p>}
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
              <p className="lead">Wenn Besucher nicht erkennen, warum dein Angebot für ihre Situation relevant ist oder was sie als Nächstes tun sollen, gehen sie womöglich wieder, ohne sich zu melden. Im kostenlosen Website-Röntgen prüfe ich Conversion und Nutzerführung, Copy und Positionierung sowie SEO und Suchintention. Du bekommst drei priorisierte Hebel.</p>
              <a className="btn" href="#analyse">Kostenloses Website-Röntgen anfordern <ArrowDown /></a>
              <small>Kostenlos. Persönlich geprüft. Drei priorisierte Hebel.</small>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section id="problem" className="problemSection" eye="Deine Website ist selten das eigentliche Problem" title="Deine Kunden stehen morgens nicht auf und denken: „Ich brauche bessere Website-Texte.“" intro="Sie fragen sich, warum zu wenige passende Anfragen kommen, warum Besucher wieder verschwinden oder warum sie ihr Angebot im Gespräch immer wieder erklären müssen. Genau dort beginnt eine Website, die verkauft: bei dem Problem, das dein Kunde bereits spürt.">
          <div className="grid3">
            <article className="card"><img className="problemImage" src={symptomEnquiries} alt="Besucher kommen auf eine Website, doch die Anfrage-Ablage bleibt leer" /><b>01</b><h3>„Warum kommen so wenige passende Anfragen?“</h3><p>Besucher sind vielleicht da. Aber sie spüren nicht schnell genug, warum dein Angebot für ihre Situation relevant ist.</p></article>
            <article className="card"><img className="problemImage" src={symptomVisitors} alt="Ein Besucher sieht sich eine Website an, ohne den Kontakt aufzunehmen" /><b>02</b><h3>„Warum schauen Leute und melden sich trotzdem nicht?“</h3><p>Interesse entsteht, aber der nächste Schritt wirkt nicht logisch, klar oder dringend genug.</p></article>
            <article className="card"><img className="problemImage" src={symptomExplaining} alt="Ein Unternehmer erklärt sein Angebot wiederholt verschiedenen Menschen" /><b>03</b><h3>„Warum muss ich mein Angebot immer wieder erklären?“</h3><p>Dann trägt deine Website noch nicht genug Vorarbeit für Vertrauen, Orientierung und Entscheidung.</p></article>
          </div>
        </Section>

        <Section alt eye="Wo verliert deine Website potenzielle Kunden?" title="Ich zeige dir die Stellen, an denen deine Website gerade Potenzial liegen lässt." intro="Ich schaue darauf, was ein potenzieller Kunde versteht, was ihn zweifeln lässt und ob der nächste Schritt für ihn logisch wirkt.">
          <div className="grid3 diag">{diagnostics.map((x) => <article className="card" key={x[0]}><img className="diagImage" src={x[3]} alt={x[4]} /><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

        <Section id="ablauf" eye="So funktioniert das Röntgen" title="In drei Schritten weißt du, wo du ansetzen solltest.">
          <div className="grid3 steps">{steps.map((x) => <article key={x[0]}><img className="stepImage" src={x[3]} alt={x[4]} /><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

        <Section id="kundenstimmen" alt eye="Was andere am Röntgen-Blick sehen" title="Zu wenige passende Anfragen, obwohl Menschen deine Website besuchen? Hier siehst du, worauf ich beim Röntgen schaue.">
          <div className="proofGrid">
            <article className="quoteCard"><span className="quoteMark">“</span><h3>Claudia Kirsch</h3><p className="role">Unternehmensberatung</p><blockquote><p>„Ich bin wirklich beeindruckt, wie individuell Sie sich in meine unternehmerischen Ziele und mein Geschäftsmodell hineingedacht haben.</p><p>Ihre Anregungen zur Optimierung meiner Webseite sind konkret und nachvollziehbar. Sie haben mich überzeugt, wie wichtig die Berücksichtigung der Userperspektive und eine klare SEO-Struktur für die Sichtbarkeit und mehr Anfragen über die Homepage sind. Vielen Dank!“</p></blockquote></article>
            <article className="projectCard"><img src={lukasPhoto} alt="Lukas Kazimierski" /><div className="projectBody"><p className="projectEyebrow">Projekt-Einblick</p><h3>Lukas Kazimierski</h3><p className="role">Personal Trainer</p><p>Gute Leistung allein bringt noch keine Anfrage, wenn der Besucher nicht schnell versteht, warum sie gerade für ihn relevant ist. Im Mittelpunkt stand die Positionierung und die Frage, wie seine Leistung klarer kommuniziert wird.</p><a href="https://www.lukas-kazimierski.de" target="_blank" rel="noreferrer">Projekt ansehen <ExternalLink /></a></div></article>
          </div>
        </Section>

        <Section id="ueber-mich" eye="Wer deine Website röntgt" title="Thomas Olesch" intro="Conversion Copywriter">
          <div className="profileCard"><img src={thomasProfile} alt="Thomas Olesch" className="profileImg" /><div className="profileBody"><p>Du bekommst zu wenige passende Anfragen, obwohl Menschen deine Website besuchen. Im Gespräch erklärst du dein Angebot oft noch einmal von vorn, weil auf der Seite nicht klar wird, warum es zum Problem deines Gegenübers passt.</p><p>Ich prüfe, wo dieser Bruch entsteht: bei deiner Positionierung, in deinen Texten oder zwischen der Google-Suche und dem ersten Eindruck auf deiner Website. Als Conversion Copywriter helfe ich dir, dein Angebot so zu erklären, dass Interessenten erkennen, ob es zu ihrer Situation passt.</p><div className="credentials" aria-label="Ausbildung und Copywriting-Community"><a className="credential" href="https://www.freedom-writer.de/" target="_blank" rel="noreferrer"><span className="credentialMark">FW</span><span><strong>Freedom Writer Academy</strong><small>Ausgebildet bei Philipp Follmer</small></span><ExternalLink /></a><a className="credential" href="https://www.the-copy-club.com/" target="_blank" rel="noreferrer"><span className="credentialMark">CC</span><span><strong>The Copy Club</strong><small>Aktives Community-Mitglied · Markus Bocionek</small></span><ExternalLink /></a></div></div></div>
        </Section>

        <section><div className="wrap"><p className="eye">Und danach?</p><h2>Du bekommst zuerst Klarheit. Was du daraus machst, entscheidest du.</h2><p className="intro">Der Website-Röntgen ist kostenlos. Ich zeige dir deine drei wichtigsten Hebel und sage dir auch, was du selbst verändern kannst. Wenn wir dabei feststellen, dass du Unterstützung brauchst, können wir danach gemeinsam an der Umsetzung arbeiten – zum Beispiel an deiner Positionierung, deinen Website- oder Landingpage-Texten, SEO, E-Mail-Marketing oder der gesamten Conversion-Strecke. Erst kommt der Befund. Dann entscheiden wir, was überhaupt sinnvoll ist.</p></div></section>

        <section id="analyse" className="alt"><div className="wrap formGrid"><div><p className="eye">Dein kostenloses Website-Röntgen</p><h2>Schick mir die Seite, bei der du gerade nicht verstehst, warum zu wenig zurückkommt.</h2><p className="intro">Du gibst mir kurz Kontext. Ich schaue mir deine Seite persönlich an und schicke dir anschließend meine wichtigsten Befunde.</p><div className="checks"><p><Check /> Persönlich von Thomas geprüft</p><p><Check /> Drei klare, priorisierte Hebel</p><p><Check /> Kein automatischer Standard-Output</p></div></div><LeadForm /></div></section>

        <section><div className="wrap talk"><div><p className="eye">Lieber im Gespräch?</p><h2>Du willst es lieber direkt besprechen?</h2><p className="intro">Wenn du deine Website und deine aktuelle Situation lieber direkt besprechen möchtest, kannst du dir ein kostenloses 30-minütiges Kennenlerngespräch buchen.</p></div><a className="btn outline" target="_blank" rel="noreferrer" href={CALENDLY}>Kostenloses Erstgespräch <ExternalLink /></a></div></section>
      </main><Footer />
    </>
  );
}

function Legal({ privacy = false }: { privacy?: boolean }) {
  return (
    <><main className="legal"><a href="/">← Zurück zur Startseite</a><p className="eye">Rechtliches</p><h1>{privacy ? 'Datenschutzerklärung' : 'Impressum'}</h1>{privacy ? (<><h2>1. Verantwortlicher</h2><p>Thomas Olesch – Copywriting<br />Thomas Olesch<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><h2>2. Hosting</h2><p>Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Geräteinformationen verarbeitet werden.</p><h2>3. Website-Röntgen und E-Mail-Übertragung</h2><p>Wenn du das Formular absendest, verarbeite ich deine URL, E-Mail-Adresse sowie deine Angaben, um deine Anfrage zu prüfen, den Befund zu erstellen und dich dazu zu kontaktieren. Die Übertragung wird technisch durch FormSubmit unterstützt und als E-Mail weitergeleitet.</p><h2>4. Calendly und externe Links</h2><p>Links zu Calendly und Instagram führen zu externen Anbietern. Eine Verbindung entsteht erst, wenn du den jeweiligen Link aktiv anklickst.</p><h2>5. Deine Rechte</h2><p>Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.</p><p className="notice">Hinweis: Diese Datenschutzerklärung ersetzt keine individuelle Rechtsberatung.</p></>) : (<><h2>Angaben gemäß § 5 DDG</h2><p><strong>Thomas Olesch – Copywriting</strong><br />Thomas Olesch<br />Freiberuflicher Texter & Copywriter<br />Sorsumer Hauptstraße 64<br />31139 Hildesheim<br />Deutschland</p><p><strong>Kontakt</strong><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><h2>Haftung für Inhalte und Links</h2><p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden.</p><h2>Urheberrecht</h2><p>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p></>)}</main><Footer /></>
  );
}

const path = location.pathname;
createRoot(document.getElementById('root')!).render(path === '/impressum' ? <Legal /> : path === '/datenschutz' ? <Legal privacy /> : <Home />);
