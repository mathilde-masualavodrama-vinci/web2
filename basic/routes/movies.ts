import { Router } from "express";
const router = Router();


  interface Movies{
    id: number;
    title: string;
    director: string;
    duration: number;
    price: number;
    budget : number;
    description : string;
    imageUrl : string;
}
const defaultMovie: Movies[] = [
    {
      id: 1,
      title: "Fantastic 4",
      director:"Steve Harvey",
      duration : 140,
      price : 12,
      budget : 100000,
      description : "An fantastique friendship",
      imageUrl : "https://tse4.mm.bing.net/th?id=OIP.xwC_wXF2C6wgFsRwfPyfkwHaJ4&pid=Api"

    },
    
     
  ];

  router.get("/:id", (req, res) => {
 
 } )
  




export default router;
