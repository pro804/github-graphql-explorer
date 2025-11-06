import { useQuery } from "@apollo/client";
import { GET_USER } from "@/queries";
import { UserData } from "@/types";

type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <h2 className="text-xl">{error.message}</h2>;
  }

  if (!data) {
    return <h2 className="text-xl capitalize">user not found.</h2>;
  }
  const {
    avatarUrl,
    name,
    bio,
    followers,
    following,
    gists,
    repositories,
    url,
  } = data.user;
  return (
    <div>
      <h1 className="text-2xl font-bold">{bio}</h1>
    </div>
  );
};
export default UserProfile;
