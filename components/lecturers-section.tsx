const lecturers = [
  {
    name: "茂木 秀彦",
    role: "DX研究所 代表",
    bio: "DX研究所代表として各社の業務DX化に尽力。現在は生成AIを用いた各社の業務改善支援サポートにも着手している。",
    imgSrc: "/images/ceo.jpg",
    imgAlt: "茂木秀彦のプロフィール写真",
  },
  {
    name: "池田 航平",
    role: "AI コンサルタント",
    bio: "VEHO Worksで生成AI導入を多数経験後、独立。現在も中小企業を中心に、現場で使えるAI導入支援を展開している。",
    imgSrc: "/images/ikeda.jpg",
    imgAlt: "池田航平のプロフィール写真",
  },
]

export function LecturersSection() {
  return (
    <section id="lecturers" className="section-y section-x bg-brand-light-gray">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-16">
          経験豊富なプロフェッショナル講師陣
        </h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
          {lecturers.map((lecturer, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft md:p-8"
            >
              <img
                src={lecturer.imgSrc}
                alt={lecturer.imgAlt}
                width={128}
                height={128}
                className="h-32 w-32 shrink-0 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-fluid-heading-lg font-bold text-brand-secondary">
                  {lecturer.name}
                </h3>
                <p className="mb-2 font-semibold text-brand-primary">
                  {lecturer.role}
                </p>
                <p className="text-fluid-body text-gray-600">{lecturer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
