import { Navegation } from "@/components/Navegation";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Navegation />
      <div className="flex-1 bg-white">{children}</div>
    </div>
  )
}
