import Avatar from "./Avatar";
import Card from "./Card";

export default function Profile() {
    return (
        <Card>
            <Avatar
                person={{
                    name: "aaaa",
                    url: "https://i.imgur.com/MK3eW3As.jpg"
                }}
                size={100}
            />
        </Card>
    )
}