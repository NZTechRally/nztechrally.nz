// Based on guide by Andew Stiefel
// https://andrewstiefel.com/netlify-functions-email-subscription/

import fetch from "node-fetch";

const { SITE_EDM_API_KEY, NZTR_NEWSLETTER_LIST_ID } = process.env;

exports.handler = async (event) => {
  const email = JSON.parse(event.body).payload.email;

  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${NZTR_NEWSLETTER_LIST_ID}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: SITE_EDM_API_KEY,
        email_address: email,
        tags: ["NZTR website"],
        subscribed: "true",
      }),
    },
  );

  const responseText = await response.text();

  return {
    statusCode: 200,
    body: responseText,
  };
};
