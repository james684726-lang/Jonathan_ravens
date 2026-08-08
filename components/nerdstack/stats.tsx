"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 2018, suffix: "", label: "Date Founded" },
  { value: 3500, suffix: "+", label: "Total Clients Served" },
  { value: 175, suffix: "M+", label: "Total Projects/Sales" },
];
function useCountUp(target: number, run: boolean, ms = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min((t - start) / ms, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(target * eased)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, run, ms])
  return n
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run)
  const display = value >= 10 ? Math.round(n) : n.toFixed(0)
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display text-[48px] font-normal leading-none tracking-[-1px] text-midnight-ink sm:text-[64px]">
        {display}
        <span className="text-core-coral">{suffix}</span>
      </span>
      <span className="text-[14px] font-light" style={{ color: "#231f23a3" }}>
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="px-4 py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1000px] grid-cols-2 gap-8 rounded-[20px] border border-border bg-lift-white p-8 sm:p-12 lg:grid-cols-4"
        style={{ boxShadow: "var(--shadow-card-soft)" }}
      >
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  )
}
