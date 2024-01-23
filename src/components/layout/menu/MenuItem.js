export default function MenuItem() {
    return(
        <div className="bg-blue-50 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza"/>
            </div>

            <h4 className="font-semibold text-purple-950 text-xl my-3">Pizza de Calabresa</h4>

            <p className="text-purple-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,mollitia!</p>

            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2"> Pedir R$ 22,00</button>
        </div>
    );
}