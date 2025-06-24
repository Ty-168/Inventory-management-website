export default function InstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-full items-center justify-center gap-4 ">
      <div className="w-full h-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
