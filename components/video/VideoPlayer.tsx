import ReactPlayer from "react-player/youtube";

export default function VideoPlayer({id}: {id: string}) {
    return (
        <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width="100%"
        height="100%"
        />
    )
}