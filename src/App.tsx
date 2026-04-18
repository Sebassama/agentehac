import { useState } from "react";

const sections = [
  { id: "overview", label: "Visión General", icon: "🎯" },
  { id: "hardware", label: "Tu Hardware", icon: "💻" },
  { id: "infra", label: "Infraestructura", icon: "🖥️" },
  { id: "architecture", label: "Arquitectura", icon: "🧠" },
  { id: "roadmap", label: "Hoja de Ruta", icon: "🗺️" },
  { id: "tools", label: "Stack Tecnológico", icon: "🛠️" },
  { id: "ethics", label: "Ética & Legal", icon: "⚖️" },
  { id: "publication", label: "Publicación Q1", icon: "📄" },
];

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  const colors: Record<string, string> = {
    green: "bg-emerald-900/40 text-emerald-400 border border-emerald-700",
    red: "bg-red-900/40 text-red-400 border border-red-700",
    yellow: "bg-yellow-900/40 text-yellow-400 border border-yellow-700",
    blue: "bg-blue-900/40 text-blue-400 border border-blue-700",
    purple: "bg-purple-900/40 text-purple-400 border border-purple-700",
    cyan: "bg-cyan-900/40 text-cyan-400 border border-cyan-700",
    orange: "bg-orange-900/40 text-orange-400 border border-orange-700",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
}

function SectionCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}



