import { Clock } from "lucide-react";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ShareButtons } from "@/components/blog/share-buttons";
import type { TableOfContentsItem } from "@/types";

export function LeftSidebar({
  items,
  readingTime,
  url,
  title,
}: {
  items: TableOfContentsItem[];
  readingTime: number;
  url: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        {readingTime} min read
      </div>
      <TableOfContents items={items} />
      <ShareButtons url={url} title={title} />
    </div>
  );
}
