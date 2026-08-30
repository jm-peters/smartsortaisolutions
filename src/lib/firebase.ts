export async function subscribeToNewsletter(email: string): Promise<void> {
  const endpoint = (import.meta.env.VITE_NEWSLETTER_ENDPOINT || import.meta.env.VITE_FORMSPREE_ENDPOINT || "").trim();

  if (!endpoint) {
    throw new Error("Newsletter endpoint is not configured. Add VITE_NEWSLETTER_ENDPOINT or VITE_FORMSPREE_ENDPOINT to your environment.");
  }

  const payload = new URLSearchParams({
    email,
    source: "smartsort-site",
    message: "Newsletter subscription request"
  });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: payload.toString()
  });

  if (!response.ok) {
    let errorMessage = "Subscription failed. Please try again later.";

    try {
      const data = await response.json();
      if (data && typeof data.error === "string" && data.error.trim()) {
        errorMessage = data.error;
      }
    } catch {
      // Ignore JSON parsing errors and fall back to the default message.
    }

    throw new Error(errorMessage);
  }
}
