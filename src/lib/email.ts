/**
 * Sends transactional email via the Resend REST API. Best-effort: if
 * RESEND_API_KEY isn't configured, or the request fails, it logs and returns
 * false instead of throwing — a notification email must never break the
 * action that triggered it (e.g. sending a chat message).
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    console.error("sendEmail: RESEND_API_KEY o EMAIL_FROM no configurados, email no enviado.");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });

    if (!res.ok) {
      console.error("sendEmail: Resend respondió", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("sendEmail: fallo al llamar a Resend", err);
    return false;
  }
}
