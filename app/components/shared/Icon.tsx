"use client";

interface IconProps {
  name: string;
  filled?: boolean;
  className?: string;
  size?: number;
}

export default function Icon({ name, filled, className = "", size }: IconProps) {
  const style: React.CSSProperties = {};
  if (filled) {
    style.fontVariationSettings = "'FILL' 1";
  }
  if (size) {
    style.fontSize = `${size}px`;
  }
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}
