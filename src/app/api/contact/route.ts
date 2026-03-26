export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const response = await fetch("https://formsubmit.io/send/yashvardhan.chauhan@outlook.com", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  const contentType = response.headers.get("content-type") ?? "application/json";
  const body = await response.text();

  return new Response(body, {
    status: response.status,
    headers: {
      "Content-Type": contentType,
    },
  });
}
