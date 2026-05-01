const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

function json(response, status) {
  return new Response(JSON.stringify(response), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendBrevoEmail({ apiKey, payload }) {
  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Brevo request failed");
  }
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    const { name, phone, email, source } = await request.json();

    if (!name || !phone || !email || !source) {
      return json({ error: "Name, phone, email, and source are required." }, 400);
    }

    if (!isValidEmail(email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "NJK Jewellers";
    const notifyEmail = process.env.BREVO_NOTIFY_EMAIL;

    if (!apiKey || !senderEmail || !notifyEmail) {
      return json({ error: "Server email settings are missing." }, 500);
    }

    await Promise.all([
      sendBrevoEmail({
        apiKey,
        payload: {
          sender: {
            name: senderName,
            email: senderEmail,
          },
          to: [
            {
              email,
              name,
            },
          ],
          replyTo: {
            email: notifyEmail,
            name: senderName,
          },
          subject: "NJK Jewellers enquiry received",
          htmlContent: `
            <p>Namaste ${name},</p>
            <p>We received your enquiry at NJK Jewellers.</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p>Our team will contact you soon.</p>
            <p>Regards,<br />NJK Jewellers</p>
          `,
        },
      }),
      sendBrevoEmail({
        apiKey,
        payload: {
          sender: {
            name: senderName,
            email: senderEmail,
          },
          to: [
            {
              email: notifyEmail,
              name: senderName,
            },
          ],
          replyTo: {
            email,
            name,
          },
          subject: `New website enquiry from ${name}`,
          htmlContent: `
            <p><strong>NJK website enquiry</strong></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
          `,
        },
      }),
    ]);

    return json({ ok: true }, 200);
  } catch (error) {
    return json(
      {
        error: "Unable to send enquiry email right now.",
      },
      500,
    );
  }
}
