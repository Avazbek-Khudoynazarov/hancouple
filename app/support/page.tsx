import { Suspense } from "react";
import Support from "@/components/support";

function SupportContent() {
  return <Support />;
}

export default function SupportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportContent />
    </Suspense>
  );
}
