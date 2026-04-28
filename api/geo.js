export const config = { runtime: 'edge' };

export default function handler(req) {
  const country = req.headers.get('x-vercel-ip-country') || '';
  let locale = 'en';
  if (country === 'BR' || ['PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'].includes(country)) {
    locale = 'pt';
  }
  return new Response(JSON.stringify({ locale, country }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
