import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid h-38 w-full place-content-center">
      <Loader size={34} className="animate-spin" />
    </div>
  );
}
