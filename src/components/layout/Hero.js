import Image from "next/image";
import Right from "@/components/icons/Right";

export default function Hero() {
    return(
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-5xl text-purple-950 font-semibold ">
                    Tudo fica <br/>
                    melhor com&nbsp;
                    <span className="text-primary">Pizza
                    </span>
                </h1>
                <p className="my-6 text-purple-800 text-sm">
                    A pizza é a peça que falta para completar o seu dia, uma refeição simples mas deliciosa.
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">Peça agora
                        <Right/>
                    </button>

                    <button className="flex gap-2 py-2 text-purple-950 font-semibold">Saiba mais
                        <Right/>
                    </button>
                </div>

            </div>
            <div className="relative w-auto h-auto">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
            </div>
        </section>
    )
}