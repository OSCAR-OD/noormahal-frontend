import { auth } from "@/auth";
import BookNow from "@/components/shared/product/book-now";
import { Card, CardContent } from "@/components/ui/card";
import {
  getProductBySlug,
} from "@/lib/actions/product.actions";
import ReviewList from "./review-list";
import { generateId, round2 } from "@/lib/utils";
//import ProductPrice from "@/components/shared/product/product-price";
import HotelPrice from "@/components/shared/product/hotel-price";
import HotelCarousel from "@/components/shared/product/hotel-carousel";
import AddToBrowsingHistory from "@/components/shared/product/add-to-browsing-history";
import { Separator } from "@/components/ui/separator";
import RatingSummary from "@/components/shared/product/rating-summary";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }

  const imageUrl = product.images?.[0]?.startsWith("https")
    ? product.images[0]
    : `${process.env.NEXT_PUBLIC_BASE_URL}${product.images[0]}`;

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${product.slug}`,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; color: string; size: string }>;
}) {
  const searchParams = await props.searchParams;
  const { color, size } = searchParams;
  const params = await props.params;
  const { slug } = params;
  const session = await auth();
  const product = await getProductBySlug(slug);
  return (
    <div>
      <AddToBrowsingHistory id={product._id} category={product.category} />
      <section>
        <div className="grid grid-cols-1 ">
          <div className="w-full">
            <HotelCarousel images={product.images} />
          </div>
          <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">
            <div className="flex flex-col gap-3">
              <p className="p-medium-16 rounded-full bg-grey-500/10 text-grey-500">
                Brand: {product.brand} Category: {product.category}
              </p>
              <h1 className="font-bold text-lg lg:text-xl">{product.name}</h1>
              <RatingSummary
                avgRating={product.avgRating}
                numReviews={product.numReviews}
                asPopover
                ratingDistribution={product.ratingDistribution}
              />
              <Separator />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <HotelPrice
                isDeal={product.tags.includes("todays-deal")}
                  price={product.price}
                  listPrice={product.listPrice}
                  availability={product.availability}
                  numSales={product.numSales}
                  forListing={false}
                />
              </div>
            </div>
            <Separator className="my-2" />
            <p className="p-bold-20 text-grey-600">Description</p>
            <p className="p-medium-16 lg:p-regular-18">{product.description}</p>
          </div>
          <div>
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <HotelPrice price={product.price} />
                {product.availability > 0 && product.availability <= 3 && (
                  <div className="text-destructive font-bold">
                    {product.availability > 0
                      ? `Only ${product.availability} left in stock - order soon`
                      : "Out of stock"}
                  </div>
                )}
                {product.availability !== 0 ? (
                  <div className="text-green-700 text-xl">Available</div>
                ) : (
                  <div className="text-destructive text-xl">Not Available</div>
                )}
                {product.availability !== 0 && (
                  <div className="flex justify-center items-center">
                    <BookNow
                      item={{
                        clientId: generateId(),
                        product: product._id,
                        countInStock: product.availability,
                        availability: product.availability,
                        name: product.name,
                        slug: product.slug,
                        category: product.category,
                        price: round2(product.price),
                        quantity: 1,
                        image: product.images[0],
                        size: size || product.sizes[0],
                        color: color || product.colors[0],
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="h2-bold mb-2" id="reviews">
          Customer Reviews
        </h2>
        <ReviewList product={product} userId={session?.user.id} />
      </section>
      <section className="mt-10">
      </section>
    </div>
  );
}
