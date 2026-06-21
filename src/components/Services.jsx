import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const skillPills = [
  { label: "React", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Node.js", group: "Backend" },
  { label: "Supabase", group: "Backend" },
  { label: "OpenAI", group: "AI / Cloud" },
  { label: "AWS", group: "AI / Cloud" },
  { label: "Stripe", group: "AI / Cloud" },
  { label: "GitHub Actions", group: "Dev Tools" },
  { label: "Docker", group: "Dev Tools" },
  { label: "Tailwind CSS", group: "Frontend" },
];

const chartData = {
  labels: ["Frontend", "Backend", "AI / Cloud", "Dev Tools"],
  datasets: [
    {
      label: "Proficiency",
      data: [92, 88, 84, 79],
      backgroundColor: ["#00D4AA", "#32d4ff", "#8b5cf6", "#f59e0b"],
      borderRadius: 12,
      borderSkipped: false,
      barThickness: 28,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(15, 24, 41, 0.95)",
      titleColor: "#F0F4FF",
      bodyColor: "#E2E8F0",
    },
  },
  scales: {
    x: {
      ticks: { color: "#94A3B8", font: { size: 12 } },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { color: "#94A3B8", stepSize: 25, font: { size: 12 } },
      grid: { color: "rgba(148, 163, 184, 0.12)" },
    },
  },
};

const skillsSummary = [
  {
    title: "Frontend",
    description:
      "React, TypeScript, Tailwind CSS, responsive UX patterns, component-driven design.",
  },
  {
    title: "Backend",
    description: "Node.js, Supabase, REST APIs, performance tuning, secure auth flows.",
  },
  {
    title: "AI / Cloud",
    description: "OpenAI, AWS services, RAG pipelines, cloud-native architecture and deployment.",
  },
  {
    title: "Dev Tools",
    description: "CI/CD, GitHub Actions, Docker workflows, monitoring, and release automation.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0F1829] py-20 text-[#F0F4FF]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Skills</p>
          <h2 className="text-4xl font-bold text-white">
            Simplified skill visibility for recruiters.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            I keep the skill story direct: Frontend, Backend, AI / Cloud, and tooling you can trust.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-500/10 bg-[#081924] p-8 shadow-[0_25px_80px_rgba(0,212,170,0.12)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {skillPills.map((skill) => (
                <span
                  key={skill.label}
                  className="rounded-full border border-[#1E2D47] bg-[#112240] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200"
                >
                  {skill.label}
                </span>
              ))}
            </div>

            <div className="rounded-[1.75rem] bg-[#091726] p-4">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-cyan-500/10 bg-[#081924] p-8 shadow-[0_25px_80px_rgba(0,212,170,0.12)]">
            {skillsSummary.map((skill) => (
              <div key={skill.title} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
