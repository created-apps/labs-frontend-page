import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const BROCHURE_URL =
  "https://mxynzemoflahdhgduplt.supabase.co/storage/v1/object/public/brochures/CreatED%20Labs%202026.pdf";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (phone !== undefined && phone !== null && typeof phone !== "string") {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not configured; brochure lead was not stored.",
    );
    return NextResponse.json(
      { error: "Brochure downloads are temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("brochure_leads").insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: typeof phone === "string" ? phone.trim() : null,
  });

  if (error) {
    console.error("Failed to store brochure lead:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ url: BROCHURE_URL });
}
