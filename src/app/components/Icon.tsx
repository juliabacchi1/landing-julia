import {
  Flame,
  Users,
  Code,
  Camera,
  Heart,
  Star,
  Coffee,
  Book,
  Bell,
  Zap,
  ArrowRight,
  ChevronDown,
  Palette,
  MousePointerClick,
  Sparkles,
  Pen,
  Feather,
  Rocket,
  Wand,
} from "lucide-react";

const iconsMap = {
  flame: Flame,
  users: Users,
  code: Code,
  camera: Camera,
  heart: Heart,
  star: Star,
  coffee: Coffee,
  book: Book,
  bell: Bell,
  zap: Zap,
  arrowright: ArrowRight,
  chevrondown: ChevronDown,
  palette: Palette,
  mousepointerclick: MousePointerClick,
  sparkles: Sparkles,
  pen: Pen,
  feather: Feather,
  rocket: Rocket,
  wand: Wand,
};

type IconProps = {
  name?: string;
  size?: number;
  className?: string;
};

export default function Icon({
  name = "",
  size = 24,
  className = "",
}: IconProps) {
  const key = name.trim().toLowerCase();
  const IconComponent = iconsMap[key as keyof typeof iconsMap] || Sparkles;

  return <IconComponent size={size} className={className} />;
}
