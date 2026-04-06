"use client"

import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

type FadeInOnScrollProps = {
  children: ReactNode
  className?: string
  /** Delay stagger index for list items (each step ~ 75ms) */
  delayIndex?: number
}

export function FadeInOnScroll({
  children,
  className,
  delayIndex = 0,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayMs = Math.min(delayIndex * 75, 450)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out will-change-[opacity,transform]",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </div>
  )
}
