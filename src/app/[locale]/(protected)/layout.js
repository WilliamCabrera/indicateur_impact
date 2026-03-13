export default function ProtectedLayout({ children }) {
  return (
    <div className="flex flex-col items-center  justify-start w-full min-h-screen bg-(--color-surface-base-primary)">
      <div className="w-full  p-(--space-800) pt-(--space-200)">
        <img src="/logo/logo_vertical.svg" />
      </div>
      {children}
    </div>
  );
}
