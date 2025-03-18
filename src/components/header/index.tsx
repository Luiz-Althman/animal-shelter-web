import { useState } from 'react';

export function Header() {
    const [activeId, setActiveId] = useState<number | null>();
    return (
        <header className="flex w-full justify-center p-6 relative">
            <div className="w-[400px] h-[400px] bg-purple/50 rounded-full absolute inset-0 m-auto -z-10" />
            <nav>
                <div className="flex gap-5">
                    {['About us', 'our animals', 'our store', 'contact'].map(
                        (item, index, arr) => (
                            <a
                                key={index}
                                className={`relative uppercase cursor-pointer ${
                                    activeId === index
                                        ? 'font-bold text-2xl'
                                        : 'text-xl hover:text-blue-100/50'
                                }`}
                                onClick={() => setActiveId(index)}
                                href={`#${item
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')}`}
                            >
                                {item}
                                {index < arr.length - 1 && (
                                    <span className="ml-4 text-blue-100 font-extralight">
                                        •
                                    </span>
                                )}
                            </a>
                        )
                    )}
                </div>
            </nav>
        </header>
    );
}
