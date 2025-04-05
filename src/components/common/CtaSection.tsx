import type React from "react";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-6 py-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Ready to transform your learning strategy?
      </h2>
      <p className="text-lg text-muted-foreground">
        Our team of experts is ready to help you find the perfect solution for
        your organization's needs.
      </p>
      <Button size="lg" className="mt-6">
        Request a Demo
      </Button>
    </div>
  );
};

export default CtaSection;
