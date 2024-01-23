import Image from "next/image";
import MenuItem from "@/components/layout/menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function HomeMenu(){
    return(
        <section className="">

            <div className="absolute  left-0 right-0  justify-start">

                <div className="absolute -left-12 -top-[70px] text-left -z-10">
                    <Image src={'/buzz.png'} width={209 + 50} height={289 + 50} alt={'salada'}/>
                </div>
                <div className="absolute -top-[100px] -right-12 -z-10">
                    <Image src={'/planet.png'}
                           width={257} height={295 + 50} alt={'salada'}/>
                </div>

            </div>

            <div className="text-center mb-6">
                <SectionHeaders subHeader={'Confira'}
                                mainHeader={'Cardápio'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>

);
}