function PhaseCard({
  phase,
  title,
  duration,
  tasks,
  color,
}: {
  phase: number;
  title: string;
  duration: string;
  tasks: string[];
  color: string;
}) {
  const borderColors: Record<string, string> = {
    blue: "border-blue-600",
    purple: "border-purple-600",
    cyan: "border-cyan-600",
    green: "border-emerald-600",
    orange: "border-orange-600",
  };
  const textColors: Record<string, string> = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
    green: "text-emerald-400",
    orange: "text-orange-400",
  };
  return (
    <div className={`border-l-4 ${borderColors[color]} bg-gray-800/60 rounded-xl p-5 mb-4`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold font-mono ${textColors[color]}`}>FASE {phase}</span>
          <h3 className="text-white font-bold">{title}</h3>
        </div>
        <Badge color={color === "green" ? "green" : color === "blue" ? "blue" : "purple"}>{duration}</Badge>
      </div>
      <ul className="space-y-1 mt-3">
        {tasks.map((t, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className={`${textColors[color]} mt-0.5 text-xs`}>▶</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolCard({ name, role, why, badge }: { name: string; role: string; why: string; badge: string }) {
  return (
    <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white font-bold font-mono text-sm">{name}</span>
        <Badge color="cyan">{badge}</Badge>
      </div>
      <p className="text-blue-400 text-xs font-semibold mb-1">{role}</p>
      <p className="text-gray-400 text-xs">{why}</p>
    </div>
  );
}

function AlertBox({ type, children }: { type: "warning" | "info" | "danger" | "success"; children: React.ReactNode }) {
  const styles = {
    warning: "bg-yellow-900/30 border-yellow-600 text-yellow-300",
    info: "bg-blue-900/30 border-blue-600 text-blue-300",
    danger: "bg-red-900/30 border-red-600 text-red-300",
    success: "bg-emerald-900/30 border-emerald-600 text-emerald-300",
  };
  const icons = { warning: "⚠️", info: "ℹ️", danger: "🚨", success: "✅" };
  return (
    <div className={`border rounded-xl p-4 mb-4 text-sm ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

function Overview() {
  return (
    <div>
      <SectionCard title="¿Qué vamos a construir?" icon="🎯">
        <AlertBox type="info">
          Este informe es tu plan de acción completo para desarrollar un sistema de <strong>Orquestación de Agentes de IA para Pentesting Autónomo</strong> con capacidad de publicación en revistas Q1/Q2 como IEEE Transactions on Information Forensics & Security.
        </AlertBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              icon: "🤖",
              title: "Sistema Multi-Agente",
              desc: "Arquitectura PEP (Planner-Executor-Perceptor) con LLM + planificación clásica PDDL para pentesting autónomo de extremo a extremo.",
            },
            {
              icon: "📐",
              title: "Formalización POMDP",
              desc: "Modelado matemático del pentesting como Proceso de Decisión de Markov Parcialmente Observable con técnicas de Reward Shaping.",
            },
            {
              icon: "🧪",
              title: "Entorno Reproducible",
              desc: "Cyber range virtualizado en tu PC Predator con KVM/Docker, emulando redes reales para entrenamiento y validación reproducible.",
            },
          ].map((c, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="text-white font-bold mb-1">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-white font-bold mb-3">Objetivo Final del Sistema</h3>
          <div className="font-mono bg-black rounded-xl p-4 text-sm space-y-1 border border-gray-700">
            <p className="text-green-400">{"# Sistema autónomo completo"}</p>
            <p className="text-gray-300">INPUT: Descripción de red objetivo (IPs, puertos, OS)</p>
            <p className="text-gray-300">PROCESO: Agente planifica → ejecuta exploits → interpreta resultados</p>
            <p className="text-gray-300">OUTPUT: Reporte de compromiso + vector de ataque documentado</p>
            <p className="text-yellow-400">META: Publicación en IEEE TIFS / Computers & Security (Q1/Q2)</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Estado del Arte en 2025–2026" icon="📡">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-gray-400 font-semibold py-2 pr-4">Framework</th>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4">Arquitectura</th>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4">Rendimiento</th>
                <th className="text-left text-gray-400 font-semibold py-2">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { name: "HPTSA", arch: "Equipos jerárquicos LLM (XSS, SQLi, CSRF)", perf: "4.3x vs agentes monolíticos", status: "Publicado" },
                { name: "CHECKMATE", arch: "PDDL + LLM executor", perf: "+20% vs Claude Code, -50% costo", status: "2025" },
                { name: "PentAGI", arch: "4 sub-agentes Docker + pgvector", perf: "Memoria semántica vectorial", status: "Open Source" },
                { name: "NASimJax", arch: "JAX + GPU vectorizado", perf: "100x más rápido que NASim", status: "Activo" },
                { name: "PenGym", arch: "KVM + Ubuntu VMs reales", perf: "7.72 pasos vs 11.95 simulación", status: "Activo" },
              ].map((r, i) => (
                <tr key={i}>
                  <td className="py-2 pr-4 text-cyan-400 font-mono font-bold">{r.name}</td>
                  <td className="py-2 pr-4 text-gray-300">{r.arch}</td>
                  <td className="py-2 pr-4 text-emerald-400 text-xs">{r.perf}</td>
                  <td className="py-2"><Badge color="green">{r.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function Hardware() {
  return (
    <div>
      <SectionCard title="Análisis de tu PC Predator" icon="💻">
        <AlertBox type="success">
          Tu configuración es <strong>suficiente y poderosa</strong> para iniciar y completar la investigación. La RTX es el diferenciador clave para entrenamiento de RL acelerado.
        </AlertBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { comp: "RAM: 32 GB", eval: "✅ Excelente", detail: "Soporta múltiples VMs simultáneas (4–6 VMs de 4–6 GB cada una) + host OS + modelos LLM locales.", color: "green" },
            { comp: "Almacenamiento: 1 TB SSD", eval: "✅ Suficiente", detail: "Imágenes de VM ~20–40 GB c/u. Con 1 TB tendrás espacio para 10–15 VMs + datasets + snapshots.", color: "green" },
            { comp: "GPU: RTX (NVIDIA)", eval: "✅ Crítico", detail: "CUDA para entrenar modelos con PyTorch/JAX. NASimJax requiere GPU para entrenamiento vectorizado de RL.", color: "green" },
            { comp: "CPU: Predator (i7/i9 o Ryzen)", eval: "✅ OK", detail: "Suficiente para KVM/Hyper-V, múltiples contenedores Docker y ejecución de Metasploit.", color: "green" },
            { comp: "SO: Windows", eval: "⚠️ Requiere Ajuste", detail: "Windows no soporta KVM directamente. Necesitas WSL2 + Docker Desktop O dual boot con Ubuntu.", color: "yellow" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold">{item.comp}</span>
                <Badge color={item.color === "green" ? "green" : "yellow"}>{item.eval}</Badge>
              </div>
              <p className="text-gray-400 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold mb-3">Capacidad de Virtualización Estimada</h3>
        <div className="bg-black rounded-xl p-4 font-mono text-sm border border-gray-700 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">RAM total disponible para VMs:</span>
            <span className="text-emerald-400">~18–22 GB (resto para host)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">VMs simultáneas recomendadas:</span>
            <span className="text-emerald-400">4–6 VMs (2–4 GB c/u)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Escenario de red emulable:</span>
            <span className="text-emerald-400">3–5 hosts + atacante + firewall</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Entrenamiento RL (NASimJax GPU):</span>
            <span className="text-emerald-400">~40 hosts paralelos en simulación</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">LLM local (Mistral 7B / Llama 3):</span>
            <span className="text-yellow-400">Posible con 4-bit quant. (GPTQ)</span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Decisión Crítica: ¿Windows, WSL2 o Dual Boot?" icon="🔧">
        <AlertBox type="warning">
          Esta es la decisión más importante de infraestructura. Hay 3 caminos posibles, con sus pro/contras.
        </AlertBox>

        <div className="space-y-4">
          {[
            {
              opt: "OPCIÓN A (Recomendada)",
              title: "WSL2 + Docker Desktop + Kali Linux WSL",
              pros: ["Sin reinstalar Windows", "Docker Desktop nativo con soporte GPU (CUDA en WSL2)", "Kali Linux disponible en Microsoft Store", "Acceso completo a herramientas Linux desde PowerShell"],
              cons: ["Sin soporte completo de KVM (no puedes crear VMs dentro de WSL2)", "Rendimiento de red virtual limitado", "Algunos exploits de bajo nivel no funcionan en WSL"],
              badge: "green",
              label: "MEJOR INICIO",
            },
            {
              opt: "OPCIÓN B (Ideal para investigación seria)",
              title: "Dual Boot: Windows + Ubuntu 22.04 LTS",
              pros: ["KVM nativo completo en Ubuntu (PenGym compatible)", "Acceso directo a GPU con CUDA", "Entorno Linux real para herramientas de pentesting", "Reproducibilidad máxima para publicación"],
              cons: ["Requiere particionado de disco", "Debes reiniciar para cambiar de OS", "Configuración más compleja (~3–4 horas setup"],
              badge: "blue",
              label: "RECOMENDADO INVESTIGACIÓN",
            },
            {
              opt: "OPCIÓN C (Avanzado)",
              title: "Proxmox VE como hypervisor base",
              pros: ["Hypervisor tipo 1 (más eficiente)", "Gestión profesional de VMs y redes virtuales", "Soporta nesting de contenedores LXC + VMs KVM"],
              cons: ["Reemplaza Windows completamente", "Curva de aprendizaje alta", "GPU passthrough complejo"],
              badge: "purple",
              label: "FUTURO / AVANZADO",
            },
          ].map((o, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-xs font-mono">{o.opt}</span>
                <Badge color={o.badge}>{o.label}</Badge>
              </div>
              <h3 className="text-white font-bold mb-3">{o.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-emerald-400 text-xs font-bold mb-1">✅ VENTAJAS</p>
                  <ul className="space-y-1">
                    {o.pros.map((p, j) => <li key={j} className="text-gray-300 text-xs">• {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 text-xs font-bold mb-1">❌ LIMITACIONES</p>
                  <ul className="space-y-1">
                    {o.cons.map((c, j) => <li key={j} className="text-gray-300 text-xs">• {c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function Infra() {
  return (
    <div>
      <SectionCard title="Arquitectura de Infraestructura del Cyber Range" icon="🖥️">
        <AlertBox type="info">
          El "cyber range" es tu laboratorio virtual de ataque/defensa. Aquí definimos cómo configurarlo en tu PC Predator para que sea reproducible y publicable.
        </AlertBox>

        <div className="bg-black rounded-xl p-5 font-mono text-xs border border-gray-700 mb-6 overflow-x-auto">
          <p className="text-green-400 mb-2">{"# ARQUITECTURA DE RED VIRTUAL"}</p>
          <pre className="text-gray-300">{`
┌─────────────────────────────────────────────────────────┐
│                   PC PREDATOR (HOST)                     │
│                                                          │
│  ┌──────────────┐    ┌────────────────────────────────┐  │
│  │  DOCKER      │    │    RED VIRTUAL INTERNA          │  │
│  │  NETWORK     │    │    (192.168.100.0/24)           │  │
│  │              │    │                                  │  │
│  │ ┌──────────┐ │    │ ┌──────────┐  ┌──────────────┐ │  │
│  │ │ Agente   │ │◄───┤ │ Target   │  │  Firewall    │ │  │
│  │ │ IA (PEP) │ │    │ │ VM 1     │  │  pfSense VM  │ │  │
│  │ │ Python   │ │    │ │ Metaspl. │  │              │ │  │
│  │ └──────────┘ │    │ └──────────┘  └──────────────┘ │  │
│  │              │    │                                  │  │
│  │ ┌──────────┐ │    │ ┌──────────┐  ┌──────────────┐ │  │
│  │ │ LLM API  │ │    │ │ Target   │  │  IDS/IPS     │ │  │
│  │ │ (Ollama) │ │    │ │ VM 2     │  │  Snort VM    │ │  │
│  │ └──────────┘ │    │ └──────────┘  └──────────────┘ │  │
│  └──────────────┘    └────────────────────────────────┘  │
│                                                          │
│  GPU RTX: Entrenamiento RL (NASimJax/PyTorch)            │
└─────────────────────────────────────────────────────────┘
`}</pre>
        </div>

        <h3 className="text-white font-bold mb-4">Componentes del Cyber Range</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Nodo Atacante",
              icon: "⚔️",
              items: ["Kali Linux 2024 (VM o contenedor)", "Metasploit Framework", "Nmap, Nikto, SQLMap", "Python 3.11+ (agente IA)", "Ollama (LLM local)"],
              color: "red",
            },
            {
              title: "Nodos Víctimas",
              icon: "🎯",
              items: ["Metasploitable 2/3 (Ubuntu)", "DVWA (Damn Vulnerable Web App)", "VulnHub machines (pre-built)", "TryHackMe / HackTheBox VMs", "Custom Ubuntu con CVEs específicos"],
              color: "orange",
            },
            {
              title: "Infraestructura de Red",
              icon: "🌐",
              items: ["pfSense o VyOS (firewall virtual)", "Wireshark (captura de tráfico)", "VirtualBox o VMware (hypervisor)", "Docker para contenedores ligeros", "GNS3 para topologías complejas"],
              color: "blue",
            },
            {
              title: "Componentes de Análisis",
              icon: "📊",
              items: ["PostgreSQL + pgvector (memoria semántica)", "Elasticsearch + Kibana (logs)", "MLflow (tracking experimentos RL)", "Jupyter Notebooks (análisis)", "Git + DVC (versionado de datos)"],
              color: "purple",
            },
          ].map((c, i) => (
            <div key={i} className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>{c.icon}</span>{c.title}
              </h4>
              <ul className="space-y-1">
                {c.items.map((item, j) => (
                  <li key={j} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-cyan-400 text-xs">›</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Setup Paso a Paso (Windows)" icon="⚙️">
        <div className="space-y-3">
          {[
            { step: "01", title: "Activar WSL2 + Ubuntu 22.04", cmd: "wsl --install -d Ubuntu-22.04", note: "En PowerShell como Administrador. Reinicia después." },
            { step: "02", title: "Instalar Docker Desktop con soporte GPU", cmd: "Descargar Docker Desktop → Habilitar WSL2 backend + NVIDIA Container Toolkit", note: "Verifica con: docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi" },
            { step: "03", title: "Instalar Kali Linux (WSL)", cmd: "wsl --install -d kali-linux", note: "Luego: sudo apt install kali-linux-headless" },
            { step: "04", title: "Configurar VirtualBox / VMware", cmd: "Descargar VirtualBox 7.x + Extension Pack", note: "Para VMs de alta fidelidad (Metasploitable, pfSense)" },
            { step: "05", title: "Instalar Ollama (LLM local)", cmd: "curl -fsSL https://ollama.com/install.sh | sh && ollama pull llama3", note: "Con tu RAM puedes correr Llama3 8B o Mistral 7B sin problemas" },
            { step: "06", title: "Setup Python + CUDA", cmd: "pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121", note: "Verifica RTX: python -c \"import torch; print(torch.cuda.is_available())\"" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-800/60 rounded-xl p-4 border border-gray-700">
              <div className="flex items-start gap-3">
                <span className="bg-cyan-600 text-white text-xs font-mono font-bold px-2 py-1 rounded min-w-[36px] text-center">{s.step}</span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                  <code className="text-emerald-400 text-xs block bg-black px-3 py-1.5 rounded mb-1 font-mono">{s.cmd}</code>
                  <p className="text-gray-400 text-xs">{s.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function Architecture() {
  return (
    <div>
      <SectionCard title="Arquitectura del Sistema Multi-Agente PEP" icon="🧠">
        <AlertBox type="info">
          Implementaremos el paradigma <strong>Planner-Executor-Perceptor (PEP)</strong> combinado con un planificador PDDL externo, inspirado en CHECKMATE y HPTSA. Esta arquitectura es la más publicable en 2025–2026.
        </AlertBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              name: "🧩 PLANIFICADOR",
              subtitle: "Planner",
              tech: "PDDL + LLM (Llama3 / GPT-4o)",
              desc: "Define la estrategia de ataque de alto nivel. Convierte la descripción de la red en un grafo de ataque PDDL. Algoritmo determinista encuentra la ruta óptima.",
              inputs: ["Descripción de red", "Vulnerabilidades conocidas", "Objetivo (root access)"],
              outputs: ["Plan de ataque secuencial", "Predicados PDDL"],
              color: "purple",
            },
            {
              name: "⚡ EJECUTOR",
              subtitle: "Executor",
              tech: "LLM Agent + Metasploit API",
              desc: "Recibe instrucciones del planificador y las traduce en comandos reales. Usa módulos predefinidos de Metasploit para estabilidad. Tiene acceso a sandbox Docker.",
              inputs: ["Paso del plan", "Estado actual", "Herramientas disponibles"],
              outputs: ["Comandos ejecutados", "Resultados brutos"],
              color: "blue",
            },
            {
              name: "👁️ PERCEPTOR",
              subtitle: "Perceptor",
              tech: "NLP + Regex Parser + pgvector",
              desc: "Interpreta resultados heterogéneos de herramientas (Nmap XML, HTTP responses, Metasploit output). Actualiza el estado de la red como predicados lógicos.",
              inputs: ["Output de Nmap", "Logs de exploit", "Respuestas HTTP"],
              outputs: ["Estado actualizado", "Observaciones (POMDP)", "Memoria vectorial"],
              color: "cyan",
            },
          ].map((a, i) => (
            <div key={i} className="bg-gray-800/70 border border-gray-700 rounded-xl p-5">
              <div className="text-center mb-3">
                <h3 className="text-white font-bold text-lg">{a.name}</h3>
                <p className="text-gray-400 text-xs font-mono">{a.subtitle}</p>
                <Badge color={a.color as any}>{a.tech}</Badge>
              </div>
              <p className="text-gray-300 text-sm mb-3">{a.desc}</p>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-500 text-xs font-bold mb-1">ENTRADAS</p>
                  {a.inputs.map((inp, j) => <p key={j} className="text-blue-300 text-xs">← {inp}</p>)}
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold mb-1">SALIDAS</p>
                  {a.outputs.map((out, j) => <p key={j} className="text-emerald-300 text-xs">→ {out}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold mb-3">Formalización POMDP del Sistema</h3>
        <div className="bg-black rounded-xl p-5 border border-gray-700 font-mono text-sm overflow-x-auto">
          <p className="text-purple-400 mb-2">{"# DEFINICIÓN MATEMÁTICA DEL POMDP"}</p>
          <div className="space-y-2 text-gray-300">
            <p><span className="text-yellow-400">S</span> = {"{(host_status, service_map, access_level, vuln_set)}"} <span className="text-gray-600">// Estado del sistema</span></p>
            <p><span className="text-yellow-400">A</span> = {"{scan, exploit, escalate, pivot, exfil}"} <span className="text-gray-600">// Acciones disponibles</span></p>
            <p><span className="text-yellow-400">T</span> = P(s'|s,a) <span className="text-gray-600">// Transición estocástica (éxito/fallo de exploit)</span></p>
            <p><span className="text-yellow-400">R</span> = +100(host_comprometido) -1(por_paso) -50(detectado) <span className="text-gray-600">// Reward Shaping</span></p>
            <p><span className="text-yellow-400">Ω</span> = {"{nmap_result, service_banner, exploit_output}"} <span className="text-gray-600">// Observaciones</span></p>
            <p><span className="text-yellow-400">O</span> = P(o|s,a) <span className="text-gray-600">// Función de observación</span></p>
            <p><span className="text-yellow-400">γ</span> = 0.95 <span className="text-gray-600">// Factor de descuento</span></p>
            <p className="mt-3 text-emerald-400">2SAS: a = (host_selection, action_selection) <span className="text-gray-600">// Descomposición 2 etapas</span></p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Algoritmo de Entrenamiento RL" icon="📈">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
            <h4 className="text-white font-bold mb-2">Fase 1: Simulación (NASimJax)</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• PPO o DDQN sobre redes aleatorias</li>
              <li>• Domain Randomization (topologías random)</li>
              <li>• GPU-accelerated: 1000+ episodios/seg</li>
              <li>• Curriculum learning: 3→5→10→40 hosts</li>
              <li>• Reward shaping con APO</li>
            </ul>
          </div>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
            <h4 className="text-white font-bold mb-2">Fase 2: Emulación (PenGym/VMs)</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Fine-tuning de política aprendida</li>
              <li>• Exploits reales sobre Metasploitable</li>
              <li>• Evaluación con/sin IDS (Snort)</li>
              <li>• Métricas: ESR, AST, costo/éxito</li>
              <li>• Comparación vs. pentesters manuales</li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

function Roadmap() {
  return (
    <div>
      <SectionCard title="Hoja de Ruta de 12 Meses" icon="🗺️">
        <AlertBox type="info">
          Plan realista para un investigador solo o en equipo pequeño, con tu hardware actual. Objetivo: paper enviado a IEEE TIFS o Computers & Security al final del mes 10.
        </AlertBox>

        <PhaseCard
          phase={1}
          title="Setup & Fundamentos"
          duration="Mes 1–2"
          color="blue"
          tasks={[
            "Configurar WSL2 + Docker + Kali en Windows (semana 1)",
            "Instalar y verificar CUDA/PyTorch con tu RTX",
            "Desplegar Metasploitable 2/3 en VirtualBox",
            "Estudiar e implementar NASim básico en Python",
            "Familiarizarse con Metasploit Framework RPC API",
            "Setup PostgreSQL + pgvector para memoria semántica",
            "Configurar Ollama con Llama3 8B o Mistral 7B",
          ]}
        />

        <PhaseCard
          phase={2}
          title="Implementación del Perceptor + Entorno"
          duration="Mes 2–3"
          color="cyan"
          tasks={[
            "Construir el módulo Perceptor (parser de outputs Nmap/Metasploit)",
            "Implementar representación POMDP del estado de red",
            "Integrar NASimJax para entrenamiento paralelo en GPU",
            "Crear dataset de observaciones etiquetadas (scan → predicados)",
            "Validar el ciclo percepción→estado en red emulada real",
            "Documentar el formato de entrada/salida del Perceptor",
          ]}
        />

        <PhaseCard
          phase={3}
          title="Implementación del Planificador"
          duration="Mes 3–5"
          color="purple"
          tasks={[
            "Implementar módulo PDDL: domain.pddl + problem.pddl generator",
            "Integrar solver PDDL (Fast Downward o FF planner)",
            "Conectar LLM (Llama3/GPT-4o) para traducir descripción → PDDL",
            "Diseñar el grafo de ataque con acciones discretas",
            "Implementar Descomposición de Acciones 2 Etapas (2SAS)",
            "Validar planificador en NASim: redes de 3, 5, 10 hosts",
          ]}
        />

        <PhaseCard
          phase={4}
          title="Entrenamiento RL + Ejecutor"
          duration="Mes 5–7"
          color="orange"
          tasks={[
            "Entrenar agente PPO con NASimJax en GPU (100x speedup)",
            "Implementar Domain Randomization con 1000+ topologías",
            "Construir módulo Ejecutor con acciones Metasploit predefinidas",
            "Integrar los 3 módulos (PEP) en pipeline completo",
            "Primer end-to-end: agente ataca Metasploitable automáticamente",
            "Implementar Reward Shaping para recompensas esparcidas",
            "Curriculum learning: escalar de 3 a 10 hosts",
          ]}
        />

        <PhaseCard
          phase={5}
          title="Evaluación & Benchmarking"
          duration="Mes 7–9"
          color="green"
          tasks={[
            "Evaluar en PenGym (VMs reales Ubuntu 20.04)",
            "Benchmarks: ESR, AST, Costo/Éxito, Detección IDS",
            "Análisis de ablación: sistema sin planificador, sin perceptor",
            "Comparar contra herramientas clásicas (Nessus, OpenVAS)",
            "Test de generalización zero-shot en redes no vistas",
            "Evaluar Moving Target Defense (MTD) como adversario",
            "Documentar todos los logs, pesos del modelo, configuraciones",
          ]}
        />

        <PhaseCard
          phase={6}
          title="Redacción & Submission"
          duration="Mes 9–12"
          color="green"
          tasks={[
            "Redactar paper en formato IEEE (LaTeX + BibTeX)",
            "Preparar artefacto reproducible (GitHub + Docker Compose)",
            "Análisis ético (EU AI Act compliance statement)",
            "Submission a IEEE TIFS o Computers & Security (Q1)",
            "Presentar en conferencia paralela (CCS, NDSS, IEEE S&P)",
            "Responder revisiones y resubmit (iteraciones típicas: 2–3)",
          ]}
        />
      </SectionCard>

      <SectionCard title="Métricas de Éxito por Fase" icon="📊">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-gray-400 py-2 pr-4">Métrica</th>
                <th className="text-left text-gray-400 py-2 pr-4">Descripción</th>
                <th className="text-left text-gray-400 py-2">Umbral Publicable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { metric: "ESR (Exploit Success Rate)", desc: "% hosts comprometidos exitosamente", threshold: "> 70% en redes de 5 hosts" },
                { metric: "AST (Avg Steps per Task)", desc: "Eficiencia de la ruta de ataque", threshold: "< 10 pasos (vs 11.95 baseline)" },
                { metric: "Zero-Shot Generalization", desc: "ESR en redes no vistas durante entrenamiento", threshold: "> 50% en topologías nuevas" },
                { metric: "Costo por Éxito (LLM)", desc: "Tokens/USD por ataque completado", threshold: "< $2.0 (comparable a HPTSA)" },
                { metric: "Detección IDS", desc: "Tasa de evasión ante Snort/Suricata", threshold: "Reportar, no optimizar (ético)" },
                { metric: "Ablation Study", desc: "Degradación sin cada componente PEP", threshold: "Δ > 15% por componente" },
              ].map((r, i) => (
                <tr key={i}>
                  <td className="py-2 pr-4 text-cyan-400 font-mono text-xs font-bold">{r.metric}</td>
                  <td className="py-2 pr-4 text-gray-300">{r.desc}</td>
                  <td className="py-2 text-emerald-400 text-xs">{r.threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function Tools() {
  return (
    <div>
      <SectionCard title="Stack Tecnológico Completo" icon="🛠️">
        <div className="space-y-6">
          {[
            {
              category: "🤖 IA & Machine Learning",
              tools: [
                { name: "PyTorch 2.x + CUDA", role: "Framework RL", why: "Soporte nativo RTX, estable para PPO/DQN", badge: "Core" },
                { name: "JAX + NASimJax", role: "Simulación GPU", why: "Entrenamiento vectorizado 100x más rápido", badge: "Core" },
                { name: "Stable-Baselines3", role: "Algoritmos RL", why: "PPO, DQN, A2C listos para usar", badge: "Core" },
                { name: "Ollama + Llama3 8B", role: "LLM Local", why: "Sin costo de API, privado, modificable", badge: "Local" },
                { name: "LangChain / LangGraph", role: "Orquestación LLM", why: "Gestión de agentes, memoria, herramientas", badge: "Core" },
              ],
            },
            {
              category: "🔐 Pentesting & Seguridad",
              tools: [
                { name: "Metasploit Framework", role: "Motor de exploits", why: "7000+ módulos, API RPC para automatización", badge: "Core" },
                { name: "Nmap / python-nmap", role: "Reconocimiento", why: "Escaneo de red, detección OS/servicios", badge: "Core" },
                { name: "Nikto / SQLMap", role: "Web vulns", why: "Escaneo web, inyección SQL automática", badge: "Core" },
                { name: "Metasploitable 3", role: "Target VM", why: "Más CVEs que v2, Ubuntu 14.04 configurable", badge: "VM" },
                { name: "Fast Downward", role: "Solver PDDL", why: "Planificador clásico determinista, open source", badge: "Planner" },
              ],
            },
            {
              category: "🗄️ Datos & Persistencia",
              tools: [
                { name: "PostgreSQL + pgvector", role: "Memoria semántica", why: "Almacena embeddings de observaciones (como PentAGI)", badge: "Core" },
                { name: "MLflow", role: "Tracking ML", why: "Registra experimentos, métricas, modelos", badge: "Research" },
                { name: "DVC + Git", role: "Versionado datos", why: "Reproducibilidad de datasets y modelos", badge: "Research" },
                { name: "Elasticsearch + Kibana", role: "Logs del sistema", why: "Visualización de eventos del cyber range", badge: "Análisis" },
              ],
            },
            {
              category: "🖥️ Infraestructura & Virtualización",
              tools: [
                { name: "VirtualBox 7 / VMware", role: "Hypervisor tipo 2", why: "Compatible con Windows, VMs de alta fidelidad", badge: "Infra" },
                { name: "Docker + Docker Compose", role: "Contenedores", why: "Agente IA, bases de datos, servicios ligeros", badge: "Infra" },
                { name: "Kali Linux (WSL/VM)", role: "OS atacante", why: "Todas las herramientas pentesting pre-instaladas", badge: "Infra" },
                { name: "Wireshark / tshark", role: "Captura de tráfico", why: "Análisis de comunicaciones para papers", badge: "Análisis" },
              ],
            },
          ].map((cat, i) => (
            <div key={i}>
              <h3 className="text-white font-bold mb-3">{cat.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.tools.map((t, j) => <ToolCard key={j} {...t} />)}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function Ethics() {
  return (
    <div>
      <SectionCard title="Marco Ético y Legal" icon="⚖️">
        <AlertBox type="danger">
          El desarrollo de agentes de ataque autónomo conlleva responsabilidades legales y éticas SERIAS. Este marco no es opcional — es OBLIGATORIO para publicar en Q1.
        </AlertBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              title: "✅ LO QUE PUEDES HACER",
              items: [
                "Atacar VMs en tu propia red local (cyber range)",
                "Usar Metasploitable y otras VMs diseñadas para ser atacadas",
                "Participar en CTFs (Capture The Flag) con autorización",
                "Usar entornos como HackTheBox o TryHackMe (tienen TOS específicos)",
                "Publicar resultados de evaluación en entornos controlados",
              ],
              color: "green",
            },
            {
              title: "🚫 LO QUE NUNCA DEBES HACER",
              items: [
                "Ejecutar el agente contra redes sin autorización explícita",
                "Usar exploits de día cero (0-day) fuera del laboratorio",
                "Publicar el modelo entrenado completo sin análisis de riesgo",
                "Almacenar datos de redes reales sin consentimiento",
                "Ignorar el 'Responsible Disclosure' si encuentras CVEs reales",
              ],
              color: "red",
            },
          ].map((c, i) => (
            <div key={i} className={`bg-gray-800/60 border ${c.color === "green" ? "border-emerald-700" : "border-red-700"} rounded-xl p-5`}>
              <h3 className="text-white font-bold mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((item, j) => (
                  <li key={j} className={`text-sm ${c.color === "green" ? "text-emerald-300" : "text-red-300"}`}>
                    {c.color === "green" ? "✓" : "✗"} {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold mb-3">Requisitos Éticos para Publicación IEEE 2025</h3>
        <div className="space-y-3">
          {[
            { req: "EU AI Act Compliance", desc: "Clasificar tu sistema como 'alto riesgo' si aplica a infraestructura crítica. Documentar medidas de mitigación." },
            { req: "Stakeholder Ethics Analysis", desc: "Identificar todos los stakeholders (investigadores, defensores, atacantes potenciales) y analizar el impacto de tu investigación." },
            { req: "Responsible Release Policy", desc: "Definir qué publicas: ¿código completo, solo arquitectura, o modelo con capacidades limitadas?" },
            { req: "Dual-Use Analysis", desc: "Explicar cómo las técnicas de ofensiva sirven a la defensa. Este es el argumento principal ante revisores." },
            { req: "IRB / Comité de Ética", desc: "Si tu universidad tiene IRB, obtener aprobación antes de someter el paper." },
          ].map((r, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge color="purple">{r.req}</Badge>
              </div>
              <p className="text-gray-300 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function Publication() {
  return (
    <div>
      <SectionCard title="Estrategia de Publicación Q1/Q2" icon="📄">
        <AlertBox type="success">
          Con la arquitectura PEP + POMDP + evaluación reproducible, tienes los elementos necesarios para apuntar a <strong>IEEE TIFS (Q1, IF ~7.2)</strong> o <strong>Computers & Security (Q1, IF ~5.6)</strong>.
        </AlertBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { journal: "IEEE Transactions on Information Forensics & Security", rank: "Q1", if: "7.2", focus: "IA para seguridad, detección/evasión, pentesting automatizado", deadline: "Rolling (revisión continua)", diff: "Alta" },
            { journal: "Computers & Security", rank: "Q1", if: "5.6", focus: "Sistemas de seguridad, análisis de vulnerabilidades, automatización", deadline: "Rolling", diff: "Media-Alta" },
            { journal: "IEEE Security & Privacy", rank: "Q1", if: "4.2", focus: "Aspectos prácticos de seguridad, privacidad, sistemas", deadline: "Rolling", diff: "Media" },
            { journal: "Journal of Information Security and Applications", rank: "Q2", if: "3.8", focus: "Aplicaciones de seguridad, nuevos enfoques", deadline: "Rolling", diff: "Media" },
          ].map((j, i) => (
            <div key={i} className="bg-gray-800/70 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge color={j.rank === "Q1" ? "green" : "blue"}>{j.rank}</Badge>
                <span className="text-yellow-400 font-mono text-xs">IF: {j.if}</span>
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{j.journal}</h4>
              <p className="text-gray-400 text-xs mb-1"><span className="text-gray-500">Foco:</span> {j.focus}</p>
              <p className="text-gray-400 text-xs mb-1"><span className="text-gray-500">Deadline:</span> {j.deadline}</p>
              <p className="text-gray-400 text-xs"><span className="text-gray-500">Dificultad:</span> <span className={j.diff === "Alta" ? "text-red-400" : "text-yellow-400"}>{j.diff}</span></p>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold mb-3">Estructura del Paper (IEEE TIFS)</h3>
        <div className="bg-black rounded-xl p-4 border border-gray-700 font-mono text-xs space-y-1 text-gray-300">
          <p className="text-cyan-400">SECCIÓN 1: Introduction (2 pág)</p>
          <p>→ Problema, motivación, contribuciones listadas explícitamente</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 2: Background & Related Work (3 pág)</p>
          <p>→ POMDP en pentesting, agentes LLM, comparación con CHECKMATE/HPTSA</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 3: System Design / Threat Model (4 pág)</p>
          <p>→ Definición formal POMDP, arquitectura PEP, algoritmos</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 4: Implementation (2 pág)</p>
          <p>→ Stack tecnológico, cyber range, reproducibilidad</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 5: Evaluation (5 pág)</p>
          <p>→ ESR, AST, ablación, generalización zero-shot, vs. baseline</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 6: Ethics & Responsible Disclosure (1 pág)</p>
          <p>→ EU AI Act, dual-use, responsible release policy</p>
          <p className="text-cyan-400 mt-2">SECCIÓN 7: Conclusion (1 pág)</p>
          <p>→ Contribuciones, limitaciones, trabajo futuro</p>
        </div>

        <h3 className="text-white font-bold mb-3 mt-6">Checklist de Artefacto Reproducible</h3>
        <div className="space-y-2">
          {[
            { item: "Código fuente del agente PEP en GitHub público", done: true },
            { item: "Docker Compose del cyber range completo", done: true },
            { item: "Pesos del modelo RL entrenado (checkpoint)", done: true },
            { item: "Logs de entrenamiento completos (MLflow)", done: true },
            { item: "Script de evaluación automatizado (reproduce Tabla 1)", done: true },
            { item: "Descripción exacta de las VMs del cyber range (Vagrantfile)", done: true },
            { item: "Dataset de observaciones etiquetadas (Nmap → predicados)", done: false },
            { item: "Video de demo del agente en acción", done: false },
          ].map((c, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${c.done ? "border-emerald-800 bg-emerald-900/20" : "border-gray-700 bg-gray-800/40"}`}>
              <span className={c.done ? "text-emerald-400" : "text-gray-600"}>{c.done ? "☑" : "☐"}</span>
              <span className={`text-sm ${c.done ? "text-emerald-300" : "text-gray-400"}`}>{c.item}</span>
              {c.done && <Badge color="green">Incluir</Badge>}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Novedad Científica: ¿Qué te diferencia?" icon="💡">
        <AlertBox type="info">
          Los revisores de Q1 buscan contribuciones NOVEDOSAS y VERIFICABLES. Aquí están los ángulos de diferenciación que hacen tu paper único.
        </AlertBox>
        <div className="space-y-3">
          {[
            { angle: "Reproducibilidad Total", desc: "A diferencia del 86% de papers que no comparten código, tu artefacto Docker Compose permite replicar exactamente tus resultados. Esto es argumento de venta directo." },
            { angle: "2SAS en POMDP Real", desc: "La Descomposición de Acciones en 2 Etapas aplicada a un entorno de emulación real (no simulado) es novedad frente a trabajos que solo usan NASim abstracto." },
            { angle: "Perceptor Semántico con pgvector", desc: "El uso de memoria vectorial para que el agente 'recuerde' observaciones anteriores de la red es una contribución nueva que mejora la coherencia en sesiones largas." },
            { angle: "Evaluación Multi-dimensional", desc: "Combinar ESR + AST + costo LLM + evasión IDS + zero-shot generalization en un solo paper supera el análisis unidimensional de trabajos previos." },
          ].map((a, i) => (
            <div key={i} className="bg-gray-800/60 border-l-4 border-purple-600 rounded-r-xl p-4">
              <p className="text-purple-400 font-bold text-sm mb-1">🔬 {a.angle}</p>
              <p className="text-gray-300 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

const sectionComponents: Record<string, () => React.ReactElement> = {
  overview: Overview,
  hardware: Hardware,
  infra: Infra,
  architecture: Architecture,
  roadmap: Roadmap,
  tools: Tools,
  ethics: Ethics,
  publication: Publication,
};

export default function App() {
  const [active, setActive] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const ActiveSection = sectionComponents[active];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-sm">🤖</div>
            <div>
              <h1 className="text-white font-bold text-sm leading-tight">PentAI Research Framework</h1>
              <p className="text-gray-400 text-xs">Orquestación de Agentes IA para Pentesting Autónomo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge color="green">Q1 Target</Badge>
            <Badge color="purple">IEEE TIFS</Badge>
            <button className="md:hidden text-gray-400 ml-2" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <div className={`${menuOpen ? "block" : "hidden"} md:block w-full md:w-56 flex-shrink-0`}>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-3 sticky top-20">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3 px-2">Secciones</p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setActive(s.id); setMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    active === s.id
                      ? "bg-cyan-600/20 text-cyan-400 border border-cyan-700"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <span>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 p-3 bg-gray-800/60 rounded-xl border border-gray-700">
              <p className="text-gray-400 text-xs font-bold mb-2">TU HARDWARE</p>
              <div className="space-y-1">
                <p className="text-emerald-400 text-xs">✅ 32 GB RAM</p>
                <p className="text-emerald-400 text-xs">✅ 1 TB SSD</p>
                <p className="text-emerald-400 text-xs">✅ RTX GPU</p>
                <p className="text-yellow-400 text-xs">⚠️ Windows → WSL2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <ActiveSection />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">PentAI Research Framework — Plan de Investigación 2025–2026</p>
          <div className="flex gap-2">
            <Badge color="blue">POMDP</Badge>
            <Badge color="purple">PEP Architecture</Badge>
            <Badge color="cyan">NASimJax</Badge>
            <Badge color="green">Reproducible</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
