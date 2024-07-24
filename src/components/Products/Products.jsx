import { Listedproduct } from "./Listedproduct"
import { Productsection } from "./Productsection"
import "aos/dist/aos.css"
import { UpdateFollower } from "react-mouse-follower";
import { Seo3list } from "./Seo3list";
import { Seo3litelist } from "./Seo3litelist";
import { Seo3maxlist } from "./Seo3maxlist";

export const Products = () => {
  return (
    <>
    <Productsection/>
    <Listedproduct/>
    <Seo3list/>
    <Seo3litelist/>
    <Seo3maxlist/>
    </>
  )
}
