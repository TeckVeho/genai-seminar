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
    <section
      id="lecturers"
      className="py-20 px-4"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "#02396B" }}
        >
          経験豊富なプロフェッショナル講師陣
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {lecturers.map((lecturer, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col sm:flex-row items-center gap-8"
            >
              <img
                src={lecturer.imgSrc}
                alt={lecturer.imgAlt}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full flex-shrink-0 object-cover"
              />
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "#02396B" }}
                >
                  {lecturer.name}
                </h3>
                <p
                  className="font-semibold mb-2"
                  style={{ color: "#005BAC" }}
                >
                  {lecturer.role}
                </p>
                <p className="text-sm text-gray-600">{lecturer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
