const BASE = "https://www.nancho.net";

const sections = [
  {
    id: "alt.kyoto",
    title: "Alternative Kyoto",
    items: [
      { title: "NEWS FROM CITY HALL", url: "/cityhall/catacomb.html", desc: "Reports on the Nancho Regency and the State of the City" },
      { title: "NANCHO KONOMI | NANCHO STYLE", url: "/1stlight/konomi.html", desc: "Exposing Hidden Genii — Works & Writings of the Inspired and Unfashionhobbled" },
      { title: "IN THE VOICE OF THE IJIN", url: "/kyoto/kyoijin.html", desc: "Incensed, Aggrieved, and/or Exhilarating Interviews with Kyoto's Intrepidly Unincorporated" },
    ],
  },
  {
    id: "bbpathology",
    title: "Big Body Pathology",
    items: [
      { title: "LUSIONS", url: "/bigbody/lusions1.html", desc: "The Inescapable Parallels Between Japanese Corporate Bodies, Eco-Pathogens and the Mysterious Slime Mold" },
      { title: "THE BIG BODY PROBLEM", url: "/bigbody/apforum1.html", desc: "Toward an Immune Approach to Grassroots Activism" },
      { title: "SO YOU WANT TO BE AN ORTHODOCTOR?", url: "/memes/orthodoc.html", desc: "Three Big Body Revelations & A Little Heresy To Go" },
      { title: "CORPORATIONS: A REAL-LIFE FRANKENSTEIN", url: "/bigbody/bbjbrown.html", desc: "Jerry Brown on the Cancerous Growth of Big Bodies in America" },
      { title: "THE 11 INHERENT RULES OF CORPORATE BEHAVIOR", url: "/bigbody/corprule.html", desc: "Jerry Mander on: Why Big Bodies Can't Make Nice..." },
      { title: "THE TROUBLE WITH CORPORATIONS", url: "/bigbody/knox1.html", desc: "Barbara Knox series on the Corporate Takeover of American Society" },
      { title: "TAKING CARE OF BUSINESS", url: "/bigbody/chrtink1.html", desc: "Breakthrough Proposals on \"Citizenship and the Charter of Incorporation\" by Richard Grossman and Frank Adams" },
      { title: "BIG MEDICINE 2000", url: "/bigmed2000/index.html", desc: "The Virtual Presidential Campaign to Heal Big Body Pathology for Once and for All." },
    ],
  },
  {
    id: "anthrocult",
    title: "Corporate Anthroculture",
    items: [
      { title: "LUSIONS III", url: "/bigbody/lusions3.html", desc: "Social Conditioning for Terminal Incorporation" },
      { title: "\"CASTRATION\", THE HIV SCANDAL AND THE JAPANESE BUREAUCRACY", url: "/anthcult/castrhiv.html", desc: "[ MIT Speech ] : Defrocked elite bureaucrat and best-selling author, Dr. Masao Miyamoto reveals how people are made small to fit in Big Bodies and their murderous potential when rampant" },
      { title: "\"CASTRATION\" -- THE GOAL OF JAPANESE EDUCATION AND ITS RELATION TO GOVERNMENT DEREGULATION", url: "/anthcult/castreg.html", desc: "[ Oxford & Cambridge Speech ]: Dr. Miyamoto explains Japanese anthroculture and how Big Bodies unman their members and stifle democratic reform" },
      { title: "HISTORY IN YOUR PANTS", url: "/cityhall/rectmeme.html", desc: "Hormone Hobbles on the Body Politic" },
      { title: "SOY ESTROGENS, MENOPAUSE (& ELEGANT EMASCULATION)", url: "/anthcult/lancet2.html", desc: "A Lancet Report on the Medical Effects of Tofu, Miso, et Anti-androgenic Cetera." },
    ],
  },
  {
    id: "earthour",
    title: "Earth Hour",
    items: [
      { title: "IGNITING THE EARTH HOUR", url: "/earthour/earthour.html", desc: "Alpha to Omega with a Recurring Lunar Conspiracy" },
      { title: "EARTH HOUR CALENDER", url: "/earthour/ehdates.html", desc: "Earth Hour Timings Around the World" },
    ],
  },
  {
    id: "gloss",
    title: "Glossolalia",
    items: [
      { title: "NANCHO DEFINITIONS", url: "/bigmed2000/biggloss.html", desc: "Inventive Meanings and the Etymological Underbrush" },
    ],
  },
  {
    id: "kipapers",
    title: "THE KI PAPERS",
    items: [
      { title: "PART I: KI AND THE ARTS OF SEX, HEALING AND CORPORATE BODY BUILDING", url: "/kipower/kiarts.html", desc: "" },
      { title: "PART II: E PLURIBUS YAMATO: THE CULTURE OF CORPORATE BODIES", url: "/kipower/kisoma.html", desc: "" },
      { title: "PART III: KI AND THE JAPANESE ART OF MINDBINDING", url: "/kipower/mindbind.html", desc: "" },
      { title: "KI & THE POWERS OF JAPAN: The Video", url: "/kipower/kipower1.html", desc: "Narration Text of the Video Proposal" },
      { title: "KI & THE POWERS OF JAPAN: The Book", url: "/kipower/kibkoutl.html", desc: "Chapter Outline for the Book Proposal" },
    ],
    intro: "The Introductory Series on \"Ki in the Body Politic\" — Originally published in Kyoto Journal; reprinted in the Melbourne Star, Sydney Morning Herald, Whole Earth Review and Adbusters",
  },
  {
    id: "memetics",
    title: "Memetics",
    items: [
      { title: "MEMEWORK", url: "/memes/memework.html", desc: "Introductory Ideas & Links for Mastering Memes" },
      { title: "THE ABHORRENCE OF THE EXOTIC", url: "/memes/abexotic.html", desc: "Japan's Comparative Advantage in Memetic Immunity" },
      { title: "MEMETICS", url: "/memes/infoviru.html", desc: "The Science of Information Viruses" },
    ],
  },
  {
    id: "consultations",
    title: "Nancho Consultations",
    items: [
      { title: "VIEWS FROM THE VIRTUAL CABINET", url: `${BASE}/advisors/vcabinet.html`, desc: "Excerpts from our initial audiences with the leading thinkers, movers and meme masters of the age — Capra, Chomsky, Nader, Suzuki, Watson, Weil and many, many more..." },
    ],
  },
  {
    id: "nanchohistory",
    title: "Nancho History & Horizons",
    items: [
      { title: "JAPAN'S OTHER EMPEROR", url: "/nancho/otheremp.html", desc: "Taoist Politics & the Nancho Resurgence" },
      { title: "THE MACARTHUR ARCHIVES ON NANCHO", url: "/nancho/ghqkuma1.html", desc: "Excerpts from Classified GHQ Intelligence Reports on Kumazawa Tenno & the Nancho Claim to the Throne" },
      { title: "THE MACARTHUR ARCHIVES ON JAPAN'S IMPERIAL LINE", url: "/nancho/ghqemps1.html", desc: "Classified GHQ Intelligence Reports on the History of the Chrysanthemum Throne" },
      { title: "THE SOUTHERN COURT DEFENSE", url: "/nancho/southdef.html", desc: "Classified Notes on Mysterious Powers, Virtual Umbrellas and Buddhist High Tech" },
      { title: "THE NANCHO AGENDA", url: "/nancho/ijinregs.html", desc: "The Government Registered Aims and Means of the Nancho Ijin Butai" },
    ],
  },
  {
    id: "tantra",
    title: "Tantra & Terra Erotica",
    items: [
      { title: "SONG TO OMEGA", url: "/tantra/tantween.html", desc: "Epiphany & the Torrents of Tween" },
      { title: "MEDITATIONS ON THE TANTRIC GRAIL", url: "/tantra/tangrail.html", desc: "Old Maps & Buried Pleasure" },
    ],
  },
];

