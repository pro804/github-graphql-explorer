import { Button } from "../ui/button";
import { Card, CardTitle, CardDescription, CardHeader } from "../ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};

const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
        <img
          src={avatarUrl}
          alt={name || "Profile picture"}
          loading="lazy"
          decoding="async"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded object-cover shrink-0 self-center sm:self-auto"
        />

        <div className="flex flex-col gap-y-2 min-w-0 flex-1 basis-0 w-full">
          <CardTitle className="truncate" title={name || "No name found"}>
            {name || "No name found"}
          </CardTitle>

          <CardDescription
            className="break-words whitespace-pre-wrap overflow-hidden line-clamp-4 sm:line-clamp-6"
            title={bio || "No bio found"}
          >
            {bio || "No bio found"}
          </CardDescription>

          <Button asChild size="sm" className="w-full sm:w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer noopener">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
