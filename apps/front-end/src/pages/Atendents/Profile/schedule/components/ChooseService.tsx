import { Button, IconDollarSignCircle, Text } from "@app/ui"

export function ChooseService({ service, setService }: {
  service: {
    img: string;
    name: string;
    price: number;
  },
  setService: React.Dispatch<React.SetStateAction<{
    img: string;
    name: string;
    price: number;
  }>>
}) {
  const services = [
    {
      name: 'Consulta por Chat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service5.png',
      price: 50
    },
    {
      name: 'Mapa Astral',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service3.png',
      price: 50
    },
    {
      name: 'Horoscopo do amor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service6.png',
      price: 50
    },
    {
      name: 'Horoscopo do dia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service1.png',
      price: 50
    },

  ]
  return (
    <>
      <div className="p-2 flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
          {services.map((item) => (
            <>
              <div className="flex flex-col w-[150px]">
                <img src={item.img} className="rounded-xl h-[100px]" />
                <Text className="text-white font-smythe text-2xl mt-2" as="h1">{item.name}</Text>
                <Text className="mt-2 mb-2" as="span">{item.description}</Text>
                <Text className="text-success text-lg mt-2 mb-5" as="span">R${item.price},00</Text>
                <Button onClick={() => setService(item)} className={`${service.name !== item.name ? 'btn-outline-primary' : 'btn-primary'} `}>Escolher</Button>
              </div>
            </>
          ))}
        </div>
        <Button className="btn-primary mt-10"><IconDollarSignCircle className="mr-2" />Ir para pagamento</Button>
      </div>
    </>
  )
}