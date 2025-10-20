import { Button, Text } from "@app/ui"

export function ChooseService({ service, setService }: {
  service: {
    img: string;
    name: string;
    price: number;
  },
  isMobile: boolean,
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
        <div className="flex flex-wrap gap-20 justify-center items-center mt-10">
          {services.map((item) => (
            <>
              <div className="flex flex-col w-[180px] h-[520px]">
                <img src={item.img} className="rounded-xl h-[170px]" />
                <Text className="text-white font-smythe text-3xl mt-2" as="h1">{item.name}</Text>
                <Text className="mt-2 mb-2 text-lg" as="span">{item.description}</Text>
                <Text className="text-success text-lg mt-2 mb-5" as="span">R${item.price},00</Text>
                <Button onClick={() => setService(item)} className={`${service.name !== item.name ? 'btn-outline-primary' : 'btn-primary'} `}>Escolher</Button>
              </div>
            </>
          ))}
        </div>
        <div className="w-full flex justify-end" >
          <Button className="btn-primary mt-10">Avançar</Button>
        </div>
      </div>
    </>
  )
}