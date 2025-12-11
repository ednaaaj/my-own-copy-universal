export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="max-w-xl space-y-4 px-6 py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          Universal
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Next.js + TypeScript + Tailwind starter is ready.
        </h1>
        <p className="text-base text-slate-600">
          Begin adding your pages, components, and data models. Tailwind is
          prewired with the app router so you can move straight into building.
        </p>
      </div>
    </div>
  );
}
