import { Loader } from "lucide-react";

type LoadingProps = {
  size?: number;
};

export default function Loading({ size = 34 }: LoadingProps) {
  return (
    <div className="grid place-content-center">
      <Loader size={size} className="animate-spin" />
    </div>
  );
}
