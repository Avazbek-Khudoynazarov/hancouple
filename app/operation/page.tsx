import { Suspense } from "react";
import Operation from "@/components/operation";

function OperationContent() {
  return <Operation />;
}

export default function OperationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OperationContent />
    </Suspense>
  );
}
