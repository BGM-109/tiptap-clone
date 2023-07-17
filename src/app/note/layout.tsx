import Sidebar from "@/components/sidebar";

export default function AppLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col pl-72">
      {/* @ts-expect-error Server Component */}
      <Sidebar />
      {props.children}
    </main>
  );
}
