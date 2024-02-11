import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface SwitchProps {
  text?: string;
  href: string;
  link: string;
}

const AuthSwitch = ({ text, href, link }: SwitchProps) => {
  return (
    <div className="text-sm text-muted-foreground">
      {text}{" "}
      <Link href={href} className={buttonVariants({ variant: "link" })}>
        {link}
      </Link>
    </div>
  );
};

export default AuthSwitch;
