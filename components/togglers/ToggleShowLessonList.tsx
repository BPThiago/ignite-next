import { BookBookmark } from "phosphor-react";
import { useContext } from "react";
import { ShowLessonListContext } from "../../context/showLessonList";

export default function ToggleShowLessonList() {
    const {showLessonList, toggleLessonList} = useContext(ShowLessonListContext)

    return (
        <label className="lg:hidden hover:bg-gray-600 text-gray-100 p-[6px] rounded-full cursor-pointer">
            <input type="checkbox" checked={showLessonList} className="hidden" onChange={() => toggleLessonList()}/>
            <BookBookmark size={28} />
        </label>
    )
}