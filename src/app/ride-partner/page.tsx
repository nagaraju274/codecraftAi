import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import Link from "next/link";

export default function RidePartnerPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Car className="w-10 h-10 text-primary" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">
                        Ride-Partner
                    </h1>
                    <p className="text-xs text-muted-foreground text-left ml-0.5">by Mine-Yours</p>
                </div>
            </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-tight">
          The Future of Your Commute, Reimagined.
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience seamless, smart, and sustainable travel with our next-generation ride-sharing platform. Your perfect ride is just a tap away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="#">Explore More Products</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
