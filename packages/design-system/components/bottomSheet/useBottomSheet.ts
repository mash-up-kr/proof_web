import {useEffect, useRef} from "react";
import {MIN_Y} from "./BottomSheet";

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: "none" | "down" | "up"
  }
}

const initialMetrics: BottomSheetMetrics = {
  touchStart: {
    sheetY: 0,
    touchY: 0
  },
  touchMove: {
    prevTouchY: 0,
    movingDirection: "none",
  },
};

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);
  const sheetHeader = useRef<HTMLDivElement>(null);

  const metrics = useRef<BottomSheetMetrics>(initialMetrics);

  useEffect(() => {
    if (!sheetHeader.current) return;

    const MAX_Y = window.innerHeight - 100;

    const handleTouchStart = (e: TouchEvent) => {
      if (!sheet.current) return;

      const {touchStart} = metrics.current;

      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sheet.current) return;

      const {touchStart, touchMove} = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      const touchOffset = currentTouch.clientY - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      if (nextSheetY < MIN_Y) {
        nextSheetY = MIN_Y;
      }

      if (nextSheetY > MAX_Y) {
        nextSheetY = MAX_Y;
      }

      sheet.current.style.setProperty('transform', `translateY(${nextSheetY}px)`);
    };

    const handleTouchEnd = () => {
      if (!sheet.current) return;

      metrics.current = initialMetrics;
    };

    sheetHeader.current.addEventListener('touchstart', handleTouchStart);
    sheetHeader.current.addEventListener('touchmove', handleTouchMove);
    sheetHeader.current.addEventListener('touchend', handleTouchEnd);
  }, []);

  return {sheet, sheetHeader};
}
