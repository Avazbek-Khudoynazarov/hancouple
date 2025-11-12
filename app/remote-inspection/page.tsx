import { Suspense } from "react";
import RemoteInspection from "@/components/remote-inspection";

function RemoteInspectionContent() {
  return <RemoteInspection />;
}

export default function RemoteInspectionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RemoteInspectionContent />
    </Suspense>
  );
}
