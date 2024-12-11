import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex size-20 rounded-full items-center justify-center bg-green-500/10">
          <Check className="size-10 text-green-500" />
        </div>
        <h1 className="mt-6 text-xl font-semibold">Success, we got your message!</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">Our team will come back shortly</p>
        <Button asChild className="mt-8"><Link href={'/'}>Go Back to Home</Link></Button>
      </div>
    </section>
  );
};

export default SuccessPage;
