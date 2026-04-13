import { figmaAssets } from "@/content/images";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  platform: "Telegram" | "YouTube" | "TikTok" | "Facebook";
  className?: string;
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  let src = "";
  switch (platform) {
    case "Telegram":
      src = figmaAssets.imgPlatformTelegramColorNegative;
      break;
    case "YouTube":
      src = figmaAssets.imgVectorYouTube;
      break;
    case "TikTok":
      src = figmaAssets.imgVectorTikTok;
      break;
    case "Facebook":
      src = figmaAssets.imgVectorFacebook;
      break;
  }

  return (
    <div className={cn("w-12 h-12 shrink-0 overflow-hidden relative", className)}>
      <img src={src} alt={platform} className="w-full h-full object-contain" />
    </div>
  );
}

export default SocialIcon;
