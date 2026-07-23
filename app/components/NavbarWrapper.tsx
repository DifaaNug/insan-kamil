import { auth } from "@/lib/auth";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";

  return <Navbar isAdmin={isAdmin} />;
}
