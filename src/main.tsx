import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ExternalLink, ScanLine } from 'lucide-react';
import './style.css';
import thomasPhoto from './assets/thomas-beach.jpg';
import lukasPhoto from './assets/lukas-kazimierski.webp';
import markusPhoto from './assets/markus-bocionek.jpg';
import fwaLogo from './assets/freedom-writer-academy.jpeg';

const painCards = [
  [
    'Anfragen bleiben aus',
    'Besucher landen auf deiner Seite, aber melden sich nicht.',
    'Du hast Sichtbarkeit oder sogar Klicks – nur kommt zu wenig zurück. Der eigentliche Engpass steckt oft nicht im Traffic, sondern darin, dass Menschen nicht schnell genug verstehen, warum sie ausgerechnet bei dir anfragen sollten.',
  ],
  [
    'Unsicherheit bei Änderungen',
    'Du änderst Texte, Design oder CTA – ohne zu wissen, ob du gerade das Richtige anfasst.',
    'Dann kostet jede Änderung Zeit, aber die Conversion bleibt trotzdem unklar. Genau das sorgt dafür, dass du weiter ausprobierst, statt gezielt die Stellen zu verbessern, die wirklich Anfragen blockieren.',
  ],
  [
    'Gemischte Signale',
    'Google, Botschaft und Wunschkunde ziehen noch nicht sauber in dieselbe Richtung.',
    'Wenn Suchintention, Positionierung und Nutzerführung nicht zusammenpassen, wird deine Seite fachlich zwar stark wahrgenommen – aber nicht zwingend als nächster logischer Schritt für eine Anfrage.',
  ],
];

const diagnostics = [
  ['01', 'Conversion & Nutzerführung', 'Versteht ein neuer Besucher in wenigen Sekunden, für wen die Seite ist, welches Problem du löst und was als Nächstes passieren soll?'],
  ['02', 'Copy & Positionierung', 'Spricht deine Seite über das, was deine Zielgruppe wirklich beschäftigt – oder vor allem über dein Angebot aus deiner Sicht?'],
  ['03', 'SEO & Suchintention', 'Passt die Seite zu den Suchanfragen deiner Wunschkunden oder sendet sie Google und Besuchern noch gemischte Signale?'],
];

const steps = [
  ['01', 'Website schicken', 'Du trägst deine URL und E-Mail ein und gibst mir kurz Kontext zu Ziel, Zielgruppe und dem, was dich aktuell nervt.'],
  ['02', 'Ich prüfe die kritischen Stellen', 'Ich schaue auf Einstiegsbereich, Nutzerführung, Positionierung und Suchintention – also genau auf die Punkte, an denen Anfragen oft verloren gehen.'],
  ['03', 'Du bekommst drei priorisierte Hebel', 'Kein Roman, kein Blabla: eine klare Reihenfolge, was zuerst geändert werden sollte und warum.'],
];

