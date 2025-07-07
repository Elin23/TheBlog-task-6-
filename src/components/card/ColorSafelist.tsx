const ColorSafelist = () => (
    //note: This component was created to force Tailwind to generate specific text and background color classes
    // based on category colors used dynamically in blog cards (like text-purple, bg-lightBlue, etc).
    // The issue was that Tailwind doesn't recognize dynamic class names (e.g. text-${cat.color}),
    // so some category colors were not showing correctly.
    // By listing them here in a hidden element, Tailwind includes them during build.

    <div className="hidden">
        text-purple text-text text-dark text-lightPurple text-lightGray
        text-blue text-lightBlue text-pink text-lightPink
        text-darkCerulean text-lightCerulean text-green text-lightGreen
        text-darkBlue text-bg-soft text-red text-lightRed

        bg-purple bg-text bg-dark bg-lightPurple bg-lightGray
        bg-blue bg-lightBlue bg-pink bg-lightPink
        bg-darkCerulean bg-lightCerulean bg-green bg-lightGreen
        bg-darkBlue bg-bg-soft bg-red bg-lightRed
    </div>
);

export default ColorSafelist;
