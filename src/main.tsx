import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ExternalLink, ScanLine } from 'lucide-react';
import './style.css';
import thomasPhoto from './assets/thomas-beach.jpg';
import lukasPhoto from './assets/lukas-kazimierski.webp';

const EMAIL = 'ThomasOlesch.Copywriting@web.de';
const CALENDLY = 'https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngespraech-30-minuten';
const INSTAGRAM = 'https://www.instagram.com/thomas.olesch.copywriter/';

const diagnostics = [
  ['01', 'Conversion & Nutzerführung', 'Versteht ein neuer Besucher schnell, dass er hier mit seinem Problem richtig ist und welcher nächste Schritt für ihn sinnvoll ist?'],
  ['02', 'Copy & Positionierung', 'Erkennt sich dein Wunschkunde wieder oder muss er erst selbst herausfinden, warum dein Angebot für ihn relevant ist?'],
  ['03', 'SEO & Suchintention', 'Passt das, wonach Menschen suchen, zu dem, was sie auf deiner Seite vorfinden, oder entsteht schon beim Einstieg ein Bruch?'],
];

const steps = [
  ['01', 'Du schickst mir deine Website.', 'URL, E-Mail und ein paar kurze Informationen reichen, damit ich weiß, worauf ich achten muss.'],
  ['02', 'Ich schaue dort hin, wo Anfragen verloren gehen können.', 'Hero, Positionierung, Copy, Nutzerführung, Conversion und Suchintention.'],
  ['03', 'Du bekommst deine drei wichtigsten Hebel.', 'Priorisiert und verständlich. Damit du weißt, was zuerst geändert werden sollte und was danach Sinn ergibt.'],
];

function Header() {
  return (
    <header>
      <a className="brand" href="/">
        <span className="brandMark">TO</span>
        <span className="brandCopy"><strong>Website-Röntgen</strong><small>Thomas Olesch · Conversion Copywriting</small></span>
      </a>
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
      </nav>
    </footer>
  );
}

function Section({ eye, title, intro, children, alt = false }: { eye: string; title: string; intro?: string; children?: React.ReactNode; alt?: boolean }) {
  return <section className={alt ? 'alt' : ''}><div className="wrap"><p className="eye">{eye}</p><h2>{title}</h2>{intro && <p className="intro">{intro}</p>}{children}</div></section>;
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-label="Thomas Olesch Website-Röntgen Visual">
      <div className="photoFrame">
        <img src={thomasPhoto} alt="Thomas Olesch am Strand" />
        <div className="photoGlow"></div>
      </div>
      <div className="laptopMock" aria-hidden="true">
        <div className="scanTop"><span></span><span></span><span></span><small>website-röntgen / live-blick</small></div>
        <div className="laptopScreen">
          <div className="scanLine"></div>
          <p className="screenKicker">ANALYSE</p>
          <strong>Hero · Copy · SEO</strong>
          <i></i><i></i><i></i>
          <button>Analyse anfordern</button>
          <div className="scoreBadge"><ScanLine /> Conversion-Signal <strong>68</strong></div>
        </div>
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
              <p className="eye">Wenn Besucher kommen, aber Anfragen ausbleiben</p>
              <h1>Deine Website kann gut aussehen und trotzdem jeden Tag <em>Anfragen verlieren.</em></h1>
              <p className="lead">Ich prüfe, wo Besucher aussteigen, was sie nicht verstehen und warum Google deine Seite womöglich anders einordnet als deine Wunschkunden. Danach weißt du, welche drei Stellen du zuerst ändern solltest.</p>
              <a className="btn" href="#analyse">Kostenlose Analyse anfordern <ArrowDown /></a>
              <small>Kostenlos. Persönlich geprüft. Drei priorisierte Hebel.</small>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section eye="Deine Website ist selten das eigentliche Problem" title="Deine Kunden stehen morgens nicht auf und denken: „Ich brauche bessere Website-Texte.“" intro="Sie fragen sich, warum zu wenige passende Anfragen kommen, warum Besucher wieder verschwinden oder warum sie ihr Angebot im Gespräch immer wieder erklären müssen. Genau dort beginnt eine Website, die verkauft: bei dem Problem, das dein Kunde bereits spürt.">
          <div className="grid3">
            <article className="card"><b>01</b><h3>„Warum kommen so wenige passende Anfragen?“</h3><p>Besucher sind vielleicht da. Aber sie spüren nicht schnell genug, warum dein Angebot für ihre Situation relevant ist.</p></article>
            <article className="card"><b>02</b><h3>„Warum schauen Leute und melden sich trotzdem nicht?“</h3><p>Interesse entsteht, aber der nächste Schritt wirkt nicht logisch, klar oder dringend genug.</p></article>
            <article className="card"><b>03</b><h3>„Warum muss ich mein Angebot immer wieder erklären?“</h3><p>Dann trägt deine Website noch nicht genug Vorarbeit für Vertrauen, Orientierung und Entscheidung.</p></article>
          </div>
        </Section>

        <Section alt eye="Wo verliert deine Website potenzielle Kunden?" title="Ich zeige dir die Stellen, an denen deine Website gerade Potenzial liegen lässt." intro="Keine allgemeine Bewertung von schön oder nicht schön. Ich schaue darauf, was ein potenzieller Kunde versteht, fühlt und als Nächstes tut.">
          <div className="grid3 diag">{diagnostics.map((x) => <article className="card" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

        <Section eye="So funktioniert das Röntgen" title="In drei Schritten weißt du, wo du ansetzen solltest.">
          <div className="grid3 steps">{steps.map((x) => <article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
        </Section>

        <Section alt eye="Was andere am Röntgen-Blick sehen" title="Vertrauen entsteht nicht durch große Versprechen, sondern durch konkrete Arbeit.">
          <div className="proofGrid">
            <article className="quoteCard"><span className="quoteMark">“</span><h3>Claudia Kirsch</h3><p className="role">Unternehmensberatung</p><blockquote>„Die Landingpage sieht nach einem produktiven Schub aus, wie Sie den Röntgen-Blick beschreiben und werblich überzeugend präsentieren.“</blockquote><p className="quoteHint">Feedback nach dem Röntgen-Blick auf die Landingpage.</p></article>
            <article className="projectCard"><img src={lukasPhoto} alt="Lukas Kazimierski" /><div className="projectBody"><p className="projectEyebrow">Projekt-Einblick</p><h3>Lukas Kazimierski</h3><p className="role">Personal Trainer</p><p>Gute Leistung allein bringt noch keine Anfrage, wenn der Besucher nicht schnell versteht, warum sie gerade für ihn relevant ist. Im Mittelpunkt stand die Positionierung und die Frage, wie seine Leistung klarer kommuniziert wird.</p><a href="https://www.lukas-kazimierski.de" target="_blank" rel="noreferrer">Projekt ansehen <ExternalLink /></a></div></article>
          </div>
        </Section>

        <Section eye="Wer deine Website röntgt" title="Thomas Olesch" intro="Conversion Copywriter">
          <div className="profileCard"><img src={thomasPhoto} alt="Thomas Olesch" className="profileImg" /><div className="profileBody"><p>Ich schaue nicht zuerst darauf, ob ein Satz besonders clever klingt.</p><p>Mich interessiert, warum ein Mensch auf deiner Website landet und trotzdem nicht den nächsten Schritt macht.</p><p>Dafür verbinde ich Positionierung, Conversion Copy und Suchintention. Damit deine Website nicht einfach beschreibt, was du machst, sondern deinem Wunschkunden zeigt, warum das für sein Problem relevant ist.</p><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram ansehen <ExternalLink /></a></div></div>
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
