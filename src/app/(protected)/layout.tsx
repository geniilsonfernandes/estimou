import { Navegation } from "@/components/Navegation";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen gap-4 p-4">
      <Navegation />
      <div className="flex-1 rounded-lg bg-white">{children}</div>
    </div>
  )
}
