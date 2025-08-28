export type Hex = `#${string}`;

export function hexToRgb(hex: Hex): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h,
    16
  );
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

export function luminance(hex: Hex) {
  const { r, g, b } = hexToRgb(hex);
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export function contrastRatio(fg: Hex, bg: Hex) {
  const L1 = luminance(fg) + 0.05;
  const L2 = luminance(bg) + 0.05;
  return L1 > L2 ? L1 / L2 : L2 / L1;
}

export function gradient({
  from,
  to,
  deg = 135,
}: {
  from: Hex;
  to: Hex;
  deg?: number;
}) {
  return `linear-gradient(${deg}deg, ${from}, ${to})`;
}

export function randomGradient() {
  const rhex = () =>
    (`#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`) as Hex;
  return gradient({ from: rhex(), to: rhex() });
}
