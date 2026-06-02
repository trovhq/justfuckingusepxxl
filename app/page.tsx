import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just Fucking Use PXXL",
  description:
    "A no-bullshit guide to why you should stop hand-rolling your infrastructure and use a modern deployment platform like PXXL (or Vercel, Render, Railway).",
  openGraph: {
    title: "Just Fucking Use PXXL",
    description:
      "Stop configuring nginx at midnight. Just fucking use PXXL.",
    url: "https://justfuckingusepxxl.com",
    siteName: "Just Fucking Use PXXL",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b-2 border-white px-8 py-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
          JUST FUCKING USE PXXL
        </h1>
        <p className="text-xl text-gray-300">
          (OR ANY DEPLOYMENT PLATFORM, YOU GODDAMN CAVEMAN)
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-12 space-y-8">
        {/* Section: What is this */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-red-500">
            WHAT THE FUCK IS THIS ABOUT?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Look, I get it. You saw that other site. "VPS is king", "Keep it
              simple, stupid", "My DigitalOcean droplet from '19 still runs
              faster than your managed platform." Fucking adorable. Like a
              toddler proudly showing off a mud pie.
            </p>
            <p>
              It's a nice sentiment, like wishing we could all go back to
              churning our own butter instead of just buying it at the store.
              But shipping software isn't just SSHing into a box and praying
              anymore, you fossil. It's where teams collaborate, where products
              scale, where uptime actually fucking matters. You know, shit that
              actually has to stay up.
            </p>
          </div>
        </section>

        {/* Section: The Real Problem */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-red-500">
            SO, WHAT THE FUCK IS THIS ABOUT?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              This is about acknowledging that sometimes, infrastructure
              complexity is not a choice, it's a fucking requirement. And when
              that complexity hits, trying to wrangle it with a bash script and
              a cron job is like trying to run a restaurant out of your car. You
              might serve a few tacos, but you will absolutely collapse the
              moment a bus shows up hungry.
            </p>
            <p>
              This is a call to embrace the tools built by smart motherfuckers
              to solve the hard problems so you can focus on building your cool
              shit, not configuring reverse proxies for the 34th time this
              sprint, you stubborn jackass.
            </p>
          </div>
        </section>

        {/* Section: Why Switch */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-red-500">
            WHY THE FUCK WOULD I DITCH MY "ARTISANAL SERVER" FOR THIS PLATFORM
            SORCERY?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Because you're not just serving a static HTML file from a stone
            tablet, are you? You want deployments that don't require a ritual
            sacrifice, infrastructure that doesn't page you at 3am, and a URL
            that actually stays alive when more than twelve people visit it.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            Here's why you should just fucking use PXXL (or Vercel, or Render,
            or Railway if you enjoy slightly different menus — the point is a
            modern deployment platform, you troglodyte):
          </p>
        </section>

        {/* Section: Control Delusion */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            YOUR "FULL CONTROL" VPS IS JUST TRAUMA WITH AN IP ADDRESS, YOU
            DELUSIONAL SYSADMIN COSPLAYER.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              "But I have root access! I configured Nginx myself! I know
              exactly what's running on this box!" Yeah, and you also spent
              last Tuesday debugging why port 443 stopped working after a kernel
              update no one asked for.
            </p>
            <p>
              You think you're gonna ship a SaaS product, onboard a team of
              five, handle traffic spikes, and maintain SSL certs — all while
              also, you know, building features — with a hand-rolled server
              setup and a .sh file named deploy_final_REAL_v3.sh? You're
              dreaming, you magnificent simpleton.
            </p>
            <p>
              PXXL gives you a live URL the moment you push. What are you gonna
              do with your artisanal server, huh? Debug it at midnight? Again?
            </p>
          </div>
        </section>

        {/* Section: Deployment Pipelines */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            DEPLOYMENT PIPELINES, YOU CLUELESS APE.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Oh, you think manually SSHing in and running git pull && pm2
              restart is peak DevOps? Cute. Try coordinating deploys across a
              team where three people push to main on the same afternoon, one of
              them broke the build, and your "pipeline" is a shared screen
              session nobody closed. Your "simple" setup will turn into a
              cascading disaster that makes a dumpster fire look organised.
            </p>
            <p>
              Platforms like PXXL give you automatic builds, deployment logs,
              rollbacks, and environment management. Without them, you're just
              hoping for the best while the server quietly dies.
            </p>
          </div>
        </section>

        {/* Section: Zero Config */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            ZERO CONFIG, MOTHERFUCKER. DO YOU SPEAK IT?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Remember when you spent two days writing a Dockerfile, got it
              working, then it broke in production because the Node version was
              different? Then you wrote a .nvmrc. Then a docker-compose.yml.
              Then a docker-compose.prod.yml. Then a
              docker-compose.prod.override.yml you don't remember creating?
            </p>
            <p>
              Platforms like PXXL auto-detect your environment. Next.js, Node,
              Python, Go, PHP — it figures it out. You push, it builds, it
              deploys. Change it in one place, it works everywhere. This isn't
              just convenience; it's fucking sanity at scale, you
              configuration-addicted dolt.
            </p>
          </div>
        </section>

        {/* Section: Smarter Infrastructure */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            SMARTER INFRASTRUCTURE, SO YOU DON'T HAVE TO BE A FUCKING
            SERVER-BABYSITTING PEASANT.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Remember manually watching your CPU metrics and deciding whether
              to kill -9 something? You'd be there, squinting at htop, praying
              the memory leak didn't take down the whole box before you could
              push the fix.
            </p>
            <p>
              Platforms handle this. You tell them what to run. They run it,
              scale it, restart it when it crashes, and route traffic
              intelligently. It's like having a super-competent infrastructure
              team who works 24/7 and doesn't file Jira tickets. Are you really
              going to sit there and babysit a process manager like some kind of
              digital shepherd?
            </p>
          </div>
        </section>

        {/* Section: Team Collaboration */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            TEAM COLLABORATION? GOOD LUCK WITH YOUR "SSH KEY IN A SLACK DM"
            SECURITY MODEL, ASSHOLE.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              "Just give everyone sudo!" they shriek, like they've never heard
              of a breach. Groundbreaking. That's Security 101 violations, you
              reckless prick.
            </p>
            <p>
              What happens when someone leaves the team? What's your
              offboarding process — changing the root password and hoping they
              didn't screenshot it? Real team deployments need role-based
              access, shared environment variables that aren't stored in a
              Google Doc titled "DO NOT SHARE (passwords)", and audit logs that
              tell you who deployed what and when.
            </p>
            <p>
              PXXL gives you that. Or are you gonna tell me you enjoy rotating
              API keys manually across six .env files on a Friday afternoon?
            </p>
          </div>
        </section>

        {/* Section: DX */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            DEVELOPER EXPERIENCE ACTUALLY FUCKING MATTERS, UNLESS YOU ENJOY
            SUFFERING.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Instant deployments triggered by a git push? See your changes live
              in seconds. Deployment logs that actually tell you what went wrong
              instead of making you grep through /var/log? A global CDN so your
              users in Lagos and London both get fast responses instead of
              waiting for your single Frankfurt droplet to wheeze? A smart
              firewall that blocks DDoS attacks without you touching a single
              iptables rule?
            </p>
            <p>
              PXXL brings an entire platform that makes your infrastructure life
              less miserable. This means you ship better shit, faster. Stop
              pretending that manually managing uptime is some noble,
              character-building pursuit. It's just fucking exhausting.
            </p>
          </div>
        </section>

        {/* Section: Cost Concerns */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            BUT WHAT ABOUT THE COST? THE LOCK-IN? I WANT TO OWN MY INFRA!
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Yes, a managed platform costs more than a $5 VPS. No shit,
              Sherlock. Are you building a side project for twelve users who are
              all your friends and don't mind downtime? Then sure, keep your
              droplet, you frugal bastard. That's valid.
            </p>
            <p className="font-bold">
              But if you're building:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>A SaaS product with real customers</li>
              <li>An app that needs to stay up during a traffic spike</li>
              <li>Anything a team of more than one person deploys to</li>
              <li>
                Something where downtime costs you money or reputation
              </li>
            </ul>
            <p>
              ...then the "cost" of a platform is the cost of doing real
              business, you cheap bastard. And the time you save not being a
              part-time sysadmin more than pays for it.
            </p>
          </div>
        </section>

        {/* Section: When to Use */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-red-500">
            SO, WHEN SHOULD I JUST FUCKING USE PXXL?
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>When you want to deploy without configuring anything</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>
                When your team needs to ship without one person being the
                "server guy"
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>
                When uptime, scaling, and SSL shouldn't be your problem
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>
                When "it works on my machine" is a sentence you're tired of
                saying
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>
                When you want a live URL in the time it takes to push to GitHub
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>
                When you'd rather spend your evening building features than
                debugging Nginx
              </span>
            </li>
          </ul>
        </section>

        {/* Section: The Real Problem */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-red-500">
            THE REAL FUCKING PROBLEM ISN'T PXXL. IT'S YOU, YOU MISGUIDED FOOL.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              It's developers treating infrastructure as a personality. It's
              cargo-culting "full control" without acknowledging the full cost
              of that control. It's spending 40 hours a year maintaining a
              server for an app that gets 200 visitors a month.
            </p>
            <p>
              Don't throw the baby out with the bathwater just because some
              overcomplicated PaaS gave you sticker shock once. PXXL and
              platforms like it solve real, expensive, soul-crushing problems.
              The problem isn't the platform; it's the developer who thinks
              suffering is the same as expertise.
            </p>
            <p>
              So, for your next deployment — for the love of all that is holy —{" "}
              <span className="font-bold text-red-400">JUST FUCKING USE PXXL</span>
              . Stop pretending your hand-rolled infra is anything other than
              technical debt with a custom domain.
            </p>
            <p className="font-bold">
              Your users (and your future self, who would like to sleep) will
              thank you.
            </p>
            <p className="font-bold text-yellow-300">
              Now get back to work, and ship something fucking amazing — not
              another server config nobody asked for.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-gray-700 pt-8 mt-12 text-sm text-gray-400">
          <p className="mb-4">
            Inspired by{" "}
            <a
              href="https://justfuckingusehtml.com"
              className="text-white underline hover:no-underline"
            >
              justfuckingusehtml.com
            </a>{" "}
            and the entire "Just Fucking Use..." ecosystem.
          </p>
          <p className="mb-4 font-bold text-white">
            Also check out the full meme collection:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use HTML
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use React
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use CSS
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use Docker
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use Tailwind
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use Postgres
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use Go
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Just Fucking Use Astro
            </a>
          </div>
          <p className="mt-6 text-gray-500">
            This project is open source under the MIT License.
          </p>
        </footer>
      </main>
    </div>
  );
}
