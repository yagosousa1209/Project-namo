import Swiper from "components/Swiper";

export default function Card({ title, imgJSON }) {
  return (
    <article className="border-double border-8 p-1 rounded-xl border-terciary bg-secundary">
      <h2 className="text-xl font-semibold leading-tight mb-3 text-center">{title}</h2>
      <div className="relative">
        <Swiper imgJSON={imgJSON} />
      </div>
    </article>
  )
}
