import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function ResourceCard({
  title,
  description,
  type,
  tag,
  driveUrl,
}: {
  title: string;
  description: string;
  type: string;
  tag: string;
  driveUrl: string;
}) {
  return (
    <Card className="flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-gold/40">
      <CardHeader>
        <Badge className="mb-2 w-fit">{tag}</Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-muted">
          {type}
        </span>
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <Download size={15} />
          Get file
        </a>
      </CardContent>
    </Card>
  );
}
