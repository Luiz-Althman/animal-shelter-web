import { HeaderSections } from '../../../components/headerSections';
import { boxs } from '../../../mocks/SectionSecond';

export function SectionSecond() {
    return (
        <section className="py-30 relative" id="about-us">
            <HeaderSections
                title="about us"
                description="My name is Charlie and I’m going to tell you about our project!"
            />
            {boxs.map((item) => (
                <div
                    className={`mt-25 flex ${
                        item.invert ? 'flex-row-reverse' : ''
                    }  items-center justify-between`}
                    key={item.id}
                >
                    <div className="relative">
                        <div
                            className={`${item.color} w-18 p-3 rounded-full flex items-center justify-center absolute left-10`}
                        >
                            <p className="text-white font-bold text-5xl">
                                {item.id}
                            </p>
                        </div>
                        <img
                            src={item.url}
                            alt={item.alt}
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="w-1/2  z-[40]">
                        <h3 className="text-3xl uppercase">{item.title}</h3>
                        <p className="leading-6 mt-5 font-light">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
            <div className="absolute w-[100px] h-[100px] bg-green-light/50 bottom-1/6 right-20 rounded-full z-[1]" />
            <div className="absolute w-[180px] h-[180px] bg-bege/50 top-2/4 left-0 rounded-full z-[1]" />
            <div className="absolute w-[250px] h-[250px] bg-aqua/50 top-2/7 -right-10 rounded-full z-[1]" />
            <div className="absolute w-[100px] h-[100px] bg-green-light/50 top-98 right-2/7 rounded-full z-[1]" />
        </section>
    );
}
