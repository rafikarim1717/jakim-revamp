import { meta } from "@/lib/meta";
import DaftarView from "@/views/DaftarView";
export const metadata = meta({ title: "Daftar JAKIM 2027 · harga, status, cara daftar (konsep revamp)", description: "Status pendaftaran per hari, harga early bird & general WNI/WNA, dan 5 langkah daftar JAKIM 2027.", lang: "id", path: "/daftar/" });
export default function Page() { return <DaftarView lang="id" />; }
