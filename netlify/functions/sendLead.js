export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const message = `
📩 YANGI ARIZA — NIAT MARKETING

👤 Ism: ${data.full_name}
📞 Telefon: ${data.phone}

🏢 Biznes: ${data.business_name}
⚠️ Muammo:
${data.problems}
`;

    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text: message
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Xatolik" })
    };
  }
};
