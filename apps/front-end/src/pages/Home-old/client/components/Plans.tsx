import { Button, Text } from "@app/ui";

export function Plans() {
  const minutsPackages = [
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'
    },
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'

    },
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'

    },

  ]
  return (
    <>
      <div id="plans" className="backdrop-blur-md font-bold border-[#6028dc1a] bg-[#26123c]/20 border rounded-xl w-full p-6 ml-auto mr-auto">
        <div className=" max-w-[1200px] ml-auto mr-auto mt-10 mb-20">
          <Text as="h1" className="text-5xl mb-20 text-center font-extrabold text-white">Comprar Minutos</Text>
          <div className="grid md:grid-cols-3 gap-6">
            {minutsPackages.map((plan, index) => (
              <div
                key={index}
                className="bg-black rounded-xl flex flex-col p-6 text-center sombra transition-all h-[350px]"
              >
                <p className="text-5xl mb-5 font-bold text-green mt-2">{plan.price}</p>
                <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-white-dark mb-5">
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                </ul>
                <Button className="mt-auto w-full btn-outline-primary">
                  Comprar {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}