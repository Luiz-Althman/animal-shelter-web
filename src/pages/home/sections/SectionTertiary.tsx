import { HeaderSections } from '../../../components/headerSections';
import { animals } from '../../../mocks/SectionTertiary';

export function SectionTertiary() {
    return (
        <section className="py-30 relative" id="our-animals">
            <HeaderSections
                title="our animals"
                description="And now I'll introduce you to our pets"
            />
            <div className="absolute w-[330px] h-[330px] bg-bege/50 top-50 -right-5 rounded-full" />
            <div className="absolute w-[330px] h-[330px] bg-aqua/50 top-2/4 left-2/5 rounded-full" />
            <div className="absolute w-[150px] h-[150px] bg-aqua/50 bottom-20 right-40 rounded-full" />

            <div className="grid grid-cols-3 gap-8 mt-25">
                {animals.map((item) => (
                    <div className="bg-white rounded-xl z-[40]">
                        <img src={item.url} alt="" />
                        <div className="p-3 text-grayText-200">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-xl">
                                    {item.animalName}
                                </h4>
                                <h5 className="font-medium text-xs">
                                    {item.years}
                                </h5>
                            </div>
                            <h5 className="font-light">{item.breed}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
