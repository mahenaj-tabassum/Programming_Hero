const MENU = [
  {
    name: "Flat white",
    note: "Double ristretto, silky steamed milk",
    price: "$4.50",
  },
  { name: "Pour-over", note: "Single-origin, brewed to order", price: "$5.00" },
  {
    name: "Honey oat latte",
    note: "Espresso, oat milk, local honey",
    price: "$5.25",
  },
  {
    name: "Cold brew",
    note: "Steeped 18 hours, served over ice",
    price: "$4.75",
  },
  { name: "Cardamom bun", note: "Baked each morning", price: "$3.50" },
];

const btn =
  "inline-block rounded-full px-7 py-4 font-bold focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-honey";

const HomeComponent = () => {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="flex min-h-screen flex-col">
        <nav className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-10">
          <span className="font-display text-2xl font-semibold">Halfmoon</span>
          <a href="#menu" className="font-medium">
            Menu &amp; hours
          </a>
        </nav>

        <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-5 sm:px-10 md:grid-cols-[1.1fr_.9fr] md:gap-20">
          <div>
            <h1 className="font-display text-5xl leading-none font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Slow coffee for fast mornings.
            </h1>
            <p className="mt-6 mb-8 max-w-[32ch] text-xl text-mute">
              Small-batch beans, roasted every week and poured by people who
              remember your order.
            </p>
            <a href="#menu" className={`${btn} bg-deep text-on-deep`}>
              See the menu
            </a>
          </div>

          <div className="order-first grid place-items-center md:order-none">
            <svg
              viewBox="0 0 320 300"
              role="img"
              aria-label="A steaming cup of coffee"
              className="w-48 md:w-full md:max-w-sm"
            >
              <g
                className="fill-none stroke-mute"
                strokeWidth="5"
                strokeLinecap="round"
              >
                {[120, 160, 200].map((x, i) => (
                  <path
                    key={x}
                    d={`M${x} 90c-14-18 14-30 0-52`}
                    className="animate-rise opacity-0 motion-reduce:animate-none motion-reduce:opacity-50"
                    style={{ animationDelay: `${i * 1.3}s` }}
                  />
                ))}
              </g>
              <path
                d="M70 110h180v70a90 90 0 0 1-180 0z"
                className="fill-cup stroke-ink"
                strokeWidth="5"
              />
              <path
                d="M250 130h14a30 30 0 0 1 0 60h-22"
                className="fill-none stroke-ink"
                strokeWidth="5"
              />
              <ellipse
                cx="160"
                cy="110"
                rx="90"
                ry="14"
                className="fill-honey stroke-ink"
                strokeWidth="5"
              />
              <ellipse
                cx="160"
                cy="278"
                rx="120"
                ry="10"
                className="fill-ink opacity-10"
              />
            </svg>
          </div>
        </div>

        <div className="border-t border-line py-4 text-sm text-mute">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-4 px-5 sm:px-10">
            <span>Roasted weekly</span>
            <span>Oat, almond &amp; whole milk</span>
            <span>Open daily from 7am</span>
          </div>
        </div>
      </section>

      {/* Section 2: Menu and visit info */}
      <section id="menu" className="flex min-h-screen items-center py-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-10 md:grid-cols-[1.1fr_.9fr] md:gap-24">
          <div>
            <h2 className="mb-7 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
              What we&apos;re pouring.
            </h2>
            {MENU.map((item) => (
              <div
                key={item.name}
                className="flex justify-between gap-4 border-t border-line py-4"
              >
                <div>
                  <b className="font-display text-xl font-semibold">
                    {item.name}
                  </b>
                  <small className="block text-mute">{item.note}</small>
                </div>
                <span className="font-bold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] bg-deep p-8 text-on-deep md:p-12">
            <h2 className="mb-4 font-display text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              Come say hi.
            </h2>
            <p className="opacity-85">12 Orchard Lane</p>
            <p className="opacity-85">Seats inside, benches out front.</p>
            <div className="mt-5 mb-7 border-t border-on-deep/20 pt-5">
              <div className="flex justify-between py-1">
                <span>Mon–Fri</span>
                <span>7am – 6pm</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sat–Sun</span>
                <span>8am – 5pm</span>
              </div>
            </div>
            <a href="#" className={`${btn} bg-honey text-[#22180f]`}>
              Get directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
