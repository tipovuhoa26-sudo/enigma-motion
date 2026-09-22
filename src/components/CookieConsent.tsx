'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/Button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: string;
}

const STORAGE_KEY = 'sunext_cookie_consent_v1';
const CURRENT_VERSION = '1.0';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(false);
  const [marketingEnabled, setMarketingEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Check existing consent record
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // First visit: reveal banner smoothly after 500ms
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalyticsEnabled(parsed.analytics ?? false);
        setMarketingEnabled(parsed.marketing ?? false);
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  // Listen to open-cookie-settings event from Footer
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowModal(true);
      setShowBanner(false);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const record: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      version: CURRENT_VERSION,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    setAnalyticsEnabled(analytics);
    setMarketingEnabled(marketing);
    setShowBanner(false);
    setShowModal(false);

    // Dispatch event to inform analytics scripts if listening
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sunext-consent-updated', { detail: record }));
    }
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleNecessaryOnly = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsEnabled, marketingEnabled);
  };

  return (
    <>
      {/* 1. First-Visit Bottom Enterprise Consent Banner */}
      {showBanner && !showModal && (
        <div
          role="dialog"
          aria-label="Quyền riêng tư & Cookie"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[480px] z-50 animate-in fade-in slide-in-from-bottom-5 duration-400"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#E8E8E8] shadow-2xl p-5 text-xs text-[#515151]">
            <div className="flex items-center gap-2 mb-2 text-[#0A0A0A]">
              <div className="w-6 h-6 rounded-lg bg-[#FAF5FF] border border-[#EDE9FE] flex items-center justify-center text-[#7000FF] shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-[#0A0A0A]">
                Quyền riêng tư &amp; Cookie
              </span>
            </div>

            <p className="text-xs text-[#626262] leading-relaxed mb-4">
              Sunext sử dụng cookie cần thiết để website hoạt động an toàn và, khi bạn đồng ý, cookie phân tích để cải thiện trải nghiệm vận hành.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Button
                variant="orange"
                size="sm"
                onClick={handleAcceptAll}
                className="rounded-lg text-xs font-medium cursor-pointer"
              >
                Chấp nhận tất cả
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNecessaryOnly}
                className="rounded-lg text-xs font-medium cursor-pointer text-[#515151] hover:text-[#0A0A0A] border-[#D5D3CC]"
              >
                Chỉ cần thiết
              </Button>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-2.5 py-1.5 text-xs font-medium text-[#7000FF] hover:text-[#581C87] transition-colors cursor-pointer ml-auto flex items-center gap-1"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Tùy chỉnh</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Enterprise Cookie Preference Center Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Tùy chọn Cookie"
            className="bg-white rounded-2xl border border-[#E8E8E8] shadow-2xl max-w-lg w-full p-6 text-[#0A0A0A] max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#FAF5FF] border border-[#EDE9FE] flex items-center justify-center text-[#7000FF]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#0A0A0A]">
                    Tùy chọn Quyền riêng tư &amp; Cookie
                  </h3>
                  <span className="text-[11px] font-mono text-[#747474]">
                    Chính sách bảo mật Sunext Enterprise
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#747474] hover:text-[#0A0A0A] hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category 1: Cookie cần thiết (Luôn bật) */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FBFBFA] border border-[#EAEAE7]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm text-[#0A0A0A]">
                    1. Cookie cần thiết
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                    Bắt buộc · Luôn bật
                  </span>
                </div>
                <p className="text-xs text-[#626262] leading-relaxed">
                  Bắt buộc để website vận hành ổn định, bảo vệ phiên làm việc an toàn, chống tấn công CSRF và điều hướng tài nguyên máy chủ. Không thể tắt.
                </p>
              </div>

              {/* Category 2: Cookie phân tích */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E8]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm text-[#0A0A0A]">
                    2. Cookie phân tích hiệu năng
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7000FF]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#626262] leading-relaxed">
                  Đo lường lượng tương tác, tốc độ phản hồi và hành vi đọc tài liệu để Sunext cải tiến chất lượng hệ thống (dữ liệu thu thập ở dạng ẩn danh).
                </p>
              </div>

              {/* Category 3: Cookie tiếp thị */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E8]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm text-[#0A0A0A]">
                    3. Cookie tiếp thị &amp; chiến dịch
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7000FF]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#626262] leading-relaxed">
                  Đo lường hiệu quả chuyển đổi từ các chiến dịch giới thiệu giải pháp AI và sự kiện đào tạo doanh nghiệp của Sunext.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-5 mt-5 border-t border-[#E8E8E8]">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSaveCustom}
                className="rounded-lg text-xs font-medium cursor-pointer text-[#0A0A0A]"
              >
                Lưu tùy chọn
              </Button>
              <Button
                variant="orange"
                size="sm"
                onClick={handleAcceptAll}
                className="rounded-lg text-xs font-medium cursor-pointer"
              >
                Chấp nhận tất cả
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
