export type ScreenshotVariant = 'day-board' | 'compliance';

export interface ScreenshotMask {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ScreenshotConfig {
  src: string;
  alt: string;
  masks: ScreenshotMask[];
  frameClass: string;
}

export const screenshotConfigs: Record<ScreenshotVariant, ScreenshotConfig> = {
  'day-board': {
    src: '/marketing/day-board.png',
    alt:
      'Bycon dispatch day board showing unassigned trips, driver timelines, and trip blocks. Driver names redacted.',
    frameClass: 'mkt-shot-dayboard',
    masks: [
      { top: 39.8, left: 0, width: 15.5, height: 8.6 },
      { top: 49.2, left: 0, width: 15.5, height: 8.6 },
      { top: 58.6, left: 0, width: 15.5, height: 8.6 },
      { top: 68.0, left: 0, width: 15.5, height: 8.6 },
      { top: 77.4, left: 0, width: 15.5, height: 8.6 },
      { top: 86.8, left: 0, width: 15.5, height: 8.2 },
    ],
  },
  compliance: {
    src: '/marketing/compliance-center.png',
    alt:
      'Bycon compliance center showing document status, OIG/SAM checks, and missing items. Driver names redacted.',
    frameClass: 'mkt-shot-compliance',
    masks: [
      { top: 21.5, left: 0, width: 18.5, height: 78.5 },
      { top: 20.2, left: 19, width: 40, height: 8.5 },
    ],
  },
};

export function getScreenshot(variant: ScreenshotVariant): ScreenshotConfig {
  return screenshotConfigs[variant];
}
