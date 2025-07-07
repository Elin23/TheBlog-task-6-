import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/reducers/themeSlice";


function ToggleModeBtn() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle} type="button"
      className="relative w-24 h-10 flex items-center rounded-full p-1 transition duration-500 max-w-24 py-2 bg-dark dark:bg-white">
      <div className={`absolute left-4 w-6 h-6 transition-opacity duration-500 dark:opacity-0 opacity-100`}>
        <img src="/TheBlog-task-6-/assets/icons/sun.png" alt="lightMode" />
      </div>
      <div className="absolute right-4 w-6 h-6 transition-opacity duration-500 dark:opacity-100 opacity-0">
        <img src="/TheBlog-task-6-/assets/icons/moon.png" alt="darkMode" />
      </div>
      <div className={`w-6 h-6 dark:translate-x-4 dark:bg-dark translate-x-12 bg-white rounded-full transform transition-transform duration-500  `}/>
    </button>
  );
}

export default ToggleModeBtn;
