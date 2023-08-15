
import { Link } from "react-router-dom";

function extractContent(html, lineClamp = Infinity) {
  const tempElement = document.createElement("p");
  tempElement.innerHTML = html;
  const contentContainer = document.createElement("p");
  contentContainer.style.overflow = "hidden";
  contentContainer.style.display = "-webkit-box";
  contentContainer.style.webkitBoxOrient = "vertical";
  contentContainer.appendChild(tempElement);
  const extractedText = contentContainer.textContent;
  return extractedText;
}
function PostsMore({ posts, type }) {
  return (
    <>
      <div className="grid justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-[24px] ">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="bg-white rounded flex flex-col w-full text-[#8F9099]">
              <div className="aspect-video bg-cover inline-block h-1/2 w-[282px] h-[180px]" style={{ backgroundImage: `url("${post.image}")` }}></div>
              <div className=" flex flex-col justify-between grow">
              <div className="text-[#35363B] mb-[18px] mt-[18px] text-[#8F9099] text-[12px]">
              <svg className="inline-block mr-[8px] mb-[5px]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
              </svg>
              {post.createdAt ? post.date : (new Date(parseInt(post.date) * 1000)).toJSON()?.slice(0, 10)}
            </div>
                <div className="text-[#454655] font-500 w-[300px] h-[68px] text-[23px] font-bold mb-[16px] line-clamp-2" style={{ maxHeight: "3em", lineClamp: 2 }}>
                  {post.title}
                </div>
                <div className="h-[96px] w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: extractContent(post.content) }} />
                <div className="items-center">
                  <Link className="text-[14px] text-white font-light rounded py-[8px] px-[16px]" to={`/posts/${type}/${post.id}`}>
                    <svg width="54" height="17" viewBox="0 0 54 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.63 3.354L28.522 9.29V13H27.178V9.304L24.07 3.354H25.54L27.892 8.128L30.244 3.354H31.63ZM34.6438 13.168C33.4538 13.168 32.3478 12.748 31.5638 11.866L32.3478 11.11C32.9078 11.698 33.6218 12.048 34.5738 12.048C35.9038 12.048 36.6598 11.348 36.6598 10.214C36.6598 9.094 35.9458 8.45 34.5318 8.45H33.6078L33.7898 7.358H34.5458C35.6518 7.358 36.3798 6.756 36.3798 5.762C36.3798 4.95 35.9178 4.278 34.7558 4.278C33.9578 4.278 33.2298 4.586 32.5158 5.174L31.8158 4.376C32.6978 3.592 33.6918 3.186 34.8538 3.186C36.7998 3.186 37.7658 4.278 37.7658 5.65C37.7658 6.868 36.9958 7.582 35.8758 7.834C37.0518 7.96 38.0878 8.73 38.0878 10.228C38.0878 11.992 36.6318 13.168 34.6438 13.168ZM41.4788 3.186C43.5088 3.186 45.0488 4.53 45.0488 8.17C45.0488 11.418 43.6348 13.168 41.2968 13.168C40.0088 13.168 39.1828 12.692 38.5808 12.132L39.2528 11.306C39.7988 11.726 40.3308 12.048 41.2548 12.048C42.6968 12.048 43.5788 11.026 43.6348 8.576H39.8968V7.484H43.6348C43.5508 5.062 42.6128 4.278 41.4648 4.278C40.5828 4.278 40.0368 4.502 39.3648 4.992L38.6788 4.18C39.4348 3.55 40.2888 3.186 41.4788 3.186ZM50.1789 7.792L53.1189 13H51.6069L49.3809 8.73L47.1269 13H45.6989L48.5969 7.862L45.9509 3.354H47.4629L49.4089 6.98L51.3689 3.354H52.7969L50.1789 7.792Z" fill="#23356B"/>
                      <path d="M2.66683 9.66675L10.7802 9.66675L7.0535 13.3934L8.00016 14.3334L13.3335 9.00008L8.00016 3.66675L7.06016 4.60675L10.7802 8.33341L2.66683 8.33341L2.66683 9.66675Z" fill="#23356B"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostsMore;