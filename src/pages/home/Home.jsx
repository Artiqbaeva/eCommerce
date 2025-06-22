import React from 'react'
import hero from '@/assets/hero-img.svg'
import { useProduct } from "@/api/hooks/useProduct";
import dining from '@/assets/dining.svg'
import living from '@/assets/living.svg'
import bedroom from '@/assets/bedroom.svg'
import inspirations from '@/assets/Inspirations.svg'
import funiro from '@/assets/funiro.svg'
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Row, Col, Rate } from "antd";
import { ShoppingCartOutlined, ShareAltOutlined, HeartOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();

  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 16;
  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
           <div className="
            absolute top-1/2
            left-1/2 sm:left-[60%]
            md:-translate-x-[50%]
            -translate-x-1/2 
            -translate-y-1/2 
            bg-white/80 p-4 md:p-8
            rounded-md shadow-lg
            w-[90%] md:w-[643px]
            h-auto md:h-[350px]
            text-center md:text-left
           ">
            <p className="text-sm tracking-wider text-gray-500 mb-2 uppercase">
              New Arrival
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-yellow-600 mb-4 leading-tight">
              Discover Our <br className="hidden md:block" /> New Collection
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded font-semibold text-sm md:text-base"
            >
              BUY NOW
            </button>
          </div>

      </section>

      {/* Browse The Range */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Browse The Range</h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: dining, title: 'Dining' },
            { img: living, title: 'Living' },
            { img: bedroom, title: 'Bedroom' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center">
              <img src={item.img} alt={item.title} className="w-[70%] max-w-[180px]" />
              <span className="mt-6 font-display font-semibold text-xl md:text-2xl">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products - Ant Design Cards */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">Explore our latest collection</p>
        <Row gutter={[16, 24]}>
  {data?.data?.products?.map((product) => (
    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        className="relative group overflow-hidden shadow-md rounded-lg"
        cover={
          <div className="relative">
            <img
              alt={product.title}
              src={product.thumbnail}
              className="h-56 w-full object-contain cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            />
            {/* Hover buttons */}
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100  text-sm font-medium">
                <ShoppingCartOutlined />
                Add to Cart
              </button>
              <button className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100  text-sm font-medium">
                <ShareAltOutlined />
                Share
              </button>
              <button className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded-full shadow hover:bg-yellow-100  text-sm font-medium">
                <HeartOutlined />
                Like
              </button>
            </div>
          </div>
        }
      >
        <Meta
          title={<span className="font-semibold">{product.title}</span>}
          description={<span className="text-yellow-600 font-bold">${product.price}</span>}
        />
        <div className="mt-2">
          <Rate disabled defaultValue={Math.round(product.rating)} />
        </div>
      </Card>
    </Col>
  ))}
</Row>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/shop")}
            className="border border-yellow-600 hover:bg-yellow-700 hover:text-white text-yellow-600 px-6 py-3 rounded font-semibold transition duration-300 text-sm md:text-base"
          >
            Show More
          </button>
        </div>
      </section>

      {/* Inspirations + Funiro banners - Desktop only */}
      <section className="container mx-auto mt-8 hidden md:block">
        <div className="flex justify-center">
          <img src={inspirations} alt="Inspirations" className="w-full mx-auto" />
        </div>
        <div className="mt-8 flex justify-center">
          <img src={funiro} alt="Funiro" className="w-full mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Home;
