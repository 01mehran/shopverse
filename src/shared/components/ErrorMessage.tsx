type ErrorMessageProps = {
  error: Error | null;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="text-red grid h-38 w-full place-content-center text-lg font-medium">
      <p>{error?.message}</p>
    </div>
  );
}
