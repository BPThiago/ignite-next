import React from "react";

interface IContext {
    showLessonList: boolean
    toggleLessonList: () => void
}

export const ShowLessonListContext = React.createContext<IContext>(
    {
        showLessonList: false,
        toggleLessonList: () => {}
    })

export const ShowLessonListProvider = ({ children }: {children: React.ReactNode}) => {
    const [showLessonList, setShowLessonList] = React.useState(false)

    function toggleLessonList() {
        setShowLessonList(!showLessonList)
    }

    return (
        <ShowLessonListContext.Provider value={{showLessonList, toggleLessonList}}>
            {children}
        </ShowLessonListContext.Provider>
    )
}