const topicsList = [
  { id: "alt.kyoto", name: "Alternative Kyoto", desc: "Perspectives on the Miyako's Plight & Prospects from Surprising Citizens" },
  { id: "bbpathology", name: "Big Body Pathology", desc: "Recognizing/Recording Mega-Corporate Assaults against the Body, Spirit & Biosphere" },
  { id: "anthrocult", name: "Corporate Anthroculture", desc: "The Art & Science of Raising Small People for Big Bodies" },
  { id: "earthour", name: "Earth Hour", desc: "Monthly Moments of Transparent Identity with the Mother Corporate Body of Us All" },
  { id: "gloss", name: "Glossalalia", desc: "Meanings of Unfamiliar Terms" },
  { id: "memetics", name: "Memetics", desc: "The Science and Strategy of Seminal Ideas" },
  { id: "kipapers", name: "Ki Papers", desc: "The Numinous Powers of Attention" },
  { id: "consultations", name: "Nancho Consultations", desc: "Millennial Guidance from Modern Meme Masters" },
  { id: "nanchohistory", name: "Nancho History & Horizons", desc: "Origin/Agenda of the Southern Court and The Future of Taoist Democracy" },
  { id: "tantra", name: "Tantra & Terra Erotica", desc: "Arousing the Animal, Igniting the Body, Enchanting the World" },
];

