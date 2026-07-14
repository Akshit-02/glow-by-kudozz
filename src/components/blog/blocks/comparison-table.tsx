export function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        {caption && <caption className="border-b border-border p-4 text-left text-sm text-muted-foreground">{caption}</caption>}
        <thead>
          <tr className="bg-muted">
            {headers.map((header) => (
              <th key={header} className="px-5 py-3.5 font-display text-sm font-semibold text-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-foreground/85">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
