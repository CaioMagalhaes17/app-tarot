import { SpecialityType } from "./specialities";

export type PostType = {
  authorName: string,
  authorId: string,
  authorProfileImg: string,
  authorSpecialities: SpecialityType[],
  authorStatus: string,
  postId: string,
  postDescription: string,
  postType: string,
  postImages: string[],
  postLikes: number,
  postComents: number,
  postTimePosted: string
}