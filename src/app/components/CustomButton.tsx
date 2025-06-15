"use client";

import React from "react";
import Link from "next/link";

type CustomButtonProps = {
  variant?: "primary" | "outline";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  href,
  children,
  icon,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "relative group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300";

  const primaryClasses =
    "bg-gradient-to-r from-[#8ab4f8] to-[#f482c3] text-[#131314] hover:brightness-110";

  const outlineClasses =
    "border border-[#8ab4f8] text-[#8ab4f8] hover:bg-[#8ab4f8] hover:text-[#131314]";

  const combinedClasses = `${baseClasses} ${
    variant === "primary" ? primaryClasses : outlineClasses
  } ${className}`;

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {icon}
    </span>
  );

  if (href?.startsWith("#") || href?.startsWith("http")) {
    return (
      <a href={href} className="group">
        <button className={combinedClasses} type={type}>
          {content}
        </button>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className="group">
        <button className={combinedClasses} type={type}>
          {content}
        </button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type={type}>
      {content}
    </button>
  );
};

export default CustomButton;
