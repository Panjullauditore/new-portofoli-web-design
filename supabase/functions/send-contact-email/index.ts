import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();
    console.log("Contact form data received:", { name, email, subject });

    // Send email to your gmail
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ahmadfahrezir@gmail.com"], // Your gmail address
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Message</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
            <p style="margin: 5px 0; padding: 10px; background-color: #f8f9fa; border-radius: 4px;">
              <strong>Name:</strong> ${name}<br>
              <strong>Email:</strong> ${email}
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Subject:</h3>
            <p style="margin: 5px 0; padding: 10px; background-color: #f8f9fa; border-radius: 4px;">
              ${subject}
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
            <div style="margin: 5px 0; padding: 15px; background-color: #f8f9fa; border-radius: 4px; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Ahmad Fahrezi <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thank You for Your Message!</h2>
          
          <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out to me! I have received your message about "<strong>${subject}</strong>" 
            and I appreciate you taking the time to contact me.
          </p>

          <p style="color: #555; line-height: 1.6;">
            I will review your message and get back to you as soon as possible, typically within 24 hours.
          </p>

          <div style="margin: 25px 0; padding: 15px; background-color: #f0f8ff; border-left: 4px solid #007bff; border-radius: 4px;">
            <p style="margin: 0; color: #555; font-style: italic;">
              "Every great project starts with a great conversation."
            </p>
          </div>

          <p style="color: #555; line-height: 1.6;">
            Best regards,<br>
            <strong>Ahmad Fahrezi</strong><br>
            Full Stack Developer
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="color: #666; font-size: 12px;">
              You can also reach me directly at <a href="mailto:ahmadfahrezir@gmail.com" style="color: #007bff;">ahmadfahrezir@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);