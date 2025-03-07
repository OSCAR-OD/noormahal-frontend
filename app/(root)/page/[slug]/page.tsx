//import ReactMarkdown from 'react-markdown'
import { notFound } from "next/navigation";
import { getWebPageBySlug } from "@/lib/actions/web-page.actions";
// import { Card, CardContent } from '@/components/ui/card'
// import ProductSlider from '@/components/shared/product/product-slider'
// import {
//   getProductsByTag,
// } from '@/lib/actions/product.actions'
//import ProductCard from '@/components/shared/product/product-card'
import HotelCard from "@/components/shared/product/hotel-card";
import { getAllProducts } from "@/lib/actions/product.actions";
import Pagination from "@/components/shared/pagination";
//import { useSearchParams } from 'next/navigation';
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug } = params;

  const webPage = await getWebPageBySlug(slug);
  if (!webPage) {
    return { title: "Web page not found" };
  }
  return {
    title: webPage.title,
  };
}

export default async function ProductDetailsPage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; color: string; size: string }>;
}) {
  const searchParams = await props.searchParams

  const {
    page = '1',
  } = searchParams

 // const params = { q, category, tag, price, rating, sort, page }

  //const currentPage = 1;
  const productsPerPage = 8;
  const data = await getAllProducts({
    cache: "no-store",
    category: "all",
    tag: "all",
    query: "",
    price: "all",
    rating: "all",
    page: Number(page),
    sort: "best-selling",
    limit: productsPerPage,
  });

  //const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })
  const params = await props.params;
  const { slug } = params;
  const webPage = await getWebPageBySlug(slug);

  if (!webPage) notFound();

  return (
    <>
      {/* <div className='md:p-4 md:space-y-4 bg-border'>
    <Card className='w-full rounded-none'>
    <CardContent className='p-4 items-center gap-3'>
      <ProductSlider title={"Today's Deals"} products={todaysDeals} />
    </CardContent>
  </Card>
  <Card>
    
  </Card>
  </div> */}
      <div className="container mx-auto p-3">
        <h1 className="text-2xl font-bold mb-4">All Hotels</h1>

        {data.products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data.products.map((product) => (
              <HotelCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      {/* Pagination */}
      {data.totalPages > 1 && (
        <div className="mt-6">
          <Pagination page={page} totalPages={data.totalPages} />
        </div>
      )}
      {/*<div className='p-4 max-w-3xl mx-auto'>
      <h1 className='h1-bold py-4'>{webPage.title}</h1>
      <section className='text-justify text-lg mb-20 web-page-content'>
        <ReactMarkdown>{webPage.content}</ReactMarkdown>
      </section>
    </div> */}
    </>
  );
}
