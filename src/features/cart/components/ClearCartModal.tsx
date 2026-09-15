import { useCartStore } from "@/stores/cartStore";

type ClearCartModalProps = {
  setShowClearConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ClearCartModal({
  setShowClearConfirm,
}: ClearCartModalProps) {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <section className="absolute top-14 left-0 z-20 w-full rounded-xl bg-black p-4 text-white/80">
      <p className="text-center text-base">
        Are you sure you want to clear your cart?
      </p>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          className="text-red/80 cursor-pointer rounded-md border px-4 text-base"
          onClick={() => setShowClearConfirm(false)}
        >
          Cancel
        </button>

        <button
          className="cursor-pointer rounded-md border px-4 text-base text-green-400"
          onClick={() => {
            clearCart();
            setShowClearConfirm(false);
          }}
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
