import { SectionContact } from './sections/SectionContact';
import { SectionFirst } from './sections/SectionFirst';
import { SectionQuarternary } from './sections/SectionQuarternary';
import { SectionSecond } from './sections/SectionSecond';
import { SectionTertiary } from './sections/SectionTertiary';

export function Home() {
    return (
        <div>
            <div className="relative">
                <div className="max-w-5xl mx-auto">
                    <SectionFirst />
                </div>
                <div className="border-b-5 border-rose-100 w-full absolute -bottom-38 shadow-[0px_-5px_17px_0px_rgba(0,0,0,0.25)]" />
            </div>
            <div className="bg-background mt-38 z-10">
                <div className="max-w-5xl mx-auto">
                    <SectionSecond />
                </div>
                <div className="border-b-5 border-rose-100 w-full shadow-[0px_-5px_17px_0px_rgba(0,0,0,0.25)]" />
                <div className="max-w-5xl mx-auto">
                    <SectionTertiary />
                </div>
                <div className="border-b-5 border-rose-100 w-full shadow-[0px_-5px_17px_0px_rgba(0,0,0,0.25)]" />
                <div className="max-w-5xl mx-auto">
                    <SectionQuarternary />
                </div>
                <div className="border-b-5 border-rose-100 w-full shadow-[0px_-5px_17px_0px_rgba(0,0,0,0.25)]" />
            </div>
            <div className="max-w-5xl mx-auto">
                <SectionContact />
            </div>
        </div>
    );
}
