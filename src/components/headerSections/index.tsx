type HeaderSectionsProps = {
    title: string;
    description: string;
};

export function HeaderSections(props: HeaderSectionsProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="uppercase text-3xl font-semibold">{props.title}</h2>
            <div className="relative z-[10]">
                <img
                    src="/about-filhote.png"
                    className="absolute -top-26.5"
                    width={120}
                    height={300}
                />
                <div className="bg-blue-200 absolute -top-28 -left-10 w-[210px] h-[210px] rounded-full -z-[1]" />
                <div className="bg-purple py-4 px-10 rounded-full flex justify-end w-[600px]">
                    <p className="text-xl w-4/5">{props.description}</p>
                </div>
            </div>
        </div>
    );
}
