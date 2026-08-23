"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Dotted 3D globe — gold point cloud on an ink sphere, slow rotation with
 * pointer parallax. Pauses when offscreen; static under reduced motion.
 */
export default function GlobeCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return; // WebGL unavailable — hero degrades to gradients gracefully
    }

    let width = host.clientWidth || 1;
    let height = host.clientHeight || 1;
    let raf = 0;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    host.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    // Fibonacci-distributed point cloud on a sphere
    const RADIUS = 2.55;
    const COUNT = 2800;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const gold = new THREE.Color("#d9bc72");
    const slate = new THREE.Color("#42516d");
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < COUNT; i += 1) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * goldenAngle;
      positions[i * 3] = Math.cos(theta) * r * RADIUS;
      positions[i * 3 + 1] = y * RADIUS;
      positions[i * 3 + 2] = Math.sin(theta) * r * RADIUS;
      const c = Math.random() < 0.14 ? gold : slate;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    dotsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const dotsMat = new THREE.PointsMaterial({
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const globe = new THREE.Points(dotsGeo, dotsMat);
    scene.add(globe);

    // Inner sphere occludes far-side dots and reads as a solid body
    const coreGeo = new THREE.SphereGeometry(RADIUS - 0.06, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x04081f,
      transparent: true,
      opacity: 0.92,
    });
    scene.add(new THREE.Mesh(coreGeo, coreMat));

    const onPointerMove = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 0.26;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 0.16;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const ro = new ResizeObserver(() => {
      width = host.clientWidth || 1;
      height = host.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    });
    ro.observe(host);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(host);

    const TILT = 0.34;
    let t = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      t += 1;
      if (!prefersReduced) globe.rotation.y += 0.0011;
      globe.rotation.x += (TILT + pointerY - globe.rotation.x) * 0.04;
      const baseX = width >= 1024 ? 2.05 : 0;
      const baseY = width >= 1024 ? 0 : 0.55;
      globe.position.x += (baseX + pointerX - globe.position.x) * 0.04;
      globe.position.y = baseY + (prefersReduced ? 0 : Math.sin(t * 0.01) * 0.05);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      ro.disconnect();
      io.disconnect();
      dotsGeo.dispose();
      dotsMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (canvas.parentElement === host) host.removeChild(canvas);
    };
  }, []);

  return <div ref={hostRef} className="h-full w-full" aria-hidden="true" />;
}
