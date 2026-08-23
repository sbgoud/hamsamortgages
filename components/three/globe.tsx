"use client";

import dynamic from "next/dynamic";

const GlobeCanvas = dynamic(() => import("./globe-canvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export function Globe() {
  return <GlobeCanvas />;
}
