import Header from "../components/header";
import LayoutMobile from "../components/layout/mobile";

export default function FourZeroFour() {
  return (
    <LayoutMobile header={<Header/>}>
      <div className="h-[70vh] px-4">
        <div className="text-[5em] md:text-[6em] leading-tight font-bold">404</div>
        <div className="text-[2em] md:text-[3em] leading-none">Halaman tidak ditemukan</div>
      </div>
    </LayoutMobile>
  )
}