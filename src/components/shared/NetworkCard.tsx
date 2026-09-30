import type { NetworkNodeId } from "@/lib/network-catalog";

interface NetworkCardProps {
  node: {
    id: NetworkNodeId;
    name: string;
    description: string;
    cta: string;
    url: string;
  };
  currentContext: NetworkNodeId;
  index: number;
}

export function NetworkCard({ node, currentContext, index }: NetworkCardProps) {
  return (
    <a
      href={`${node.url}?utm_source=${currentContext}&utm_medium=network_card&utm_campaign=bumiversa_network`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-bumiversa-900 bg-bumiversa-900 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <div className="mb-8 flex items-start justify-between">
        <span className="font-mono text-3xl font-light tracking-tight text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
          Network Node
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent md:text-2xl">
        {node.name}
      </h3>
      <p className="mt-4 min-h-20 text-sm leading-relaxed text-white/65 md:text-base">
        {node.description}
      </p>
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent">
        <span>{node.cta}</span>
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
}