function Header() {
  return (
    <header>
      <a className="brand" href="/">
        <span className="brandMark">TO</span>
        <span className="brandCopy">
          <strong>Website-Röntgen</strong>
          <small>Thomas Olesch · Conversion Copywriting</small>
        </span>
      </a>
      <a className="btn small" href="/#analyse">
        Kostenlose Analyse anfordern <ArrowRight />
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Thomas Olesch – Copywriting</strong>
        <br />
        Freiberuflicher Texter & Conversion Copywriter
        <br />
        Sorsumer Hauptstraße 64 · 31139 Hildesheim · Deutschland
        <br />
        <a href="mailto:ThomasOlesch.Copywriting@web.de">ThomasOlesch.Copywriting@web.de</a>
      </div>
      <nav>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="https://www.instagram.com/thomas.copyconversion/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/thomas-olesch-a42627317/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}

function Scanner() {
  return (
    <div className="scanner">
      <div className="panel">
        <div className="dots">
          ● ● ● <span>analyse / hero / conversion</span>
        </div>
        <div className="mock">
          <i />
          <h4 />
          <h4 />
          <h4 />
          <p />
          <p />
          <button />
          <div className="score">
            <ScanLine />
            Klarheits-Score <b>68 / 100</b>
          </div>
        </div>
        <div className="beam" />
      </div>
    </div>
  );
}

function Section({ eye, title, intro, children, alt = false }: any) {
  return (
    <section className={alt ? 'alt' : ''}>
      <div className="wrap">
        <p className="eye">{eye}</p>
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState('idle');

  async function submit(e: any) {
    e.preventDefault();
    setStatus('sending');
    try {
      const f = new FormData(e.currentTarget);
      f.append('_subject', `Webseite-Röntgen Anfrage von ${f.get('website')}`);
      f.append('_template', 'table');
      f.append('_captcha', 'false');
      const r = await fetch('https://formsubmit.co/ajax/ThomasOlesch.Copywriting@web.de', {
        method: 'POST',
        body: f,
        headers: { Accept: 'application/json' },
      });
      if (!r.ok) throw 0;
      e.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="cols">
        <label>
          Website *
          <input name="website" type="url" required placeholder="https://deine-website.de" />
        </label>
        <label>
          E-Mail *
          <input name="email" type="email" required placeholder="du@unternehmen.de" />
        </label>
        <label>
          Name
          <input name="name" autoComplete="name" />
        </label>
        <label>
          Was soll deine Website vor allem erreichen? *
          <select name="ziel" required defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Mehr Anfragen</option>
            <option>Mehr Termine</option>
            <option>Mehr Verkäufe</option>
            <option>Mehr Sichtbarkeit</option>
            <option>Mehr Vertrauen</option>
          </select>
        </label>
      </div>
      <label>
        Wen möchtest du erreichen? *
        <textarea name="zielgruppe" required />
      </label>
      <label>
        Wonach sollen deine Wunschkunden bei Google suchen?
        <input name="suchanfrage" />
      </label>
      <label>
        Was nervt dich aktuell am meisten an deiner Website?
        <textarea name="problem" />
      </label>
      <p className="privacy">
        Mit dem Absenden werden deine Angaben zur Bearbeitung deiner Anfrage übertragen. Details findest du in der{' '}
        <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>
      <button className="btn submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wird gesendet …' : 'Kostenlosen Röntgen-Check anfordern'} <ArrowRight />
      </button>
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
              <p className="eye">Wenn du fachlich überzeugst, aber online zu wenig davon ankommt</p>
              <h1>
                Du kannst richtig gut sein. Wenn deine Website daraus kein Vertrauen macht, bleiben <em>qualifizierte Anfragen</em> trotzdem aus.
              </h1>
              <p className="lead">
                Menschen kommen auf deine Seite mit einer einfachen Frage: Bist du der Richtige für mein Problem?
                Wenn Relevanz, Vertrauen und der nächste Schritt nicht schnell genug klar werden, vergleichen sie weiter.
                Ich finde die Stellen, an denen genau diese Entscheidung kippt.
              </p>
              <a className="btn" href="#analyse">
                Kostenlosen Website-Check anfordern <ArrowDown />
              </a>
              <small>Kostenlos. Persönlich geprüft. Mit drei priorisierten Hebeln für mehr Anfragen.</small>
            </div>
            <Scanner />
          </div>
        </section>

        <Section
          eye="Der Urschmerz hinter zu wenig Conversion"
          title="Du willst nicht ständig erklären, nachfassen oder hoffen, dass der nächste Besucher schon versteht, warum er bei dir richtig ist."
          intro="Das Problem ist nicht einfach eine schlechte Website. Es ist die Lücke zwischen dem Wert deiner Leistung und dem Vertrauen, das online davon ankommt. Genau diese Lücke kostet passende Anfragen."
        >
          <div className="grid3">
            {painCards.map((x, i) => (
              <article className="card" key={x[0]}>
                <b>0{i + 1}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          alt
          eye="Der Röntgen-Blick"
          title="Ich zeige dir die Stellen, an denen deine Website gerade Potenzial liegen lässt."
          intro="Du bekommst Klarheit darüber, welche Änderungen zuerst Sinn ergeben – und was du selbst umsetzen kannst."
        >
          <div className="grid3 diag">
            {diagnostics.map((x) => (
              <article className="card" key={x[0]}>
                <b>{x[0]}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eye="So läuft es ab" title="In drei Schritten weißt du, wo es hakt.">
          <div className="grid3 steps">
            {steps.map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          alt
          eye="Feedback & Projekt-Einblick"
          title="Vertrauen entsteht nicht durch große Versprechen, sondern durch konkrete Arbeit."
          intro="Zwei echte Einblicke: ein klares Kundenfeedback und ein konkretes Projekt aus deinem Website- und Copy-Umfeld."
        >
          <div className="proofGrid">
            <article className="quoteCard">
              <span className="quoteMark">“</span>
              <h3>Claudia Kirsch</h3>
              <p className="role">Unternehmensberatung</p>
              <blockquote>
                „Ich bin wirklich beeindruckt, wie individuell Sie sich in meine unternehmerischen Ziele und mein
                Geschäftsmodell hineingedacht haben.
                <br />
                <br />
                Ihre Anregungen zur Optimierung meiner Webseite sind konkret und nachvollziehbar. Sie haben mich
                überzeugt, wie wichtig die Berücksichtigung der Userperspektive und eine klare SEO-Struktur für die
                Sichtbarkeit und mehr Anfragen über die Homepage sind. Vielen Dank!“
              </blockquote>
            </article>

            <article className="projectCard">
              <img src={lukasPhoto} alt="Lukas Kazimierski" />
              <div className="projectBody">
                <p className="projectEyebrow">Projekt-Einblick</p>
                <h3>Lukas Kazimierski</h3>
                <p className="role">Personal Trainer</p>
                <p>
                  Ein konkretes Beispiel aus meinem Website- und Copywriting-Umfeld: Positionierung,
                  Website-Kommunikation und ein klarerer Einstieg für mehr Orientierung und mehr passende Anfragen.
                </p>
                <a href="https://www.lukas-kazimierski.de" target="_blank" rel="noreferrer">
                  Website ansehen <ExternalLink />
                </a>
              </div>
            </article>
          </div>
        </Section>

        <Section
          eye="Meine Expertise"
          title="Conversion entsteht, wenn Relevanz, Vertrauen und nächster Schritt zusammenpassen."
          intro="Genau darauf ist mein Blick ausgerichtet: zu verstehen, wie aus Aufmerksamkeit eine qualifizierte Anfrage wird und welche Botschaft, Struktur oder Entscheidungshürde das gerade verhindert."
        >
          <div className="grid3">
            <article className="card">
              <b>01 · Relevanz</b>
              <h3>Der Besucher muss sich gemeint fühlen.</h3>
              <p>Ich prüfe, ob die Seite beim echten Problem deiner Zielgruppe startet und schnell genug zeigt: Hier versteht jemand meine Situation.</p>
            </article>
            <article className="card">
              <b>02 · Vertrauen</b>
              <h3>Gute Leistung muss online glaubwürdig werden.</h3>
              <p>Positionierung, Beweise, Sprache und Klarheit müssen gemeinsam das Risiko aus der Entscheidung nehmen. Sonst bleibt Expertise nur eine Behauptung.</p>
            </article>
            <article className="card">
              <b>03 · Conversion</b>
              <h3>Der nächste Schritt muss logisch wirken.</h3>
              <p>Ich schaue darauf, ob Nutzerführung und CTA aus dem aufgebauten Vertrauen folgen, damit Interesse nicht kurz vor der Anfrage verpufft.</p>
            </article>
          </div>
        </Section>

        <section className="trigger">
          <div className="wrap center">
            <p className="eye">Mehr Traffic ist nicht automatisch mehr Geschäft</p>
            <h2>Wenn deine Seite die Entscheidung nicht leichter macht, schickst du mit mehr Sichtbarkeit nur mehr Menschen auf denselben Engpass.</h2>
            <p className="intro">
              Dann entstehen Klicks, Besuche und vielleicht sogar Interesse, aber zu wenig davon wird zur qualifizierten Anfrage.
              Deshalb prüfe ich zuerst die Conversion-Stellen, bevor du noch mehr Energie in Reichweite steckst.
            </p>
            <a className="btn" href="#analyse">
              Kostenlose Analyse sichern <ArrowRight />
            </a>
          </div>
        </section>

        <Section
          alt
          eye="Wer hinter dem Röntgen steckt"
          title="Thomas Olesch · Conversion Copywriter"
          intro="Ich unterstütze Unternehmer dabei, aus Website-Besuchern qualifizierte Anfragen zu machen. Dafür verbinde ich Positionierung, Copy, Nutzerführung und Suchintention zu einer Seite, die nicht nur informiert, sondern eine Entscheidung vorbereitet."
        >
          <div className="profileCard">
            <img src={thomasPhoto} alt="Thomas Olesch" className="profileImg" />
            <div className="profileBody">
              <p>
                Mein Fokus liegt nicht auf möglichst cleveren Formulierungen. Mich interessiert, warum ein potenzieller Kunde zögert:
                Fehlt Relevanz? Fehlt Vertrauen? Ist das Angebot nicht klar genug? Oder ist der nächste Schritt zu schwammig?
                Genau dort setze ich an.
              </p>
              <div className="profileActions">
                <a className="btn outline" href="https://www.instagram.com/thomas.copyconversion/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a className="btn outline" href="https://www.linkedin.com/in/thomas-olesch-a42627317/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn outline" href="mailto:ThomasOlesch.Copywriting@web.de">
                  E-Mail schreiben
                </a>
                <a
                  className="btn outline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngespraech-30-minuten"
                >
                  Erstgespräch buchen <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Section>

        <section>
          <div className="wrap">
            <p className="eye">Was nach dem Röntgen passiert</p>
            <h2>Du bekommst zuerst Klarheit. Die Umsetzung entscheidest du danach.</h2>
            <p className="intro">
              Das Webseite-Röntgen ist kostenlos. Du bekommst von mir die drei wichtigsten Hebel und eine Einschätzung,
              was du selbst ändern kannst. Wenn du bei der Umsetzung Unterstützung möchtest, kann ich anschließend
              kostenpflichtig übernehmen – zum Beispiel Positionierung und Copy, Website- und Landingpage-Texte,
              SEO-Optimierung oder E-Mail-Marketing. Ob und was davon Sinn ergibt, besprechen wir erst nach dem Befund.
            </p>
          </div>
        </section>

        <section id="analyse" className="alt">
          <div className="wrap formGrid">
            <div>
              <p className="eye">Webseite-Röntgen</p>
              <h2>Schick mir die Seite, bei der du gerade nicht weißt, warum zu wenig zurückkommt.</h2>
              <p className="intro">
                Du gibst mir ein paar Minuten Kontext. Ich schaue mir die Seite persönlich an und schicke dir die
                wichtigsten Befunde per E-Mail.
              </p>
              <div className="checks">
                <p>
                  <Check /> Persönlich von Thomas geprüft
                </p>
                <p>
                  <Check /> Drei klare, priorisierte Hebel
                </p>
                <p>
                  <Check /> Kein automatischer Standard-Output
                </p>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>

        <section>
          <div className="wrap talk">
            <div>
              <p className="eye">Lieber im Gespräch?</p>
              <h2>Du willst es lieber direkt besprechen?</h2>
              <p className="intro">
                Wenn du die Seite gemeinsam besprechen möchtest, buch dir ein kostenloses 30-minütiges
                Kennenlerngespräch.
              </p>
            </div>
            <a
              className="btn outline"
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngespraech-30-minuten"
            >
              Kostenloses Erstgespräch <ExternalLink />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Legal({ privacy = false }: any) {
  return (
    <>
      <main className="legal">
        <a href="/">← Zurück zur Startseite</a>
        <p className="eye">Rechtliches</p>
        <h1>{privacy ? 'Datenschutzerklärung' : 'Impressum'}</h1>
        {privacy ? (
          <>
            <h2>1. Verantwortlicher</h2>
            <p>
              Thomas Olesch – Copywriting
              <br />
              Thomas Olesch
              <br />
              Sorsumer Hauptstraße 64
              <br />
              31139 Hildesheim
              <br />
              Deutschland
              <br />
              <a href="mailto:ThomasOlesch.Copywriting@web.de">ThomasOlesch.Copywriting@web.de</a>
            </p>
            <h2>2. Hosting</h2>
            <p>
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch notwendige Daten wie
              IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Geräteinformationen in Server-Protokollen
              verarbeitet werden. Dies dient der sicheren und stabilen Bereitstellung der Website auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO.
            </p>
            <h2>3. Webseite-Röntgen und E-Mail-Übertragung</h2>
            <p>
              Wenn du das Formular absendest, verarbeiten wir deine URL, E-Mail-Adresse sowie deine freiwilligen Angaben,
              um deine Anfrage zu prüfen, den Befund zu erstellen und dich dazu zu kontaktieren. Die Übertragung wird
              technisch durch FormSubmit unterstützt und als E-Mail an Thomas Olesch weitergeleitet.
            </p>
            <h2>4. Calendly</h2>
            <p>Der Link zum Kennenlerngespräch führt zu Calendly. Eine Verbindung entsteht erst, wenn du den Link aktiv anklickst.</p>
            <h2>5. Externe Anbieter und Drittlandübermittlung</h2>
            <p>Soweit Daten außerhalb des EWR verarbeitet werden, erfolgt dies unter Beachtung der gesetzlichen Voraussetzungen und geeigneter Garantien.</p>
            <h2>6. Speicherdauer</h2>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten bestehen.</p>
            <h2>7. Deine Rechte</h2>
            <p>Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.</p>
            <h2>8. Beschwerderecht</h2>
            <p>Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>
            <h2>9. Änderungen</h2>
            <p>Diese Datenschutzerklärung kann angepasst werden, wenn sich Website, Dienste oder rechtliche Anforderungen ändern.</p>
            <p className="notice">Hinweis: Diese Datenschutzerklärung dient der transparenten Information und ist keine individuelle Rechtsberatung.</p>
          </>
        ) : (
          <>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              <strong>Thomas Olesch – Copywriting</strong>
              <br />
              Thomas Olesch
              <br />
              Freiberuflicher Texter & Copywriter
              <br />
              Sorsumer Hauptstraße 64
              <br />
              31139 Hildesheim
              <br />
              Deutschland
            </p>
            <p>
              <strong>Kontakt</strong>
              <br />
              <a href="mailto:ThomasOlesch.Copywriting@web.de">ThomasOlesch.Copywriting@web.de</a>
            </p>
            <h2>Haftung für Inhalte und Links</h2>
            <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden.</p>
            <h2>Urheberrecht</h2>
            <p>Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p>
          </>
        )}
        <p>Stand: September 2026</p>
      </main>
      <Footer />
    </>
  );
}

const path = location.pathname;
createRoot(document.getElementById('root')!).render(
  path === '/impressum' ? <Legal /> : path === '/datenschutz' ? <Legal privacy /> : <Home />,
);
