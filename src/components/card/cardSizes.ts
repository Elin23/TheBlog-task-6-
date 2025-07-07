const baseStyles = {
    container: "w-full",
    title: "font-semibold",
    hook: "text-gray-500 font-normal dark:text-lightGray text-base mb-6 mt-3",
  };
  
  export const cardSizes = {
    large: {
      container: "w-full max-xl:flex max-xl:flex-col",
      img: "lg:mb-8 mb-6 w-full xl:min-w-[592px] max-h-[246px] object-cover",
      title: baseStyles.title + " text-2xl",
      hook: baseStyles.hook,
    },
    medium: {
      container: "w-full min-[1400px]:min-w-[592px]",
      img: "md:mr-6 mb-6 w-full mr-0 max-h-[228px] object-cover",
      title: baseStyles.title + " text-2xl",
      hook: `${baseStyles.hook} line-clamp-3 md:line-clamp-2`,
    },
    small: {
      container: "max-[540px]:flex max-[540px]:flex-col",
      img: "w-full md:max-w-[320px] object-cover",
      title: baseStyles.title + 'text-lg',
      hook: `${baseStyles.hook} line-clamp-3`,
    },
    square: {
      container: "min-h-[444px]",
      img: "w-full h-[240px] object-cover mb-6",
      title: `${baseStyles.title} mt-[12px] text-2xl`,
      hook: `${baseStyles.hook} line-clamp-3 md:line-clamp-2`,
    },
  };
  