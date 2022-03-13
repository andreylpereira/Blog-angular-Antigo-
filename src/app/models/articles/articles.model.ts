export default interface Articles {
  id: number,
  title: string,
  body: string,
  category: number,
  createdAt: string,
  updatedAt: string,
  author?: string,
}
