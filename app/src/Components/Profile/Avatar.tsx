import type Person from "./Person";
import getImageUrl from "./util";

export default function Avatar({size, person}: {size: number, person: Person}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person.url)}
            width={size}
            height={size}
        />
    )
}