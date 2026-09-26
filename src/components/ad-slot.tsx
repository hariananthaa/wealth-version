/**
 * Placeholder ad slot. Swap the inner div for your ad network's <script>/<ins>
 * tag (e.g. AdSense) once traffic justifies it. Kept as its own component so
 * every placement is mobile-safe (max-width: 100%, responsive height) and can
 * be toggled centrally.
 */
export function AdSlot({
  label = "Advertisement",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`ad-slot max-w-full ${className ?? ""}`}>
      {label}
    </div>
  );
}
