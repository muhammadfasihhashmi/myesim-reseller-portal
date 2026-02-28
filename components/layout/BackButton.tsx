"use client";

import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <ArrowBigLeft
      onClick={() => router.back()}
      size={18}
      className="text-primary"
    />
  );
}

export default BackButton;
