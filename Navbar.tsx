
import Container from './Container';

export default function Navbar(){
return <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl">
<Container>
<div className="h-20 flex justify-between items-center">
<b className="text-xl">فناوران جرقه</b>
<nav className="hidden md:flex gap-8">
<span>محصولات</span><span>فناوری</span><span>تماس</span>
</nav>
<button className="bg-black text-white px-6 py-3 rounded-full">مشاوره</button>
</div>
</Container>
</header>
}
