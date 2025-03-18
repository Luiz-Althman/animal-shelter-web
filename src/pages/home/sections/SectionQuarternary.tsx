import { HeaderSections } from '../../../components/headerSections';
import { shop } from '../../../mocks/SectionQuarternary';

export function SectionQuarternary() {
    return (
        <section className="py-30 relative" id="our-store">
            <HeaderSections
                description="Here you can choose products for the kennel or for your dog"
                title="our store"
            />
            <div className="absolute w-[250px] h-[250px] bg-aqua/50 top-0 right-0 rounded-full" />
            <div className="absolute w-[250px] h-[250px] bg-bege/50 top-45 left-0 rounded-full z-[1]" />

            <div className="grid grid-cols-3 gap-8 mt-25 z-[50] relative">
                {shop.map((item) => (
                    <div className="bg-white rounded-xl z-[50]">
                        <img
                            src={item.url}
                            alt=""
                            height={250}
                            className="rounded-xl"
                        />
                        <div className="p-3 text-grayText-200 max-h-20">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-xl">
                                    {item.shop}
                                </h4>
                                <p className="font-medium text-xs">
                                    {item.price}
                                </p>
                            </div>
                            <h5 className="font-light">{item.typeProduct}</h5>
                        </div>
                    </div>
                ))}
                <div className="absolute w-[150px] h-[150px] bg-aqua/50 bottom-2/5 -right-10 rounded-full z-[1]" />
            </div>
        </section>
    );
}
