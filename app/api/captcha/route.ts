import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get origin from request
  const origin = request.headers.get('origin') || '';

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Cookie, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Set CORS headers for actual request
  const headers = {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Cookie, Authorization',
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  };

  // Generate a simple static captcha SVG
  // In a production environment, you'd want proper session management
  const captchaText = 'CAPTCHA';

  const svg = `
    <svg width="120" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" stroke="#ccc" stroke-width="1"/>
      <text x="60" y="25" font-family="Arial, sans-serif" font-size="16" fill="#333"
            text-anchor="middle" font-weight="bold">${captchaText}</text>
      <line x1="10" y1="10" x2="110" y2="30" stroke="#999" stroke-width="1"/>
      <line x1="10" y1="30" x2="110" y2="10" stroke="#999" stroke-width="1"/>
      <circle cx="20" cy="20" r="2" fill="#666"/>
      <circle cx="100" cy="20" r="2" fill="#666"/>
    </svg>
  `;

  return new NextResponse(svg, {
    status: 200,
    headers,
  });
}
