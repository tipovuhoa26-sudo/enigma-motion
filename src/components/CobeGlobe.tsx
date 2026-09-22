'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe, { Marker, Arc } from 'cobe';
import { Compass } from 'lucide-react';

/**
 * Tọa độ thực tế các trung tâm dự án & mạng lưới đào tạo chuyển đổi AI của Sunext
 * Lấy chuẩn từ real-project-portfolio/01_DU_LIEU_DU_AN_THAT_DA_LOC.md
 */
export const SUNEXT_HUBS = [
  {
    id: 'hcm',
    name: 'TP. Hồ Chí Minh',
    location: [10.8231, 106.6297] as [number, number],
    size: 0.12,
    color: [0.05, 0.75, 0.38] as [number, number, number], // Vibrant Emerald
    badge: 'Trụ sở chính & 25+ Dự án',
    description: 'Vinhomes, BIDV, Dentsu Sports, HTV, FPTU HCM, Trung Sơn Pharma...',
  },
  {
    id: 'hn',
    name: 'Hà Nội',
    location: [21.0285, 105.8542] as [number, number],
    size: 0.1,
    color: [0.05, 0.75, 0.38] as [number, number, number],
    badge: '10+ Dự án & Đối tác',
    description: 'VNPT VinaPhone, FPTU Hòa Lạc, FSI Digital, PV Power...',
  },
  {
    id: 'bd',
    name: 'Bình Dương',
    location: [11.1667, 106.6667] as [number, number],
    size: 0.08,
    color: [0.05, 0.75, 0.38] as [number, number, number],
    badge: 'BĐS thương mại',
    description: 'Phương Trường An Group — ~300 nhân sự kinh doanh, +200% sản lượng video hiện trường.',
  },
];
// Đà Nẵng / Cần Thơ / Hải Phòng / Tokyo / Singapore đã bị gỡ khỏi danh sách —
// không có trong bất kỳ dữ liệu dự án thật nào đã xác minh
// (real-project-portfolio/01_DU_LIEU_DU_AN_THAT_DA_LOC.md lẫn hồ sơ gốc HPG).
// Chỉ thêm lại khi có dự án thật + tọa độ thật xác nhận được.

export const SUNEXT_ARCS: Arc[] = [
  // Trục xương sống Bắc - Nam: Hà Nội - TP.HCM
  { from: [21.0285, 105.8542], to: [10.8231, 106.6297], color: [0.05, 0.75, 0.38] },
  // TP.HCM - Bình Dương
  { from: [10.8231, 106.6297], to: [11.1667, 106.6667], color: [0.05, 0.75, 0.38] },
];

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const pointerMovement = useRef({ x: 0, y: 0 });
  const [activeHub, setActiveHub] = useState<string>('hcm');
  const [isInteracting, setIsInteracting] = useState(false);

  // Rotation angles: Phi (kinh độ), Theta (vĩ độ)
  // Góc khởi đầu để Việt Nam (~106°E, ~15°N) quay ngay chính diện trước mắt người xem
  const phiRef = useRef<number>(4.9);
  const thetaRef = useRef<number>(0.25);

  useEffect(() => {
    let width = 0;
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;

    const onResize = () => {
      if (currentCanvas) {
        width = currentCanvas.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const markers: Marker[] = SUNEXT_HUBS.map((h) => ({
      location: h.location,
      size: h.size,
      color: h.color,
      id: h.id,
    }));

    const globe = createGlobe(currentCanvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
      width: (width || 460) * 2,
      height: (width || 460) * 2,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 0,
      diffuse: 1.25,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: [0.82, 0.82, 0.79], // Dot map xám ấm thanh lịch
      markerColor: [0.05, 0.75, 0.38], // Xanh ngọc lục bảo rực rỡ
      glowColor: [0.95, 0.98, 0.88], // Ánh sáng dịu tone chanh ấm
      scale: 1.05,
      offset: [0, 0],
      markers,
      arcs: SUNEXT_ARCS,
      arcColor: [0.05, 0.7, 0.35],
      arcWidth: 0.65,
      arcHeight: 0.3,
      markerElevation: 0.025,
    });

    let animationFrameId: number;
    const animate = () => {
      // Nếu người dùng không kéo, tự động xoay nhẹ nhàng theo quán tính
      if (!pointerInteracting.current) {
        phiRef.current += 0.003;
      } else {
        // Xử lý kéo theo con trỏ chuột/chạm
        phiRef.current += pointerMovement.current.x * 0.005;
        thetaRef.current += pointerMovement.current.y * 0.003;
        // Giới hạn góc nhìn nghiêng để quả cầu không bị lộn ngược
        thetaRef.current = Math.max(-0.6, Math.min(0.8, thetaRef.current));
        pointerMovement.current = { x: 0, y: 0 };
      }

      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    setIsInteracting(true);
    if (canvasRef.current) {
      canvasRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x;
      const deltaY = e.clientY - pointerInteracting.current.y;
      pointerMovement.current = { x: deltaX, y: deltaY };
      pointerInteracting.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = null;
    setIsInteracting(false);
    if (canvasRef.current) {
      canvasRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const selectedHubData = SUNEXT_HUBS.find((h) => h.id === activeHub) || SUNEXT_HUBS[0];

  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none group">
      {/* Canvas WebGL Cobe */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`w-full h-full object-contain cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isInteracting ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '480px',
          aspectRatio: '1',
          contain: 'layout paint size',
          opacity: 1,
        }}
        aria-label="Quả cầu 3D tương tác biểu diễn mạng lưới dự án chuyển đổi AI của Sunext"
      />

      {/* Top Floating Badge: Mạng lưới 40+ dự án thật */}
      <div className="absolute top-2 left-2 sm:left-4 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-sm text-xs font-medium text-[#17151A]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="font-semibold">40+ Dự Án Thực Tế</span>
        </div>
      </div>

      {/* Bottom Floating Interactive Cue */}
      <div className="absolute bottom-2 left-2 sm:left-4 z-20 flex items-center gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17151A]/85 backdrop-blur-md text-white text-[11px] font-medium shadow-sm">
          <Compass className="w-3.5 h-3.5 text-[#FAFFDE] animate-spin-slow" />
          <span>Kéo để xoay 3D</span>
        </div>
      </div>

      {/* Interactive Hub Detail Tooltip */}
      <div className="absolute -bottom-10 left-0 right-0 z-20 hidden md:flex items-center justify-between px-2 text-[11px] text-[#6E6E6E]">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[#17151A]">{selectedHubData.name}:</span>
          <span className="text-[#17151A]">{selectedHubData.badge}</span>
        </div>
        <div className="flex items-center gap-1">
          {SUNEXT_HUBS.slice(0, 5).map((h) => (
            <button
              key={h.id}
              onClick={() => {
                setActiveHub(h.id);
                // Xoay nhẹ về kinh độ của điểm đó
                const lon = h.location[1];
                phiRef.current = (lon * Math.PI) / 180 + Math.PI / 2;
                thetaRef.current = 0.2;
              }}
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all ${
                activeHub === h.id
                  ? 'bg-[#17151A] text-white'
                  : 'bg-white/80 hover:bg-black/5 text-[#6E6E6E] border border-black/5'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
