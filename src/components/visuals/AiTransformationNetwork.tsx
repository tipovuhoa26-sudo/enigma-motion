'use client';

import React, { useState } from 'react';

interface NetworkNode {
  id: string;
  name: string;
  subtitle: string;
  angle: number; // in degrees
  distance: number; // from center
  category: 'core' | 'strategy' | 'execution' | 'governance';
  tag: string;
  metric: string;
}

const NODES: NetworkNode[] = [
  { id: 'strategy', name: 'Chiến Lược', subtitle: 'Strategy & ROI', angle: -90, distance: 185, category: 'strategy', tag: 'Cửa ải Gate 1-4', metric: 'P&L Direct' },
  { id: 'data', name: 'Dữ Liệu Lõi', subtitle: 'Data Architecture', angle: -45, distance: 195, category: 'execution', tag: 'Vector DB & Mesh', metric: 'Clean Data' },
  { id: 'people', name: 'Con Người', subtitle: 'People & Culture', angle: 0, distance: 185, category: 'strategy', tag: 'Làm chủ công cụ', metric: '70% Hiệu quả' },
  { id: 'process', name: 'Quy Trình', subtitle: 'Process & SOP', angle: 45, distance: 195, category: 'execution', tag: 'Chuẩn hóa luồng', metric: '100% Đồng bộ' },
  { id: 'agents', name: 'Multi-Agents', subtitle: 'Autonomous Agents', angle: 90, distance: 185, category: 'execution', tag: 'Swarm Execution', metric: 'Real-time' },
  { id: 'automation', name: 'Tự Động Hóa', subtitle: 'Automation & API', angle: 135, distance: 195, category: 'execution', tag: 'n8n & Pipelines', metric: '3d ➔ 2h' },
  { id: 'knowledge', name: 'Tri Thức', subtitle: 'Knowledge Base', angle: 180, distance: 185, category: 'strategy', tag: 'RAG & Runbook', metric: 'Single Truth' },
  { id: 'governance', name: 'Quản Trị', subtitle: 'Security & Safety', angle: 225, distance: 195, category: 'governance', tag: 'NDA & On-premise', metric: 'Zero Leak' },
];

