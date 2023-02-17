import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const fomattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{fomattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
