import IgniteLogo from "./svg/IgniteLogo";
import ToggleShowLessonList from "./togglers/ToggleShowLessonList";
import ToggleTheme from "./togglers/ToggleTheme";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-between lg:justify-center bg-gray-500 dark:bg-gray-700 border-b border-b-gray-400 dark:border-b-gray-600 px-6">
            <IgniteLogo/>
            <span className="flex lg:absolute right-5 gap-3">
                <ToggleTheme/>
                <ToggleShowLessonList/>
            </span>
        </header>
    )
}