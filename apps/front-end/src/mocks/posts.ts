import { PostType } from "../@types/post";
import { userImg } from "../constants/images";

export const postsMock: PostType[] = [
  {
    authorName: 'Caio Magalhães de Faria',
    authorId: '123',
    authorProfileImg: userImg,
    authorSpecialities: [
      {
        id: '1',
        name: 'teste',
        description: 'tester'
      }
    ],
    authorStatus: 'online',
    postId: '1',
    postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non massa fermentum, lacinia tortor id, congue odio. Quisque convallis nulla ut pretium gravida. Mauris mauris felis, fringilla in scelerisque vel, elementum id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis justo vel est rutrum pretium vel id diam.',
    postType: 'simple',
    postImages: ['https://media.licdn.com/dms/image/v2/D4D22AQFQwtBSaId4OQ/feedshare-shrink_800/B4DZbW6BmqH8Ag-/0/1747362257982?e=1750896000&v=beta&t=foJ3Kb1RUkBK3Zy8fQZjaRjLTToIEa7sEI-1gdyIiZ8'],
    postLikes: 24,
    postComents: 55,
    postTimePosted: '15 min'
  },
  {
    authorName: 'Caio Magalhães de Faria',
    authorId: '123',
    authorProfileImg: userImg,
    authorSpecialities: [
      {
        id: '1',
        name: 'teste',
        description: 'tester'
      }
    ],
    authorStatus: 'online',
    postId: '1',
    postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non massa fermentum, lacinia tortor id, congue odio. Quisque convallis nulla ut pretium gravida. Mauris mauris felis, fringilla in scelerisque vel, elementum id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis justo vel est rutrum pretium vel id diam.',
    postType: 'simple',
    postImages: ['https://media.licdn.com/dms/image/v2/D4D22AQFQwtBSaId4OQ/feedshare-shrink_800/B4DZbW6BmqH8Ag-/0/1747362257982?e=1750896000&v=beta&t=foJ3Kb1RUkBK3Zy8fQZjaRjLTToIEa7sEI-1gdyIiZ8'],
    postLikes: 24,
    postComents: 55,
    postTimePosted: '15 min'
  },
  {
    authorName: 'Caio Magalhães de Faria',
    authorId: '123',
    authorProfileImg: userImg,
    authorSpecialities: [
      {
        id: '1',
        name: 'teste',
        description: 'tester'
      }
    ],
    authorStatus: 'online',
    postId: '1',
    postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non massa fermentum, lacinia tortor id, congue odio. Quisque convallis nulla ut pretium gravida. Mauris mauris felis, fringilla in scelerisque vel, elementum id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis justo vel est rutrum pretium vel id diam.',
    postType: 'simple',
    postImages: ['https://media.licdn.com/dms/image/v2/D4D22AQFQwtBSaId4OQ/feedshare-shrink_800/B4DZbW6BmqH8Ag-/0/1747362257982?e=1750896000&v=beta&t=foJ3Kb1RUkBK3Zy8fQZjaRjLTToIEa7sEI-1gdyIiZ8'],
    postLikes: 24,
    postComents: 55,
    postTimePosted: '15 min'
  }
]