"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Buttery smooth inertial scrolling via Lenis.
 * Disabled entirely for users who prefer reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroyed = false;
    let raf = 0;
    let lenis: import("lenis").default | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      lenis = new Lenis({ lerp: 0.11, anchors: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}

/** Gradient progress bar fixed under the top viewport edge. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-royal-600 via-royal-400 to-gold-400"
    />
  );
}

/**
 * Moves its children vertically as the block travels through the viewport.
 * speed > 0 drifts up while scrolling down (classic depth effect).
 */
export function Parallax({
  children,
  speed = 0.5,
  className,
}: {
  children: ReactNode;
  /** 0 = static, ~0.4 subtle, ~1 pronounced */
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = Math.min(Math.max(speed, -1), 1) * 90;
  const y = useTransform(scrollYProgress, [0, 1], [shift, -shift]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/**
 * Full-bleed background image inside a relative container, drifting at a
 * different rate than the scroll. Renders oversized so the movement never
 * exposes an edge, and brightens the source imagery versus flat low-opacity
 * fills — pair with a scrim gradient for text legibility.
 */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  speed = 0.35,
  zoom = true,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  speed?: number;
  zoom?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = Math.min(Math.max(speed, -1), 1) * 12;
  const y = useTransform(scrollYProgress, [0, 1], [`-${shift}%`, `${shift}%`]);

  return (
    <div ref={ref} aria-hidden="true" className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 -top-[14%] -bottom-[14%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${zoom && !reduce ? "animate-ken-burns" : ""}`}
        />
      </motion.div>
    </div>
  );
}

/** Slim full-width cinematic band with a drifting Dubai frame and one bold line. */
export function ParallaxShowcase({
  src,
  alt,
  kicker,
  line,
}: {
  src: string;
  alt: string;
  kicker: string;
  line: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <ParallaxImage
        src={src}
        alt={alt}
        speed={0.3}
        className="opacity-55"
      />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/30 to-navy-950/80" />
        <div className="bg-grain absolute inset-0" />
      </div>
      <div className="relative mx-auto flex min-h-72 w-full max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
          {kicker}
        </p>
        <p className="font-display mt-4 text-2xl leading-snug font-semibold text-mist-50 text-balance sm:text-3xl lg:text-4xl">
          {line}
        </p>
      </div>
    </section>
  );
}
