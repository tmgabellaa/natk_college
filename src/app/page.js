import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // Автоматический редирект на страницу логина
  return null;
}
