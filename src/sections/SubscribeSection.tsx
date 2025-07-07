import { Link } from "react-router-dom";
import CustomButton from "../components/global/CustomButton";

interface SectionProps {
    sectionName: string;
    title: string;
    paragraph: string;
    placeholder: string
    Hint: string
    link: string
    linkLabel: string;
}

export default function SubscribeSection({ sectionName, title, paragraph, placeholder, Hint, link, linkLabel }: SectionProps) {
    return (
        <div className="flex flex-col items-start md:items-center dark:text-white font-inter" data-aos="fade">
            <p className="mb-3 font-semibold text-base text-purple">{sectionName}</p>
            <h3 className="mb-6 font-semibold text-5xl leading-[60px]">{title}</h3>
            <p className="mb-10 lg:w-[750px] font-normal text-xl md:text-center lg:px-5 text-lightGray">{paragraph}</p>
            <form className="sm:w-auto w-full ">
                <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <div className="py-3 pl-4 pr-6 border rounded-lg dark:bg-white">
                        <input className=" placeholder:text-gray-500  placeholder:text-base placeholder:font-normal md:w-[360px] border-0 outline-0 text-dark" type="email" placeholder={placeholder} />
                    </div>
                    <CustomButton style="py-3 w-[118px] text-white bg-violet-700 outline-none border-0 rounded-lg font-medium text-base px-5 cursor-pointer hover:bg-violet-900" btnType="submit" label="Subscribe" />
                </div>
                <p className="font-normal text-sm md:text-base text-lightGray  ">{Hint} <Link to={link} className="underline">{linkLabel}</Link></p>
            </form>
        </div>
    )
}
