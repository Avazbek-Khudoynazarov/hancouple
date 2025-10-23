import { Suspense } from "react";
import Introduction from "@/components/introduction";

export default function IntroductionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Introduction />
    </Suspense>
  );
}
