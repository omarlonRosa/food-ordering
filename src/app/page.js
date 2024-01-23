import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
      <>
          <Hero />
          <HomeMenu />
          <section className="text-center my-16" >
              <SectionHeaders
                  subHeader={'Nossa história'}
                  mainHeader={'Sobre nós'}
              />
              <div className="text-purple-800 max-w-md mx-auto flex-col gap-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias corporis eos est et, excepturi omnis quos unde voluptatem?</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsum quaerat quam quas quisquam repellat sed voluptas. A accusantium aliquid animi dicta error facere facilis fuga illum iusto maiores molestias, nostrum, nulla quia rem suscipit tempora tenetur totam velit veniam?</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nesciunt nihil quas quidem quos rem voluptas! At blanditiis exercitationem hic iste. Accusantium earum et expedita facere illo ipsam iusto maiores, modi nemo neque odit, officiis omnis pariatur, quos ratione repellendus repudiandae sed tenetur! Commodi illo minus omnis ratione rem voluptatibus!</p>
              </div>
          </section>

          <section className="text-center my-8">
              <SectionHeaders
                  subHeader={'Fale conosco'}
                  mainHeader={'Contato'}
              />

              <div className="mt-8">
                  <a className="text-4xl text-purple-950" href="tel:(94) 90000 1000">(94) 90000 1000</a>
              </div>
          </section>
      </>
  )
}
