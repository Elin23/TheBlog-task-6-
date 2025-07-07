type HugeTitleProps = {
  content : string;
}
function HugeTitle({content} : HugeTitleProps) {
  return (
    <h1 className={` whitespace-nowrap border-t border-b border-borderColor dark:border-white
                   text-dark w-full text-center dark:text-white text-[56px] min-[380px]:text-7xl
                    min-[640px]:text-[120px] min-[850px]:text-[160.8px] lg:text-[170px] xl:text-[220px]
                     min-[1400px]:text-[243.8px] uppercase font-bold font-inter leading-[100%]`}
         data-aos="flip-up">
      {content}
    </h1>
  )
}

export default HugeTitle
