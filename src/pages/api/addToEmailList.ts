import { Resend } from 'resend';
import type { APIRoute } from "astro"

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export const POST: APIRoute = async ({ request }) => {
  const req = await request.json()
  if (!req.email) {
    return new Response(
      JSON.stringify({
        message: "Email doesn't exist!",
      }),
      { status: 400 }
    );
  }
  const { email } = req;
  const contact = await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId: `${process.env.RESEND_AUDIENCE_ID}`,
  });
  if (contact.error) {
    return new Response(
      JSON.stringify({
        message: `Error creating contact: ${contact.error.message}`,
      }),
      { status: 500 }
    );
  }
  return new Response(
    JSON.stringify({
      message: `Successfully created contact ${email}`,
    }),
    { status: 200 }
  );
}
