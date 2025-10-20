import useStore from "../../state";
import { useState } from "react";
import { AtendentType } from "../../@types/atendent.type";

export function useAtendentsController() {
  const { isMobile } = useStore()

  function useSearchAtendents() {
    const [atendents] = useState<AtendentType[]>([
      {
        id: '1',
        name: 'Caio Magalhães de Faria',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
      {
        id: '1',
        name: 'Aloisio Numerologo do caralho daspmdaiop',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
      {
        id: '1',
        name: 'Aloisio Numerologo',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
      {
        id: '1',
        name: 'Aloisio Numerologo',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
      {
        id: '1',
        name: 'Aloisio Numerologo',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
      {
        id: '1',
        name: 'Aloisio Numerologo',
        rating: 3,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        profileImg: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',

      },
    ])
    // const { data, isLoading } = useQuery({
    //   queryKey: ['search-atendents'],
    //   queryFn: () => SearchAtendents('')
    // })

    // useEffect(() => {
    //   if (data && !isLoading) return setAtendents(atendents)
    // }, [isLoading, data])


    return { atendents }
  }

  return { isMobile, useSearchAtendents }
}