const RainbowBar = () => (
  <div className="h-2 w-full max-w-[600px] mx-auto md:mx-0" style={{
    background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)"
  }} />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-200">

      {/* Top Banner */}
      <div className="w-full py-4 text-center md:text-left px-6 md:px-12 border-b border-gray-300">
        <p className="italic text-xl md:text-2xl text-gray-600">
          THE NANCHO ARCHIVES : Under Permanent Construction <span className="ml-4">Mind your head...</span>
        </p>
      </div>

      <main className="max-w-5xl px-6 md:px-12 py-8 flex flex-col items-start w-full">

        {/* Header - Side-by-side and left-aligned on desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 md:gap-12 mb-12 w-full">
          <img
            src={`${import.meta.env.BASE_URL}JITTOKU1.jpg`}
            alt="The Nancho Archives"
            className="w-48 md:w-56 border-4 border-gray-800 shadow-xl flex-shrink-0"
          />
          <div className="w-full flex-1 text-center md:text-left">
            <RainbowBar />
            <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight uppercase my-4 text-gray-950 leading-none">
              THE NANCHO ARCHIVES
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold italic text-gray-600 tracking-wide mt-2 mb-6">
              An Arsenal of Incendiary Ideas
            </h2>
            <RainbowBar />
          </div>
        </div>

        {/* Topic Areas */}
        <div className="mb-12 w-full text-left" id="topics">
          <h3 className="text-4xl font-bold mb-6 tracking-tight border-b-2 border-gray-300 pb-2 inline-block">
            Topic Areas
          </h3>
          <ul className="space-y-3 text-left ml-6 list-disc">
            {topicsList.map((t) => (
              <li key={t.id} className="leading-relaxed text-2xl md:text-3xl text-gray-900 md:whitespace-nowrap">
                <a href={`#${t.id}`} className="font-bold text-red-800 hover:underline">
                  {t.name}
                </a>
                <span className="text-gray-600 ml-2">— {t.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backward yet Upward Navigation Rule */}
        <div className="border-y border-gray-200 py-4 text-center md:text-left my-12 w-full">
          <a href="#topics" className="text-3xl font-bold text-red-800 uppercase tracking-wider hover:scale-105 transition-transform inline-block">
            Backward yet Upward
          </a>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16 w-full">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="pt-12 w-full text-left">
              
              {/* Clean modern section heading */}
              <div className="w-full mb-6 border-b border-gray-300 pb-2">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 uppercase">
                  {section.title}
                </h3>
              </div>

              {section.intro && (
                <p className="text-xl md:text-2xl mb-6 leading-relaxed text-gray-700 w-full">
                  {section.intro}
                </p>
              )}

              <div className="space-y-6 w-full text-left">
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <a
                      href={item.url}
                      className="text-2xl md:text-3xl font-bold text-red-800 uppercase tracking-tight hover:underline transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                    {item.desc && (
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-1 w-full md:whitespace-nowrap">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 text-center md:text-left w-full">
                <a href="#topics" className="text-xl font-bold text-red-800 uppercase tracking-wider hover:underline">
                  Backward yet Upward
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* Global Footer */}
        <footer className="mt-24 pt-12 border-t-2 border-gray-300 text-center md:text-left pb-16 w-full">
          <a href="/" className="group inline-block">
            <img
              src={`${BASE}/graph/revolt.gif`}
              alt="The Way Home"
              className="mx-auto md:mx-0 mb-6 w-40 group-hover:scale-105 transition-transform duration-500"
            />
            <p className="font-extrabold tracking-wider text-4xl md:text-5xl group-hover:text-red-700 transition-colors uppercase underline decoration-2 underline-offset-6">
              THE WAY HOME
            </p>
          </a>
        </footer>

      </main>
    </div>
  );
};

export default Index;