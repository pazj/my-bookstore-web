import Header from "../components/Header/Header"
import Brands from "../components/Brands/Brands"
import FeaturesBooks from "../components/FeaturesBooks/FeaturesBooks"
import BestSellingBook from "../components/BestSellingBook/BestSellingBook"
import PopularBooks from "../components/PopularBooks/PopularBooks"
import Quote from "../components/Quote/Quote"
import LatestArticle from "../components/LatestArticle/LatestArticle"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <FeaturesBooks />
    <BestSellingBook/>
    <PopularBooks />
    <Quote />
    <LatestArticle />
    </>
  )
}
