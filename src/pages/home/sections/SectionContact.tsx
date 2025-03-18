import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import { HeaderSections } from '../../../components/headerSections';

export function SectionContact() {
    return (
        <section className="py-30 relative" id="contact">
            <HeaderSections
                title="contact"
                description="Thank you for the company it was a pleasure to meet you! here you can leave your phone number to contact our operator and also help our project with a donation"
            />
            <div className="flex justify-between items-center mt-15">
                <div className="space-y-4">
                    <label htmlFor="email" className="flex flex-col gap-1">
                        <span className="pl-3 text-xs">
                            Enter your phone number
                        </span>
                        <input
                            type="text"
                            placeholder="Number"
                            className="border-rose-100 border-2 py-2 px-4 rounded-md w-xs"
                        />
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-1">
                        <span className="pl-3 text-xs">
                            You can also give us your email to receive news
                        </span>
                        <input
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            className="border-rose-100 border-2 py-2 px-4 rounded-md w-xs"
                        />
                    </label>
                    <button
                        type="button"
                        className="relative text-2xl bg-rose-100 overflow-hidden cursor-pointer py-2 px-20 rounded-md text-white before:absolute before:inset-0 before:bg-rose-500/40 before:scale-x-0 before:origin-left before:transition-transform before:duration-700 hover:before:scale-x-100"
                    >
                        <span className="relative z-10">Send</span>
                    </button>
                </div>
                <div className="flex flex-col gap-5 relative">
                    <div className="absolute w-[300px] h-[300px] bg-bege/50 right-15 bottom-10 rounded-full -z-10" />
                    <a
                        href="mailto:luizalthmandev@gmail.com"
                        target="_blank"
                        className="flex items-center gap-5 text-2xl cursor-pointer hover:opacity-80"
                    >
                        <EnvelopeSimple size={40} />
                        luizalthmandev@gmail.com
                    </a>
                    <a
                        href="https://wa.me/5511947469137"
                        target="_blank"
                        className="flex items-center gap-5 text-2xl cursor-pointer hover:opacity-80"
                    >
                        <WhatsappLogo size={40} />
                        (11) 94746-9137
                    </a>
                </div>
            </div>
            <div className="absolute w-[180px] h-[180px] bg-aqua/50 right-96 bottom-00 rounded-full -z-10" />
        </section>
    );
}
