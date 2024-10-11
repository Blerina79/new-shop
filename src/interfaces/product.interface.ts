
import type { Category } from "./Filters.interface";
export interface ProductInterface {
    id:number;
    title : string;
    image : string;
    price : number;
    description : string;
    category:Category;

}