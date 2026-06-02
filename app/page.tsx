import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Just Fucking Use PXXL",
  description:
    "A no-bullshit guide to why you should stop hand-rolling your infrastructure and use a modern deployment platform like PXXL.",
  openGraph: {
    title: "Just Fucking Use PXXL",
    description: "Stop configuring nginx at midnight. Just fucking use PXXL.",
    url: "https://justfuckingusepxxl.com",
    siteName: "Just Fucking Use PXXL",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8e8e8]">

      {/* ── Fixed top-right nav icons ── */}
      <div className="fixed top-4 right-5 z-50 flex gap-2">
        <a
          href="https://pxxl.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center border border-[#333] rounded text-purple-400 hover:border-purple-500 hover:text-purple-300 transition-all text-xs font-mono"
          title="Try PXXL"
        >
          🚀
        </a>
      </div>

      {/* ── Main content ── */}
      <main className="max-w-[780px] mx-auto px-6 py-16">

        {/* Title block */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            JUST FUCKING USE PXXL
          </h1>
          <p className="text-sm text-[#aaa] italic">
            (OR ANY DEPLOYMENT PLATFORM, YOU GODDAMN CAVEMAN)
          </p>
        </div>

        {/* Intro paragraphs */}
        <div className="space-y-5 text-[17px] leading-[1.75] mb-12">
          <p>
            Look, I get it. You saw that other site. "VPS is king", "Keep it simple, stupid",{" "}
            <span className="bg-purple-600 text-white px-1 rounded">
              "My DigitalOcean droplet from '19 still runs faster than your managed platform."
            </span>{" "}
            Fucking adorable. Like a toddler proudly showing off a mud pie.
          </p>
          <p>
            It's a nice sentiment, like wishing we could all go back to churning our own butter instead
            of just buying it at the store. But shipping software isn't just SSHing into a box and
            praying anymore, you fossil. It's where teams collaborate, where products scale, where
            uptime actually fucking matters. You know, shit that actually{" "}
            <em>does</em> something beyond running a cron job nobody asked for.
          </p>
        </div>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            SO, WHAT THE FUCK IS THIS ABOUT?
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              This is about acknowledging that{" "}
              <span className="bg-purple-700/60 text-white px-1 rounded">
                sometimes, complexity is not a choice, it's a fucking requirement.
              </span>{" "}
              And when that complexity hits, trying to wrangle it with a{" "}
              <code>bash</code> script and a cron job is like trying to build a
              goddamn rocket out of popsicle sticks and prayers. You might get something that looks
              vaguely launch-shaped, but it'll be a wobbly, unmaintainable, terrifying piece of shit
              that explodes on the launchpad.
            </p>
            <p>
              This is a call to embrace the tools built by smart motherfuckers to solve the hard
              problems so you can focus on building your cool shit, not reinventing the goddamn wheel
              for the 87th time this sprint, you stubborn jackass.
            </p>
          </div>
        </section>

        {/* Image 1 */}
        <div className="my-10 border border-[#2a2a2a] rounded-lg overflow-hidden">
          <Image
            src="/1.png"
            alt="Pxxl — Ship your APIs faster than ever"
            width={1456}
            height={820}
            priority
            className="w-full h-auto"
          />
          <p className="text-xs text-[#555] text-center py-2 font-mono">
            Get started in seconds. Live URL immediately.
          </p>
        </div>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            WHY THE FUCK WOULD I DITCH MY "ARTISANAL SERVER" FOR THIS PLATFORM SORCERY?
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Because you're not just serving a static HTML file from a stone tablet, are you? You
              want deployments that don't require a ritual sacrifice, infrastructure that doesn't page
              you at 3am, and a URL that actually stays alive when more than twelve people visit it.
              You want to build an <em>application</em>, not a fucking flyer.
            </p>
            <p>
              Here's why you should just fucking use PXXL (or Vercel, or Render, or Railway if you
              enjoy slightly different menus — the point is a modern deployment platform, you
              troglodyte):
            </p>
          </div>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            YOUR "FULL CONTROL" VPS IS JUST TRAUMA WITH AN IP ADDRESS, YOU DELUSIONAL SYSADMIN COSPLAYER.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              "But I have root access! I configured Nginx myself! I know exactly what's running on
              this box!" Yeah, and you also spent last Tuesday debugging why port 443 stopped working
              after a kernel update no one asked for.
            </p>
            <p>
              You think you're gonna ship a SaaS product, onboard a team of five, handle traffic
              spikes, and maintain SSL certs — all while also, you know, building features — with a
              hand-rolled server setup and a file named{" "}
              <code>deploy_final_REAL_v3.sh</code>? You're dreaming, you magnificent simpleton.
            </p>
            <p>
              PXXL gives you a live URL the moment you push. What are you gonna do with your artisanal
              server, huh? Debug it at midnight? Again?
            </p>
          </div>
        </section>

        {/* Image 2 */}
        <div className="my-10 border border-[#2a2a2a] rounded-lg overflow-hidden">
          <Image
            src="/2.png"
            alt="Pxxl features — Instant deployments, team collaboration, smart firewall"
            width={1456}
            height={820}
            className="w-full h-auto"
          />
          <p className="text-xs text-[#555] text-center py-2 font-mono">
            Trusted by the fastest growing startups. Features that matter.
          </p>
        </div>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            DEPLOYMENT PIPELINES, YOU CLUELESS APE.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Oh, you think manually SSHing in and running{" "}
              <code>git pull &amp;&amp; pm2 restart</code> is peak DevOps? Cute. Try coordinating
              deploys across a team where three people push to main on the same afternoon, one of them
              broke the build, and your "pipeline" is a shared screen session nobody closed. Your
              "simple" setup will turn into a cascading disaster that makes a dumpster fire look
              organised.
            </p>
            <p>
              Platforms like PXXL give you automatic builds, deployment logs, rollbacks, and
              environment management. Without them, you're just hoping for the best while the server
              quietly dies.
            </p>
          </div>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            ZERO CONFIG, MOTHERFUCKER. DO YOU SPEAK IT?
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Remember when you spent two days writing a Dockerfile, got it working, then it broke in
              production because the Node version was different? Then you wrote a <code>.nvmrc</code>.
              Then a <code>docker-compose.yml</code>. Then a{" "}
              <code>docker-compose.prod.override.yml</code> you don't remember creating?
            </p>
            <p>
              Platforms like PXXL auto-detect your environment. Next.js, Node, Python, Go, PHP — it
              figures it out. You push, it builds, it deploys. Change it in one place, it works
              everywhere. This isn't just convenience; it's{" "}
              <span className="bg-purple-700/60 text-white px-1 rounded">
                fucking sanity at scale
              </span>
              , you configuration-addicted dolt.
            </p>
          </div>
        </section>

        {/* Image 3 */}
        <div className="my-10 border border-[#2a2a2a] rounded-lg overflow-hidden">
          <Image
            src="/3.png"
            alt="Pxxl dashboard — Ready to deploy"
            width={1456}
            height={820}
            className="w-full h-auto"
          />
          <p className="text-xs text-[#555] text-center py-2 font-mono">
            One dashboard. Zero configuration. Ready to ship.
          </p>
        </div>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            SMARTER INFRASTRUCTURE, SO YOU DON'T HAVE TO BE A FUCKING SERVER-BABYSITTING PEASANT.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Remember manually watching your CPU metrics and deciding whether to{" "}
              <code>kill -9</code> something? You'd be there, squinting at <code>htop</code>,
              praying the memory leak didn't take down the whole box before you could push the fix.
            </p>
            <p>
              Platforms handle this. You tell them what to run. They run it, scale it, restart it when
              it crashes, and route traffic intelligently. It's like having a super-competent
              infrastructure team who works 24/7 and doesn't file Jira tickets. Are you really going
              to sit there and babysit a process manager like some kind of digital shepherd?
            </p>
          </div>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            TEAM COLLABORATION? GOOD LUCK WITH YOUR "SSH KEY IN A SLACK DM" SECURITY MODEL, ASSHOLE.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              What happens when someone leaves the team? What's your offboarding process — changing
              the root password and hoping they didn't screenshot it? Real team deployments need
              role-based access, shared environment variables that aren't stored in a Google Doc
              titled "DO NOT SHARE (passwords)", and audit logs that tell you who deployed what and
              when.
            </p>
            <p>
              PXXL gives you that. Or are you gonna tell me you enjoy rotating API keys manually
              across six <code>.env</code> files on a Friday afternoon?
            </p>
          </div>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            DEVELOPER EXPERIENCE ACTUALLY FUCKING MATTERS, UNLESS YOU ENJOY SUFFERING.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Instant deployments triggered by a git push? See your changes live in seconds.
              Deployment logs that actually tell you what went wrong instead of making you{" "}
              <code>grep</code> through <code>/var/log</code>? A global CDN so your users in Lagos
              and London both get fast responses instead of waiting for your single Frankfurt droplet
              to wheeze? A smart firewall that blocks DDoS attacks without you touching a single{" "}
              <code>iptables</code> rule?
            </p>
            <p>
              PXXL brings an entire platform that makes your infrastructure life less miserable. This
              means you ship better shit, faster. Stop pretending that manually managing uptime is
              some noble, character-building pursuit. It's just{" "}
              <span className="bg-purple-700/60 text-white px-1 rounded">
                fucking exhausting.
              </span>
            </p>
          </div>
        </section>

        {/* Image 4 */}
        <div className="my-10 border border-[#2a2a2a] rounded-lg overflow-hidden">
          <Image
            src="/4.png"
            alt="Pxxl framework support"
            width={1456}
            height={820}
            className="w-full h-auto"
          />
          <p className="text-xs text-[#555] text-center py-2 font-mono">
            Supports everything. Zero config anyway.
          </p>
        </div>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            BUT WHAT ABOUT THE COST? THE LOCK-IN? I WANT TO OWN MY INFRA!
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              Yes, a managed platform costs more than a $5 VPS. No shit, Sherlock. Are you building a
              side project for twelve users who are all your friends and don't mind downtime? Then
              sure, keep your droplet, you frugal bastard. That's valid.
            </p>
            <p>But if you're building:</p>
            <ul className="list-none space-y-2 pl-4 border-l-2 border-purple-600 text-[17px]">
              <li>A SaaS product with real customers</li>
              <li>An app that needs to stay up during a traffic spike</li>
              <li>Anything a team of more than one person deploys to</li>
              <li>Something where downtime costs you money or reputation</li>
            </ul>
            <p>
              ...then the "cost" of a platform is the cost of doing real business, you cheap bastard.
              And the time you save not being a part-time sysadmin more than pays for it.
            </p>
          </div>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            SO, WHEN SHOULD I JUST FUCKING USE PXXL?
          </h2>
          <ul className="space-y-3 text-[17px] leading-[1.75]">
            {[
              "When you want to deploy without configuring anything",
              'When your team needs to ship without one person being the "server guy"',
              "When uptime, scaling, and SSL shouldn't be your problem",
              '"It works on my machine" is a sentence you\'re tired of saying',
              "When you want a live URL in the time it takes to push to GitHub",
              "When you'd rather spend your evening building features than debugging Nginx",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-purple-500 font-bold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase underline decoration-purple-500 underline-offset-4 mb-5">
            THE REAL FUCKING PROBLEM ISN'T PXXL. IT'S YOU, YOU MISGUIDED FOOL.
          </h2>
          <div className="space-y-5 text-[17px] leading-[1.75]">
            <p>
              It's developers treating infrastructure as a personality. It's cargo-culting "full
              control" without acknowledging the full cost of that control. It's spending 40 hours a
              year maintaining a server for an app that gets 200 visitors a month.
            </p>
            <p>
              Don't throw the baby out with the bathwater just because some overcomplicated PaaS gave
              you sticker shock once. PXXL and platforms like it solve real, expensive, soul-crushing
              problems. The problem isn't the platform; it's the developer who thinks suffering is the
              same as expertise.
            </p>
            <p>
              So, for your next deployment — for the love of all that is holy —{" "}
              <strong className="text-purple-400">JUST FUCKING USE PXXL</strong>. Stop pretending
              your hand-rolled infra is anything other than technical debt with a custom domain.
            </p>
            <p>
              Your users (and your future self, who would like to sleep){" "}
              <em>will thank you.</em>
            </p>
            <p className="font-bold text-white">
              Now get back to work, and ship something fucking amazing — not another server config
              nobody asked for.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://pxxl.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded font-mono text-sm transition-all duration-200"
            >
              Use PXXL — It&apos;s Free →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#222] pt-8 text-sm text-[#555]">
          <p className="mb-4">
            Inspired by{" "}
            <a
              href="https://justfuckingusehtml.com"
              className="text-purple-500 hover:text-purple-300 underline"
            >
              justfuckingusehtml.com
            </a>{" "}
            and the entire &quot;Just Fucking Use...&quot; ecosystem.
          </p>
          <p className="mb-3 text-[#444] font-bold">Also check out:</p>
          <div className="grid grid-cols-2 gap-1 text-xs text-purple-600">
            {[
              "Just Fucking Use HTML",
              "Just Fucking Use React",
              "Just Fucking Use CSS",
              "Just Fucking Use Docker",
              "Just Fucking Use Tailwind",
              "Just Fucking Use Postgres",
              "Just Fucking Use Go",
              "Just Fucking Use Astro",
            ].map((link) => (
              <a key={link} href="#" className="hover:text-purple-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#333]">Open source under the MIT License.</p>
        </footer>

      </main>
    </div>
  );
}
