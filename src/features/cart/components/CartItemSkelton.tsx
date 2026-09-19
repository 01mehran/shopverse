export default function CartItemSkelton() {
  return (
    <article className="border-bg-muted relative mb-3 flex w-full animate-pulse gap-2 rounded-2xl border-b-2 pb-2 sm:mb-4 sm:pb-4 md:gap-4">
      {/* Product Image */}
      <div className="h-24 w-24 shrink-0 rounded-lg bg-gray-200 md:w-31" />

      {/* Product Info */}
      <div className="flex w-full flex-col justify-between">
        <div className="flex flex-col gap-2">
          {/* Name */}
          <div className="h-5 w-32 rounded bg-gray-200 sm:h-6 sm:w-40" />

          {/* Size */}
          <div className="h-3 w-20 rounded bg-gray-200" />

          {/* Color */}
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>

        {/* Price + AddToCart */}
        <div className="flex w-full items-center justify-between">
          {/* Price */}
          <div className="h-7 w-16 rounded bg-gray-200" />

          {/* AddToCart */}
          <div className="xs:w-40 h-9 w-30 rounded-[62px] bg-gray-200 sm:px-3 lg:w-60" />
        </div>
      </div>

      {/* Trash Icon */}
      <div className="absolute -top-1 right-0 h-6 w-5 rounded-md bg-gray-200" />
    </article>
  );
}
