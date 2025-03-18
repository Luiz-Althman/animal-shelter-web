import Labrador from '/labrador.webp';

export function SectionFirst() {
    return (
        <section className="grid grid-cols-2 relative">
            <div>
                <h1 className="text-3xl mt-52 leading-10">
                    Happiness is closer <br /> than you think
                </h1>
                <button
                    type="button"
                    className="relative mt-10 text-2xl bg-rose-100 overflow-hidden cursor-pointer py-2 px-20 rounded-3xl text-white before:absolute before:inset-0 before:bg-rose-500/40 before:scale-x-0 before:origin-left before:transition-transform before:duration-700 hover:before:scale-x-100"
                >
                    <span className="relative z-10">Let’s Go!</span>
                </button>
            </div>
            <div className="absolute -right-25 -top-22 z-[-9]">
                <img
                    src={Labrador}
                    alt="Labrador"
                    width={500}
                    loading="eager"
                />
            </div>
            <div className="absolute w-[500px] h-[500px] bg-rose-100 -right-27 -bottom-39 rounded-full -z-10" />
        </section>
    );
}
