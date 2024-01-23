import Link from "next/link";

export default function Header(){
    return(

        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-purple-700 font-semibold">
                <Link className="text-primary font-semibold text-2xl "  href={'/'}>
                    Planet Pizza
                </Link>

                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>Sobre</Link>
                <Link href={''}>Contato</Link>
            </nav>

            <nav className="flex items-center gap-4 text-purple-950 font-semibold">

                <Link href={'/login'}>Entrar</Link>

                <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
                    Cadraste-se
                </Link>

            </nav>
        </header>
    )
}