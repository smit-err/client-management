import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center h-dvh w-full">
      <div className="text-center flex flex-col gap-6 w-md">
        <h1 className="text-5xl font-semibold tracking-tight">
          Client management
        </h1>
        <div className="grid gap-3">
          <Button size="lg" className="w-full text-base h-auto py-2.5" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            size="lg"
            variant={"outline"}
            className="w-full text-base h-auto py-2.5"
            asChild
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
