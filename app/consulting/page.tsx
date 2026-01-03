import { Suspense } from "react";
import Consulting from "@/components/consulting";

function ConsultingContent() {
  return <Consulting />;
}

export default function ConsultingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultingContent />
    </Suspense>
  );
}