export function AiTransformationNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const cx = 270;
  const cy = 270;

  return (
    <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center select-none font-sans">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial from-purple-500/[0.04] via-transparent to-transparent rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          {/* 5 Primitives: Dot Grid Pattern */}
          <pattern id="network-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E8E8E8" />
          </pattern>

          {/* Pulse Glow for Center */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>

          {/* Core Gradient */}
          <linearGradient id="core-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E1A24" />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>

          {/* Active Line Gradient */}
          <linearGradient id="active-line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6B21A8" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>

        {/* Primitive 1: Background Subtle Coordinate Grid */}
        <rect x="20" y="20" width="500" height="500" rx="20" fill="url(#network-dots)" opacity="0.6" />

        {/* Primitive 2: Concentric Orbital Circles */}
        <circle cx={cx} cy={cy} r="120" stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx={cx} cy={cy} r="190" stroke="#E2E0E8" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r="250" stroke="#F0EFEA" strokeWidth="0.8" />

        {/* Center Aura */}
        <circle cx={cx} cy={cy} r="84" fill="url(#center-glow)" />

        {/* Primitive 3 & 4: Connecting Lines & Data Rays from Center to Nodes */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);
          const isNodeActive = activeNode === node.id;

          return (
            <g key={`line-${node.id}`}>
              {/* Static Hairline Connector */}
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={isNodeActive ? 'url(#active-line-grad)' : '#E5E3DC'}
                strokeWidth={isNodeActive ? 2 : 1}
                strokeDasharray={isNodeActive ? 'none' : '4 3'}
                className="transition-colors duration-300"
              />

              {/* Data Flow Pulse Traveling Particle */}
              <circle
                cx={cx + (node.distance * 0.55) * Math.cos(rad)}
                cy={cy + (node.distance * 0.55) * Math.sin(rad)}
                r={isNodeActive ? 3.5 : 2}
                fill={isNodeActive ? '#F97316' : '#6B21A8'}
                className="animate-pulse"
              />
            </g>
          );
        })}

        {/* Peripheral Connecting Web Lines (Between adjacent nodes) */}
        {NODES.map((node, i) => {
          const nextNode = NODES[(i + 1) % NODES.length];
          const rad1 = (node.angle * Math.PI) / 180;
          const rad2 = (nextNode.angle * Math.PI) / 180;
          const x1 = cx + node.distance * Math.cos(rad1);
          const y1 = cy + node.distance * Math.sin(rad1);
          const x2 = cx + nextNode.distance * Math.cos(rad2);
          const y2 = cy + nextNode.distance * Math.sin(rad2);

          return (
            <line
              key={`web-${node.id}-${nextNode.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#EAE8E2"
              strokeWidth="0.8"
              opacity="0.8"
            />
          );
        })}

        {/* 8 Satellite Nodes */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);
          const isNodeActive = activeNode === node.id;

          return (
            <g
              key={node.id}
              transform={`translate(${x}, ${y})`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer group"
            >
              {/* Outer Hover Ring */}
              <circle
                cx="0"
                cy="0"
                r={isNodeActive ? 28 : 22}
                fill="#FFFFFF"
                stroke={isNodeActive ? '#6B21A8' : '#E8E8E8'}
                strokeWidth={isNodeActive ? 2 : 1}
                filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))"
                className="transition-all duration-300"
              />

              {/* Inner Node Core */}
              <circle
                cx="0"
                cy="0"
                r={isNodeActive ? 7 : 5}
                fill={isNodeActive ? '#F97316' : '#6B21A8'}
                className="transition-all duration-300"
              />

              {/* Node Label Card (Floating) */}
              <g
                transform={`translate(${x > cx ? 28 : -28}, ${y > cy ? 12 : -12})`}
                className="transition-transform duration-200"
              >
                <rect
                  x={x > cx ? 0 : -100}
                  y="-12"
                  width="100"
                  height="26"
                  rx="6"
                  fill={isNodeActive ? '#FAF8FC' : '#FFFFFF'}
                  stroke={isNodeActive ? '#6B21A8' : '#E8E8E8'}
                  strokeWidth={isNodeActive ? 1 : 0.8}
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.02))"
                />
                <text
                  x={x > cx ? 8 : -92}
                  y="4"
                  fill={isNodeActive ? '#6B21A8' : '#111111'}
                  fontSize="9.5"
                  fontFamily="system-ui, sans-serif"
                  fontWeight={isNodeActive ? '700' : '600'}
                >
                  {node.name}
                </text>
              </g>
            </g>
          );
        })}

        {/* Central Core: SUNEXT AI CORE */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
          {/* Animated Halo */}
          <circle cx="0" cy="0" r="54" fill="none" stroke="#6B21A8" strokeWidth="1" strokeDasharray="6 4" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Core Body */}
          <circle cx="0" cy="0" r="44" fill="url(#core-grad)" filter="drop-shadow(0 8px 24px rgba(107,33,168,0.20))" />
          <circle cx="0" cy="0" r="44" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.4" />

          {/* Central Logo Symbol */}
          <g transform="translate(-10, -22)">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FAF8FC]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" stroke="#FAF8FC" />
              <path d="M7.5 7.5L16.5 11.5V20.5" stroke="#F97316" />
            </svg>
          </g>

          <text x="0" y="8" fill="#FFFFFF" fontSize="10.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
            SUNEXT AI
          </text>
          <text x="0" y="21" fill="#D8B4FE" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.05em">
            TRANSFORMATION
          </text>
        </g>
      </svg>

      {/* Floating Bottom Telemetry Pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 border border-[#E8E8E8] shadow-sm flex items-center gap-2 text-xs font-medium text-[#111111] whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
        <span className="font-semibold text-[#6B21A8]">AI Network:</span>
        <span className="text-[#626262]">8 Trụ Cột Nghiệp Vụ · 40+ Dự Án</span>
      </div>
    </div>
  );
}
