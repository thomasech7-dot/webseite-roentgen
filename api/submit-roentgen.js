const EMAIL = 'ThomasOlesch.Copywriting@web.de';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const form = new FormData();

    for (const [key, value] of Object.entries(body)) {
      if (typeof value === 'string' && value.trim()) {
        form.append(key, value.trim());
      }
    }

    form.append('_subject', `Webseite-Röntgen Anfrage von ${body.website || 'unbekannte Website'}`);
    form.append('_template', 'table');
    form.append('_captcha', 'false');

    const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Origin: 'https://webseite-roentgen.vercel.app',
        Referer: 'https://webseite-roentgen.vercel.app/',
      },
      body: form,
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === 'false' || data.success === false) {
      return res.status(502).json({
        success: false,
        message: data.message || 'FormSubmit rejected the request',
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
