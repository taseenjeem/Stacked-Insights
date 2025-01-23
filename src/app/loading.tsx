import { Spinner } from "@/components/ui/spinner";

export default function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-3">
        <Spinner className="flex">Loading...</Spinner>
      </div>
    </div>
  );
}
