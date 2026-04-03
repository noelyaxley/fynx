import { NextResponse } from "next/server";

function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>/g, "").trim().slice(0, 500);
}

export async function POST(request: Request) {
  try {
    // Body size guard
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const data = await request.json();

    const firstName = sanitize(data.firstName);
    const lastName = sanitize(data.lastName);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const audience = sanitize(data.audience);
    const message = sanitize(data.message);
    const source = sanitize(data.source);
    const page = sanitize(data.page);
    const utm_source = sanitize(data.utm_source);
    const utm_medium = sanitize(data.utm_medium);
    const utm_campaign = sanitize(data.utm_campaign);

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // HubSpot integration
    const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
    if (hubspotToken) {
      const hubspotData = {
        properties: {
          firstname: firstName,
          lastname: lastName,
          email,
          phone: phone || "",
          hs_lead_status: "NEW",
          lifecyclestage: "lead",
          // Custom properties — create these in HubSpot first
          fynx_audience_type: audience,
          fynx_project_notes: message || "",
          fynx_source_page: page,
          fynx_form_source: source,
          ...(utm_source && { utm_source }),
          ...(utm_medium && { utm_medium }),
          ...(utm_campaign && { utm_campaign }),
        },
      };

      const hubspotRes = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hubspotToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (!hubspotRes.ok) {
        // If contact exists, try to update
        const hubspotError = await hubspotRes.json();
        if (hubspotError.category === "CONFLICT") {
          // Update existing contact
          const existingId = hubspotError.message?.match(/ID: (\d+)/)?.[1];
          if (existingId) {
            await fetch(
              `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`,
              {
                method: "PATCH",
                headers: {
                  Authorization: `Bearer ${hubspotToken}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ properties: hubspotData.properties }),
              }
            );
          }
        } else {
          console.error("HubSpot error:", hubspotError);
        }
      }
    } else {
      // Log to console when HubSpot not configured
      console.log("FYNX Enquiry (no HubSpot configured):", {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        audience,
        message,
        source,
        page,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
