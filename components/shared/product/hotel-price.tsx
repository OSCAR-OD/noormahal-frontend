"use client";
import useSettingStore from "@/hooks/use-setting-store";
import { cn, round2 } from "@/lib/utils";
import {} from //useFormatter,
//  useTranslations
"next-intl";

const HotelPrice = ({
  price,
  className,
  listPrice = 0,
  isDeal = false,
  forListing = true,
  plain = false,
  availability = 0,
  numSales = 0,
}: {
  price: number;
  isDeal?: boolean;
  listPrice?: number;
  className?: string;
  forListing?: boolean;
  plain?: boolean;
  availability?: number;
  numSales?: number;
}) => {
  const { getCurrency } = useSettingStore();
  const currency = getCurrency();
  //const t = useTranslations()
  const convertedPrice = round2(currency.convertRate * price);
  const convertedListPrice = round2(currency.convertRate * listPrice);

  //const format = useFormatter()
  const discountPercent = Math.round(
    100 - (convertedPrice / convertedListPrice) * 100
  );
  const stringValue = convertedPrice.toString();
  const [intValue, floatValue] = stringValue.includes(".")
    ? stringValue.split(".")
    : [stringValue, ""];
  const availabilityCount = availability - numSales;
  return plain ? (
    convertedPrice
  ) : // format.number(convertedPrice, {
  //   style: 'currency',
  //   currency: currency.code,
  //   currencyDisplay: 'narrowSymbol',
  // })
  convertedListPrice == 0 ? (
    <div className={cn("text-3xl", className)}>
      <span className="text-xs align-super">{currency.symbol}</span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </div>
  ) : isDeal ? (
    <div className="space-y-2">
      <div className="flex justify-center items-center gap-2">
        <span className="bg-red-700 rounded-sm p-1 text-white text-sm font-semibold">
          {/* {discountPercent}% {t('Product.Off')} */}
          {discountPercent}% {"Product Off"}
        </span>
        <span className="text-red-700 text-xs font-bold">
          {/* {t('Product.Limited time deal')} */}
          Limited time deal
        </span>
      </div>
      <div
        className={`flex ${forListing && "justify-center"} items-center gap-2`}
      >
        <div className={cn("text-3xl", className)}>
          <span className="text-xs align-super">{currency.symbol}</span>
          {intValue}
          <span className="text-xs align-super">{floatValue}</span>
        </div>
        <div className="text-muted-foreground text-xs py-2">
          {/* {t('Product.Was')}:{' '} */}
          {"Price Per Night"}:{" "}
          <span className="line-through">
            {convertedListPrice}
            {/* {format.number(convertedListPrice, {
              style: 'currency',
              currency: currency.code,
              currencyDisplay: 'narrowSymbol',
            })} */}
          </span>
        </div>
        <div className="text-muted-foreground text-xs">Availability: {availabilityCount}</div>
      </div>
    </div>
  ) : (
    <div className="">
      <div className="flex justify-center gap-3">
        <div className="text-3xl text-orange-700">-{discountPercent}%</div>
        <div className={cn("text-3xl", className)}>
          <span className="text-xs align-super">{currency.symbol}</span>
          {intValue}
          <span className="text-xs align-super">{floatValue}</span>
        </div>
      </div>
      <div className="text-muted-foreground text-xs py-2">
        {"Price Per Night"}:{" "}
        <span className="line-through">
          {convertedListPrice}
          {/* {format.number(convertedListPrice, {
            style: 'currency',
            currency: currency.code,
            currencyDisplay: 'narrowSymbol',
          })} */}
        </span>
      </div>
      <div className="text-muted-foreground text-xs">Availability: {availabilityCount}</div>
    </div>
  );
};

export default HotelPrice;
