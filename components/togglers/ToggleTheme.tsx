
import { MoonStars as Moon, Sun } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ToggleTheme() {
    const [theme, setTheme] = useState("light")

    useEffect(
        () => {
            document.documentElement.setAttribute(
                "data-color-scheme", theme
            )
        }, [theme]
    )

    function handleTheme() {
        if (theme == "light") {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }

        setTheme(theme == "light" ? "dark" : "light")
    }

    return(
        <label className="cursor-pointer">
            <input type="checkbox" checked={theme == 'light'} className="hidden" onChange={() => handleTheme()}/>
            <div className="hover:bg-gray-600 text-gray-100 p-[6px] rounded-full">
                {theme == 'light' ?
                <Sun size={28}></Sun>
                :
                <Moon size={28}></Moon>
                }
            </div>
        </label>
    )
}