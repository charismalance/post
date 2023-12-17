import PagePost from "./commponents/pagePost/page"
import BageBox from "./commponents/bageBox/page"
import Navbar from "./commponents/navbar/page"
export default function Home() {
  return (
<div className="flex min-h-screen flex-col justify-between px-24 ">
<Navbar></Navbar>
<div class="grid grid-flow-row-dense grid-cols-3 gap-4">
  <div class="col-span-2">
    <div class="bg-slate-50 rounded-lg border p-1 md:p-3">
<PagePost></PagePost>
    </div>
    </div>
  <div >
    <div class="bg-slate-50 rounded-lg border p-1 md:p-3">
<BageBox></BageBox>
<BageBox></BageBox>

      </div>
      </div>

</div>
   
    </div>
  )
}
