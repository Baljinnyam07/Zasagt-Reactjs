import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

function PostsMore({posts, type}) {
  const intl = useIntl();
  return (
    <>
      <div className="grid justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-[24px] ">
        {posts.map((post) => <div key={post.id}>
          <div className="bg-white rounded flex flex-col w-full">
            <div className="aspect-video bg-cover inline-block h-1/2 rounded-t" style={{backgroundImage: `url("${post.image}")`}}></div>
            <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
            <div className="text-[#03040A] text-[18px] font-bold mb-[40px] line-clamp-2" style={{ maxHeight: "3em", lineClamp: 2 }}>
              {post.title}
            </div>
              <div className="flex justify-between items-center">
                <div className="text-[#707070] font-light">{post.createdAt ? post.date : (new Date(parseInt(post.date) * 1000)).toJSON().slice(0, 10)}</div>
                <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to={`/posts/${type}/${post.id}`} dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "posts_readmore"}) }} />
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default PostsMore;