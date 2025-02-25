import { Navegation } from "@/components/Navegation";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Navegation />
      <div className="flex-1 overflow-hidden bg-white">{children}</div>
    </div>
  )
}
