'use client';

import React, { useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface AreaChartProps {
  data?: DataPoint[];
  title?: string;
  subtitle?: string;
  color?: string;
  height?: number;
}

export default function AreaChart({
  data = [
    { label: 'Sem 1', value: 8.2 },
    { label: 'Sem 2', value: 8.5 },
    { label: 'Sem 3', value: 8.4 },
    { label: 'Sem 4', value: 8.8 },
    { label: 'Sem 5', value: 9.1 },
    { label: 'Sem 6', value: 8.95 },
  ],
  title = 'SGPA Academic Progression',
  subtitle = 'Cumulative semester performance curve (10.0 scale)',
  color = '#1e3a8a',
  height = 160,
}: AreaChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const values = data.map((d) => d.value);
  const minVal = Math.min(...values) * 0.9;
  const maxVal = Math.max(...values) * 1.05;
  const range = maxVal - minVal || 1;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 300 + 20;
    const y = height - ((d.value - minVal) / range) * (height - 30) - 15;
    return { x, y, ...d };
  });

  const pathD = points.reduce(
    (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`),
    ''
  );

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div className="w-full bg-surface-bright rounded-2xl border border-outline/10 p-4 sm:p-5 shadow-parchment touch-reactive">
      <div className="flex items-center justify-between pb-3 border-b border-outline/10">
        <div>
          <h4 className="text-sm font-bold text-on-surface tracking-tight">{title}</h4>
          <p className="text-[11px] text-on-surface-variant">{subtitle}</p>
        </div>
        <span className="font-virgil text-xs font-bold text-primary px-2 py-0.5 rounded-full bg-primary/5">
          Bklit Analytics
        </span>
      </div>

      <div className="relative mt-3 w-full overflow-hidden">
        <svg
          viewBox={`0 0 340 ${height}`}
          className="w-full h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="bklitAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={color} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="20" y1="20" x2="320" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="20" y1={height / 2} x2="320" y2={height / 2} stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="20" y1={height - 20} x2="320" y2={height - 20} stroke="#e2e8f0" />

          {/* Area fill */}
          <path d={areaD} fill="url(#bklitAreaGrad)" />

          {/* Stroke path */}
          <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

          {/* Interactive Data Nodes */}
          {points.map((p, i) => (
            <g
              key={p.label}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="cursor-pointer transition-transform"
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hoveredIdx === i ? 6 : 4}
                fill={hoveredIdx === i ? '#d97706' : '#ffffff'}
                stroke={color}
                strokeWidth="2"
              />
              <text
                x={p.x}
                y={height - 4}
                textAnchor="middle"
                fontSize="9"
                fill="#64748b"
                fontWeight="600"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>

        {hoveredIdx !== null && (
          <div className="absolute top-2 right-4 px-2.5 py-1 rounded-lg bg-primary text-white text-[11px] font-bold shadow-md animate-in fade-in">
            {points[hoveredIdx].label}: {points[hoveredIdx].value.toFixed(2)} SGPA
          </div>
        )}
      </div>
    </div>
  );
}
