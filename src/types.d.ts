interface Console {
  name:string
  id:string
  images:string[]
  games:Game[]
}
type Game = {
  title:string
  id:string
  description:string
  rating:number
  images:string[]
  details:{
    developer:string
    release_date:string
    platform:string
  }
  categories:string[]
}
