import { Navegation } from "@/components/Navegation";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navegation />
      <div>{children}</div>
    </div>
  );
}
