export type TagColor = "primary" | "secondary";

export const tagColorsClasses: Record<
  TagColor,
  { bgLight: string; text: string; bgSolid: string }
> = {
  primary: {
    bgLight: "bg-primary/10",
    text: "text-primary",
    bgSolid: "bg-primary",
  },
  secondary: {
    bgLight: "bg-secondary/10",
    text: "text-secondary",
    bgSolid: "bg-secondary",
  },
};
