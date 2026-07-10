import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const groups = [
  {
    label: "Frontend",
    pills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
    color: "text-sky-500 dark:text-sky-400",
    bar: "#38bdf8",
    score: 92,
  },
  {
    label: "Backend",
    pills: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST APIs"],
    color: "text-emerald-500 dark:text-emerald-400",
    bar: "#34d399",
    score: 88,
  },
  {
    label: "AI / Cloud",
    pills: ["OpenAI", "AWS", "LangChain", "Stripe", "AWS Polly"],
    color: "text-violet-500 dark:text-violet-400",
    bar: "#a78bfa",
    score: 84,
  },
  {
    label: "Dev Tools",
    pills: ["GitHub Actions", "Docker", "CI/CD", "Vercel", "Jest"],
    color: "text-amber-500 dark:text-amber-400",
    bar: "#fbbf24",
    score: 79,
  },
];

const chartData = {
  labels: groups.map((g) => g.label),
  datasets: [
    {
      label: "Proficiency",
      data: groups.map((g) => g.score),
      backgroundColor: groups.map((g) => g.bar),
      borderRadius: 10,
      borderSkipped: false,
      barThickness: 32,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(8, 13, 26, 0.95)",
      titleColor: "#F0F4FF",
      bodyColor: "#8B9BB4",
      padding: 10,
      callbacks: { label: (ctx) => ` ${ctx.parsed.y}% proficiency` },
    },
  },
  scales: {
    x: {
      ticks: { color: "#8B9BB4", font: { size: 12, weight: "500" } },
      grid: { display: false },
      border: { display: false },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { color: "#8B9BB4", stepSize: 25, font: { size: 11 } },
      grid: { color: "rgba(148, 163, 184, 0.08)" },
      border: { display: false },
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-app-background dark:bg-app-dark-surface py-20 text-app-text dark:text-[#F0F4FF] transition-colors duration-500">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">Skills</p>
          <h2 className="text-4xl font-bold text-app-text dark:text-white mb-4">
            What I Build With
          </h2>
          <p className="mx-auto max-w-xl text-app-muted dark:text-slate-400 text-sm leading-relaxed">
            Four skill groups, clearly organized for recruiters and hiring managers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-500/10 bg-[#081924] p-8 shadow-[0_25px_80px_rgba(0,212,170,0.12)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {groups
                .flatMap((g) => g.pills)
                .map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#1E2D47] bg-[#112240] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200"
                  >
                    {pill}
                  </span>
                ))}
            </div>

            <div className="rounded-[1.75rem] bg-[#091726] p-4">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
