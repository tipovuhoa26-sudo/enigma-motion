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

          {/* Sun Solar Glow */}
          <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#FB923C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>

          {/* Sun Core Radial Gradient */}
          <radialGradient id="sun-core-grad" cx="38%" cy="36%" r="64%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="25%" stopColor="#FB923C" />
            <stop offset="70%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Sun Rim Highlight */}
          <linearGradient id="sun-rim-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.25" />
          </linearGradient>

          {/* Active Line Gradient */}
          <linearGradient id="active-line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#6B21A8" />
          </linearGradient>
        </defs>

        {/* Primitive 1: Background Subtle Coordinate Grid */}
        <rect x="20" y="20" width="500" height="500" rx="20" fill="url(#network-dots)" opacity="0.6" />

        {/* Primitive 2: Concentric Orbital Circles */}
        <circle cx={cx} cy={cy} r="120" stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx={cx} cy={cy} r="190" stroke="#E2E0E8" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r="250" stroke="#F0EFEA" strokeWidth="0.8" />

        {/* Center Aura */}
        <circle cx={cx} cy={cy} r="96" fill="url(#sun-glow)" />

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

        {/* Central Core: MẶT TRỜI SUNEXT (Technological Sun Center) */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer group">
          {/* Rotating Solar Corona Rings */}
          <circle cx="0" cy="0" r="58" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="3 7" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="40s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" r="48" fill="none" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360"
              to="0"
              dur="28s"
              repeatCount="indefinite"
            />
          </circle>

          {/* 16 Radiant Solar Rays (Tia Nắng Mặt Trời) */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => {
            const isMajor = idx % 2 === 0;
            const innerR = 38;
            const outerR = isMajor ? 52 : 45;
            const rad = (angle * Math.PI) / 180;
            const x1 = innerR * Math.cos(rad);
            const y1 = innerR * Math.sin(rad);
            const x2 = outerR * Math.cos(rad);
            const y2 = outerR * Math.sin(rad);

            return (
              <line
                key={`solar-ray-${angle}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isMajor ? '#F97316' : '#FB923C'}
                strokeWidth={isMajor ? 2 : 1.2}
                strokeLinecap="round"
                opacity={isMajor ? 0.85 : 0.55}
              />
            );
          })}

          {/* Sun Disc Core (Mặt Trời Chính) */}
          <circle
            cx="0"
            cy="0"
            r="36"
            fill="url(#sun-core-grad)"
            filter="drop-shadow(0 6px 20px rgba(234,88,12,0.35))"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          {/* Inner Solar Rim Light */}
          <circle cx="0" cy="0" r="36" fill="none" stroke="url(#sun-rim-grad)" strokeWidth="1.5" />

          {/* Central Solar Geometry (Lõi Hạt Nhân Mặt Trời) */}
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.22" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

          {/* 4 Cardinal Solar Flares */}
          <path
            d="M0 -22 L3 -16 L-3 -16 Z M0 22 L3 16 L-3 16 Z M-22 0 L-16 3 L-16 -3 Z M22 0 L16 3 L16 -3 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />

          {/* Sunext Brand Text */}
          <text
            x="0"
            y="26"
            fill="#FFFFFF"
            fontSize="7"
            fontFamily="system-ui, sans-serif"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="0.14em"
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
          >
            SUNEXT
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
