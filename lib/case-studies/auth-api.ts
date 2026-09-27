import type { CaseStudyData } from "@/lib/types/caseStudy";

export const authApiData: CaseStudyData = {
  title: "Building an Auth API with Supabase",
  subtitle:
    "Personal project. As part of my FlyRank AI internship, this was my first time building a backend authentication service built to practice authentication using Supabase.",
  sections: [
    {
      heading: "Overview",
      blocks: [
        {
          kind: "paragraph",
          body: "A Next.js backend that handles real authentication instead of routes that just pretend to check things. It uses Supabase for sign up, log in, and log out, hands out JWT tokens, and locks down protected routes behind them. No valid token in the Authorization header means a 401, no exceptions.",
        },
      ],
    },
    {
      heading: "The Problem",
      blocks: [
        {
          kind: "paragraph",
          body: 'A lot of "auth" tutorials stop at fake login screens that don\'t actually verify anything on the server side. I wanted something closer to how real systems work: a client that gets a token from an identity provider, and a backend that independently checks that token before handing over any data. That\'s a different problem than just storing a password and comparing it on login.',
        },
      ],
    },
    {
      heading: "What I Built",
      blocks: [
        {
          kind: "paragraph",
          body: "A set of Next.js route handlers under app/ that cover signup, login, logout, and a couple of protected endpoints (profile and dashboard) plus public ones for comparison. Supabase issues the JWT after a successful login, and every protected route verifies that token with Supabase before responding. On top of that, there's a Swagger UI at /docs where you can authorize with a token and test the protected endpoints directly in the browser, no Postman needed.",
        },
      ],
    },
    {
      heading: "Why I Started Here",
      blocks: [
        {
          kind: "paragraph",
          body: "I could have used a prebuilt auth library and moved on, but the point was to actually understand the flow: client to Supabase, Supabase back to client with a token, client to my server with that token, my server back to Supabase to verify it. Writing out that trust triangle by hand, rather than trusting a package to handle it invisibly, made the token verification step and the failure cases (missing token, bad token) concrete instead of assumed.",
        },
      ],
    },
    {
      heading: "Challenges",
      blocks: [
        {
          kind: "paragraph",
          body: "Getting the environment variables right was more finicky than expected. The server needs the Supabase project URL and anon key, and until those are correctly set the errors don't always point at the actual problem. Keeping .env out of version control while still making setup easy for anyone reading the repo meant leaning on a .env.example template rather than documentation alone. Building the Swagger docs also meant thinking through the API from a reader's perspective, not just my own, which caught a few inconsistent response shapes I hadn't noticed while building.",
        },
      ],
    },
    {
      heading: "What's Next",
      blocks: [
        {
          kind: "paragraph",
          body: "Rate limiting on the auth endpoints, refresh token handling, and better error messages are the near-term additions. Longer term, this is meant to plug into other FlyRank-related projects where I need a working auth layer without rebuilding one from scratch each time.",
        },
        {
          kind: "list",
          label: "Highlights",
          items: [
            "Real Supabase-backed signup, login, and logout with JWT issuance",
            "Protected routes verified server-side, not just gated on the client",
            "Interactive Swagger UI at /docs for testing without external tools",
            ".env-based config kept out of version control by default",
          ],
        },
      ],
    },
  ],
};
