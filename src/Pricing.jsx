const Pricing= () => {

  const cardTitleClass = "text-xl font-bold";
  const cardClass = "w-68 h-90 px-3 py-2 flex flex-col rounded border-2 border-zinc-950 shadow-xl/30 group";
  const cardSide = "bg-zinc-100 text-zinc-950 scale-95 transition hover:scale-100";
  const priceClass = "m-2 mt-1 text-4xl font-bold text-center";
  const perClass = "text-sm font-semibold";
  const buttonClass = "w-48 m-3 p-2 self-center border rounded group-hover:bg-zinc-400/50";
  const descClass = "text-center text-sm text-zinc-400 font-medium"
  const includeClass = "flex flex-col justify-center items-start mt-2 ml-1 text-sm";

  return (
    <section id="pricing" className="mt-8">
        <h2 className="text-center text-3xl font-bold text-zinc-950 dark:text-zinc-50">Pricing</h2>
        <div className="mt-4 gap-3 flex flex-col lg:flex-row items-center justify-center font-semibold">
            <button className={`${cardSide} ${cardClass}`}>
                <h3 className={cardTitleClass}>Basic</h3>
                <p className={priceClass}>$100<span className={perClass}>/project</span></p>
                <p className={descClass}>There are many variations available, but the majority have suffered.</p>
                <div className={buttonClass}>Choose this plan</div>
                <p>Includes:</p>
                <div className={includeClass}>
                    <p>&#x2713; Unlimited placeholder texts</p>
                    <p>&#x2713; Consectetur adipiscing elit</p>
                    <p>&#x2713; Excepteur sint occaecat cupidatat</p>
                    <p>&#x2713; Officia deserunt mollit anim</p>
                    <p>&#x2713; Predefined chunks as necessary</p>
                </div>
            </button>
            <button className={`bg-zinc-600/80 transition hover:scale-105 ${cardClass}`}>
                <div className="flex justify-center gap-2"><h3 className={cardTitleClass}>Standard</h3><span className="p-1 text-sm border rounded">Most Popular</span></div>
                <p className={priceClass}>$150<span className={perClass}>/project</span></p>
                <p className={descClass}>There are many variations available, but the majority have suffered.</p>
                <div className={buttonClass}>Choose this plan</div>
                <p>Includes:</p>
                <div className={includeClass}>
                    <p>&#x2713; Unlimited placeholder texts</p>
                    <p>&#x2713; Consectetur adipiscing elit</p>
                    <p>&#x2713; Excepteur sint occaecat cupidatat</p>
                    <p>&#x2713; Officia deserunt mollit anim</p>
                    <p>&#x2713; Predefined chunks as necessary</p>
                </div>
            </button>
            <button className={`${cardSide} ${cardClass}`}>
                <h3 className={cardTitleClass}>Premium</h3>
                <p className={priceClass}>$200<span className={perClass}>/project</span></p>
                <p className={descClass}>There are many variations available, but the majority have suffered.</p>
                <div className={buttonClass}>Choose this plan</div>
                <p>Includes:</p>
                <div className={includeClass}>
                    <p>&#x2713; Unlimited placeholder texts</p>
                    <p>&#x2713; Consectetur adipiscing elit</p>
                    <p>&#x2713; Excepteur sint occaecat cupidatat</p>
                    <p>&#x2713; Officia deserunt mollit anim</p>
                    <p>&#x2713; Predefined chunks as necessary</p>
                    <p>&#x2713; Free from repetition</p>
                </div>
            </button>
        </div>
  </section>
  )
};

export default Pricing;