import { Navegation } from "@/components/Navegation";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Navegation />
      <div className="min-h-screen flex-1 bg-white">{children}</div>
    </div>
  )
}
