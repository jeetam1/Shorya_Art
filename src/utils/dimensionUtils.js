/**
 * Dimension and scaling utilities for wall previews and physical inch conversion
 */

/**
 * Parses size strings like '35.5" x 23.5"', '24" x 18"', '17.5" x 23.5"', '72" x 24"', '2\' X 3\'', '34" x 20" (unframed)'
 * Returns object with physical dimensions in inches and aspect ratio.
 */
export const parseDimensionsInInches = (sizeStr) => {
  if (!sizeStr) return { wInches: 24, hInches: 18, aspectRatio: 24 / 18, isPortrait: false };
  const cleaned = String(sizeStr).trim();

  // Check feet pattern e.g. 2' X 3' or 2' x 3'
  const feetMatch = cleaned.match(/(\d+(?:\.\d+)?)\s*'\s*[xX]\s*(\d+(?:\.\d+)?)\s*'/);
  if (feetMatch) {
    const w = parseFloat(feetMatch[1]) * 12;
    const h = parseFloat(feetMatch[2]) * 12;
    return {
      wInches: w,
      hInches: h,
      aspectRatio: w / h,
      isPortrait: h > w
    };
  }

  // Check generic numbers pattern e.g. 35.5" x 23.5" or 35.5 x 23.5
  const match = cleaned.match(/(\d+(?:\.\d+)?)\s*"?\s*[xX]\s*(\d+(?:\.\d+)?)/);
  if (match) {
    const w = parseFloat(match[1]);
    const h = parseFloat(match[2]);
    return {
      wInches: w,
      hInches: h,
      aspectRatio: w / h,
      isPortrait: h > w
    };
  }

  return { wInches: 24, hInches: 18, aspectRatio: 24 / 18, isPortrait: false };
};

/**
 * Calculates pixel dimensions for artwork on a wall surface given sizeStr.
 * Physical scale ratio is preserved across all artworks so small paintings appear smaller
 * and large paintings appear larger relative to the wall background.
 */
export const calculateWallDimensions = (sizeStr, options = {}) => {
  const { wInches, hInches, aspectRatio, isPortrait } = parseDimensionsInInches(sizeStr);
  const ppi = options.ppi || 3.6; // Realistic pixels per inch baseline on wall
  const maxH = options.maxWallHeightPx || 280;
  const maxW = options.maxWallWidthPx || 600;
  const minH = options.minWallHeightPx || 40;

  let widthPx = wInches * ppi;
  let heightPx = hInches * ppi;

  // Scale down proportionally if exceeding max wall height
  if (heightPx > maxH) {
    const ratio = maxH / heightPx;
    heightPx = maxH;
    widthPx = widthPx * ratio;
  }

  // Scale down proportionally if exceeding max wall width
  if (widthPx > maxW) {
    const ratio = maxW / widthPx;
    widthPx = maxW;
    heightPx = heightPx * ratio;
  }

  // Ensure reasonable minimum height on screen
  if (heightPx < minH) {
    const ratio = minH / heightPx;
    heightPx = minH;
    widthPx = widthPx * ratio;
  }

  const wCm = Math.round(wInches * 2.54 * 10) / 10;
  const hCm = Math.round(hInches * 2.54 * 10) / 10;

  return {
    wInches,
    hInches,
    wCm,
    hCm,
    widthPx: Math.round(widthPx),
    heightPx: Math.round(heightPx),
    aspectRatio,
    isPortrait,
    formattedSizeInches: `${wInches}" × ${hInches}"`,
    formattedSizeCm: `${wCm} cm × ${hCm} cm`
  };
};
